/**
 * ATLAS 9 - EXAM ENGINE
 * Real-time test simulation, countdown timer, auto-submit, and in-depth analytics.
 */

(function(window) {
    'use strict';

    class ExamSession {
        constructor(examInstance) {
            this.exam = examInstance; // from AtlasMatrixEngine.generateExam
            this.userAnswers = {};    // qId -> answer
            this.essayDrafts = {};    // essayId -> text
            this.essaySelfScores = {};// essayId -> points awarded by student
            this.flagged = new Set();
            this.currentSection = 'part1'; // 'part1' or 'part2'
            this.currentQuestionIndex = 0;
            this.isSubmitted = false;
            this.results = null;

            // Timer
            this.timeRemainingSeconds = (this.exam.timeMinutes || 45) * 60;
            this.timerInterval = null;
            this.startTime = Date.now();
            this.endTime = null;
            this.onTick = null; // callback (secondsRemaining)
            this.onTimeUp = null; // callback ()

            // Flatten Part 1 questions
            this.objectiveQuestions = [...(this.exam.mcqs || []), ...(this.exam.tfs || [])];
        }

        startTimer(onTick, onTimeUp) {
            this.onTick = onTick;
            this.onTimeUp = onTimeUp;
            if (this.timerInterval) clearInterval(this.timerInterval);

            this.timerInterval = setInterval(() => {
                if (this.isSubmitted) {
                    clearInterval(this.timerInterval);
                    return;
                }
                this.timeRemainingSeconds--;
                if (typeof this.onTick === 'function') {
                    this.onTick(this.timeRemainingSeconds);
                }
                if (this.timeRemainingSeconds <= 0) {
                    clearInterval(this.timerInterval);
                    if (typeof this.onTimeUp === 'function') {
                        this.onTimeUp();
                    }
                    this.submit();
                }
            }, 1000);
        }

        stopTimer() {
            if (this.timerInterval) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
            }
        }

        setAnswer(qId, answer) {
            this.userAnswers[qId] = answer;
        }

        setEssayDraft(essayId, text) {
            this.essayDrafts[essayId] = text;
        }

        setEssayScore(essayId, score) {
            this.essaySelfScores[essayId] = parseFloat(score) || 0;
        }

        toggleFlag(qId) {
            if (this.flagged.has(qId)) this.flagged.delete(qId);
            else this.flagged.add(qId);
        }

        submit() {
            if (this.isSubmitted) return this.results;
            this.isSubmitted = true;
            this.stopTimer();
            this.endTime = Date.now();

            const elapsedSeconds = Math.round((this.endTime - this.startTime) / 1000);
            window.AtlasStorage.addStudyTime(elapsedSeconds);

            // Grade Part 1: Objective Questions (Total 7.0 points)
            const totalObj = this.objectiveQuestions.length;
            const pointPerObjQuestion = totalObj > 0 ? (7.0 / totalObj) : 0.25;

            let part1Score = 0;
            let correctCount = 0;
            let wrongCount = 0;
            const detailedObjResults = [];

            // Analysis buckets
            const subjectStats = {
                history: { total: 0, score: 0, correct: 0 },
                geography: { total: 0, score: 0, correct: 0 }
            };
            const levelStats = {
                recognition: { total: 0, score: 0, correct: 0 },
                understanding: { total: 0, score: 0, correct: 0 },
                application: { total: 0, score: 0, correct: 0 },
                high_application: { total: 0, score: 0, correct: 0 }
            };
            const lessonStats = {}; // lessonId -> { title, subject, total: 0, correct: 0 }

            this.objectiveQuestions.forEach((q, idx) => {
                const uAns = this.userAnswers[q.id];
                const grade = window.AtlasQuestionEngine.gradeQuestion(q, uAns);
                const qScore = grade.score * pointPerObjQuestion;
                part1Score += qScore;

                if (grade.isCorrect) correctCount++;
                else wrongCount++;

                // Record progress
                window.AtlasStorage.recordAnswer(q, grade.isCorrect);

                // Buckets
                const subj = q.subject || 'history';
                if (!subjectStats[subj]) subjectStats[subj] = { total: 0, score: 0, correct: 0 };
                subjectStats[subj].total += pointPerObjQuestion;
                subjectStats[subj].score += qScore;
                if (grade.isCorrect) subjectStats[subj].correct++;

                const lvl = q.cognitiveLevel || 'understanding';
                if (!levelStats[lvl]) levelStats[lvl] = { total: 0, score: 0, correct: 0 };
                levelStats[lvl].total += pointPerObjQuestion;
                levelStats[lvl].score += qScore;
                if (grade.isCorrect) levelStats[lvl].correct++;

                const lId = q.lessonId || 'general';
                if (!lessonStats[lId]) {
                    lessonStats[lId] = { title: q.lessonTitle || lId, subject: q.subject, total: 0, correct: 0 };
                }
                lessonStats[lId].total++;
                if (grade.isCorrect) lessonStats[lId].correct++;

                detailedObjResults.push({
                    index: idx + 1,
                    question: q,
                    userAnswer: uAns,
                    grade: grade,
                    earnedPoints: parseFloat(qScore.toFixed(2))
                });
            });

            // Part 2: Essay Questions (Total 3.0 points)
            let part2Score = 0;
            const detailedEssayResults = [];
            (this.exam.essays || []).forEach((es, idx) => {
                const selfScore = this.essaySelfScores[es.id] !== undefined ? this.essaySelfScores[es.id] : (es.points || 1.5);
                part2Score += selfScore;
                detailedEssayResults.push({
                    index: idx + 1,
                    essay: es,
                    userDraft: this.essayDrafts[es.id] || '',
                    selfScore: selfScore,
                    maxScore: es.points || 1.5
                });
            });

            // Cap Part 1 at 7.0 and Part 2 at 3.0
            part1Score = Math.min(7.0, Math.max(0, part1Score));
            part2Score = Math.min(3.0, Math.max(0, part2Score));
            const totalScore = parseFloat((part1Score + part2Score).toFixed(2));

            this.results = {
                examId: this.exam.id,
                code: this.exam.code,
                title: this.exam.title,
                date: Date.now(),
                elapsedSeconds: elapsedSeconds,
                totalScore: totalScore,
                part1Score: parseFloat(part1Score.toFixed(2)),
                part2Score: parseFloat(part2Score.toFixed(2)),
                totalQuestions: totalObj,
                correctCount: correctCount,
                wrongCount: wrongCount,
                subjectStats: subjectStats,
                levelStats: levelStats,
                lessonStats: lessonStats,
                detailedObjResults: detailedObjResults,
                detailedEssayResults: detailedEssayResults
            };

            // Save in Exam History
            window.AtlasStorage.saveExamRecord({
                id: this.exam.id,
                code: this.exam.code,
                title: this.exam.title,
                date: Date.now(),
                totalScore: totalScore,
                part1Score: parseFloat(part1Score.toFixed(2)),
                part2Score: parseFloat(part2Score.toFixed(2)),
                elapsedSeconds: elapsedSeconds,
                totalQuestions: totalObj,
                correctCount: correctCount
            });

            return this.results;
        }
    }

    window.AtlasExamEngine = {
        currentExamSession: null,
        startExam: function(examInstance) {
            this.currentExamSession = new ExamSession(examInstance);
            return this.currentExamSession;
        },
        getSession: function() {
            return this.currentExamSession;
        }
    };

})(window);
