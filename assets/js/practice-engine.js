/**
 * ATLAS 9 - PRACTICE ENGINE
 * Manages custom practice sessions, immediate feedback, and scoring.
 */

(function(window) {
    'use strict';

    class PracticeSession {
        constructor(config) {
            this.config = Object.assign({
                mode: 'study', // 'study' (show answer immediately) or 'test' (show at end)
                subject: 'all',
                lessonIds: [],
                types: 'all',
                levels: 'all',
                count: 20
            }, config);

            this.questions = [];
            this.currentIndex = 0;
            this.userAnswers = {}; // qId -> answer
            this.flagged = new Set();
            this.isSubmitted = false;
            this.results = null;
            this.startTime = Date.now();
            this.endTime = null;

            this.initQuestions();
        }

        initQuestions() {
            const filterCriteria = {
                subject: this.config.subject,
                lessonIds: this.config.lessonIds,
                type: this.config.type,
                cognitiveLevel: this.config.cognitiveLevel
            };
            let pool = window.AtlasQuestionEngine.filterQuestions(filterCriteria);
            pool = window.AtlasQuestionEngine.shuffle(pool);

            const count = Math.min(this.config.count || 20, pool.length);
            this.questions = pool.slice(0, count).map(q => window.AtlasQuestionEngine.shuffleOptions(q));
        }

        getCurrentQuestion() {
            if (this.questions.length === 0) return null;
            return this.questions[this.currentIndex];
        }

        next() {
            if (this.currentIndex < this.questions.length - 1) {
                this.currentIndex++;
                return true;
            }
            return false;
        }

        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                return true;
            }
            return false;
        }

        jumpTo(index) {
            if (index >= 0 && index < this.questions.length) {
                this.currentIndex = index;
                return true;
            }
            return false;
        }

        toggleFlag(qId) {
            if (this.flagged.has(qId)) this.flagged.delete(qId);
            else this.flagged.add(qId);
        }

        setAnswer(qId, answer) {
            this.userAnswers[qId] = answer;
            // If in study mode, record progress immediately
            if (this.config.mode === 'study') {
                const q = this.questions.find(item => item.id === qId);
                if (q) {
                    const grade = window.AtlasQuestionEngine.gradeQuestion(q, answer);
                    window.AtlasStorage.recordAnswer(q, grade.isCorrect);
                }
            }
        }

        submit() {
            if (this.isSubmitted) return this.results;
            this.isSubmitted = true;
            this.endTime = Date.now();

            let correctCount = 0;
            let wrongCount = 0;
            let totalPoints = 0;
            const detailedResults = [];

            this.questions.forEach((q, idx) => {
                const uAns = this.userAnswers[q.id];
                const grade = window.AtlasQuestionEngine.gradeQuestion(q, uAns);
                if (grade.isCorrect) correctCount++;
                else wrongCount++;
                totalPoints += grade.score;

                // Record in test mode
                if (this.config.mode === 'test') {
                    window.AtlasStorage.recordAnswer(q, grade.isCorrect);
                }

                detailedResults.push({
                    index: idx + 1,
                    question: q,
                    userAnswer: uAns,
                    grade: grade
                });
            });

            const elapsedSeconds = Math.round((this.endTime - this.startTime) / 1000);
            window.AtlasStorage.addStudyTime(elapsedSeconds);

            const score10 = this.questions.length > 0 ? ((totalPoints / this.questions.length) * 10).toFixed(1) : 0;

            this.results = {
                totalQuestions: this.questions.length,
                correctCount: correctCount,
                wrongCount: wrongCount,
                score10: parseFloat(score10),
                elapsedSeconds: elapsedSeconds,
                detailedResults: detailedResults
            };

            return this.results;
        }
    }

    window.AtlasPracticeEngine = {
        currentSession: null,
        startSession: function(config) {
            this.currentSession = new PracticeSession(config);
            return this.currentSession;
        },
        getSession: function() {
            return this.currentSession;
        }
    };

})(window);
