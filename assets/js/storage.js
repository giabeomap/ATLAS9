/**
 * ATLAS 9 - LOCAL STORAGE & DATA PERSISTENCE ENGINE
 * Manages user progress, practice history, exam records, mistake book, and backup/restore.
 */

(function(window) {
    'use strict';

    const STORAGE_KEY_PROGRESS = 'atlas9_user_progress';
    const STORAGE_KEY_EXAMS = 'atlas9_exam_history';
    const STORAGE_KEY_MISTAKES = 'atlas9_mistake_book';
    const STORAGE_KEY_SETTINGS = 'atlas9_user_settings';

    // Default User Progress Schema
    const DEFAULT_PROGRESS = {
        totalAnswered: 0,
        totalCorrect: 0,
        totalWrong: 0,
        studyTimeSeconds: 0,
        completedLessons: {}, // lessonId -> { answered: N, correct: N, lastStudied: timestamp }
        subjectStats: {
            history: { answered: 0, correct: 0 },
            geography: { answered: 0, correct: 0 }
        },
        levelStats: {
            recognition: { answered: 0, correct: 0 },
            understanding: { answered: 0, correct: 0 },
            application: { answered: 0, correct: 0 },
            high_application: { answered: 0, correct: 0 }
        },
        answeredQuestions: {} // qId -> { isCorrect: bool, timestamp: ts, timesWrong: N }
    };

    const AtlasStorage = {
        /**
         * Get user progress
         */
        getProgress: function() {
            try {
                const data = localStorage.getItem(STORAGE_KEY_PROGRESS);
                if (data) return JSON.parse(data);
            } catch (e) {
                console.error('Error reading progress:', e);
            }
            return JSON.parse(JSON.stringify(DEFAULT_PROGRESS));
        },

        /**
         * Save user progress
         */
        saveProgress: function(progress) {
            try {
                localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
            } catch (e) {
                console.error('Error saving progress:', e);
            }
        },

        /**
         * Record a single question attempt
         */
        recordAnswer: function(q, isCorrect) {
            const p = this.getProgress();
            p.totalAnswered += 1;
            if (isCorrect) p.totalCorrect += 1;
            else p.totalWrong += 1;

            // Subject
            const subj = q.subject || 'history';
            if (!p.subjectStats[subj]) p.subjectStats[subj] = { answered: 0, correct: 0 };
            p.subjectStats[subj].answered += 1;
            if (isCorrect) p.subjectStats[subj].correct += 1;

            // Cognitive Level
            const lvl = q.cognitiveLevel || 'understanding';
            if (!p.levelStats[lvl]) p.levelStats[lvl] = { answered: 0, correct: 0 };
            p.levelStats[lvl].answered += 1;
            if (isCorrect) p.levelStats[lvl].correct += 1;

            // Lesson stats
            const lId = q.lessonId;
            if (lId) {
                if (!p.completedLessons[lId]) p.completedLessons[lId] = { answered: 0, correct: 0 };
                p.completedLessons[lId].answered += 1;
                if (isCorrect) p.completedLessons[lId].correct += 1;
                p.completedLessons[lId].lastStudied = Date.now();
            }

            // Answered question record
            const qId = q.id;
            if (!p.answeredQuestions[qId]) {
                p.answeredQuestions[qId] = { isCorrect: isCorrect, timestamp: Date.now(), timesWrong: isCorrect ? 0 : 1 };
            } else {
                p.answeredQuestions[qId].isCorrect = isCorrect;
                p.answeredQuestions[qId].timestamp = Date.now();
                if (!isCorrect) p.answeredQuestions[qId].timesWrong = (p.answeredQuestions[qId].timesWrong || 0) + 1;
            }

            this.saveProgress(p);

            // If wrong, automatically record to Mistake Book
            if (!isCorrect) {
                this.addMistake(q);
            }
        },

        /**
         * Add study time in seconds
         */
        addStudyTime: function(seconds) {
            const p = this.getProgress();
            p.studyTimeSeconds = (p.studyTimeSeconds || 0) + seconds;
            this.saveProgress(p);
        },

        /**
         * Get all mistakes from Mistake Book
         */
        getMistakes: function() {
            try {
                const data = localStorage.getItem(STORAGE_KEY_MISTAKES);
                if (data) return JSON.parse(data);
            } catch (e) {
                console.error('Error reading mistakes:', e);
            }
            return [];
        },

        /**
         * Add question to Mistake Book
         */
        addMistake: function(q, userNote = '') {
            const mistakes = this.getMistakes();
            const existing = mistakes.find(m => m.questionId === q.id);
            if (existing) {
                existing.wrongCount = (existing.wrongCount || 1) + 1;
                existing.lastWrongDate = Date.now();
                if (userNote) existing.userNote = userNote;
            } else {
                mistakes.push({
                    questionId: q.id,
                    subject: q.subject,
                    lessonId: q.lessonId,
                    lessonTitle: q.lessonTitle,
                    wrongCount: 1,
                    addedDate: Date.now(),
                    lastWrongDate: Date.now(),
                    userNote: userNote,
                    mastered: false
                });
            }
            try {
                localStorage.setItem(STORAGE_KEY_MISTAKES, JSON.stringify(mistakes));
            } catch (e) {
                console.error('Error saving mistakes:', e);
            }
        },

        /**
         * Remove question from Mistake Book (mark mastered)
         */
        removeMistake: function(questionId) {
            let mistakes = this.getMistakes();
            mistakes = mistakes.filter(m => m.questionId !== questionId);
            try {
                localStorage.setItem(STORAGE_KEY_MISTAKES, JSON.stringify(mistakes));
            } catch (e) {
                console.error('Error updating mistakes:', e);
            }
        },

        /**
         * Save Exam Attempt Record
         */
        saveExamRecord: function(record) {
            try {
                const exams = this.getExamHistory();
                exams.unshift(record); // newest first
                if (exams.length > 50) exams.pop(); // keep last 50
                localStorage.setItem(STORAGE_KEY_EXAMS, JSON.stringify(exams));
            } catch (e) {
                console.error('Error saving exam history:', e);
            }
        },

        /**
         * Get Exam History
         */
        getExamHistory: function() {
            try {
                const data = localStorage.getItem(STORAGE_KEY_EXAMS);
                if (data) return JSON.parse(data);
            } catch (e) {
                console.error('Error reading exam history:', e);
            }
            return [];
        },

        /**
         * Export all user data as JSON file for backup
         */
        exportBackup: function() {
            const backup = {
                app: 'ATLAS9',
                version: '1.0.0',
                exportDate: new Date().toISOString(),
                progress: this.getProgress(),
                mistakes: this.getMistakes(),
                examHistory: this.getExamHistory()
            };
            const jsonStr = JSON.stringify(backup, null, 2);
            const blob = new Blob([jsonStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ATLAS9_SaoLuu_TienDo_${new Date().toISOString().slice(0, 10)}.json`;
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 100);
            return true;
        },

        /**
         * Import user data from JSON file
         */
        importBackup: function(jsonString) {
            try {
                const data = JSON.parse(jsonString);
                if (!data.app || data.app !== 'ATLAS9') {
                    throw new Error('File không hợp lệ: Không phải file sao lưu của ATLAS 9.');
                }
                if (data.progress) localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(data.progress));
                if (data.mistakes) localStorage.setItem(STORAGE_KEY_MISTAKES, JSON.stringify(data.mistakes));
                if (data.examHistory) localStorage.setItem(STORAGE_KEY_EXAMS, JSON.stringify(data.examHistory));
                return { success: true };
            } catch (e) {
                return { success: false, error: e.message };
            }
        },

        /**
         * Clear all learning data (with safety)
         */
        resetAllData: function() {
            localStorage.removeItem(STORAGE_KEY_PROGRESS);
            localStorage.removeItem(STORAGE_KEY_EXAMS);
            localStorage.removeItem(STORAGE_KEY_MISTAKES);
            return true;
        }
    };

    window.AtlasStorage = AtlasStorage;

})(window);
