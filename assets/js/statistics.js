/**
 * ATLAS 9 - STATISTICS & ANALYTICS ENGINE
 * Aggregates learning metrics, mastery indicators, and mistake notebook analytics.
 */

(function(window) {
    'use strict';

    const AtlasStatistics = {
        /**
         * Get high level dashboard metrics
         */
        getOverviewMetrics: function() {
            const p = window.AtlasStorage.getProgress();
            const exams = window.AtlasStorage.getExamHistory();
            const mistakes = window.AtlasStorage.getMistakes();

            const total = p.totalAnswered || 0;
            const correct = p.totalCorrect || 0;
            const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

            // Average exam score
            let avgExamScore = 0;
            if (exams.length > 0) {
                const sumScores = exams.reduce((acc, ex) => acc + (ex.totalScore || 0), 0);
                avgExamScore = parseFloat((sumScores / exams.length).toFixed(1));
            }

            // Format study time
            const secs = p.studyTimeSeconds || 0;
            const hours = Math.floor(secs / 3600);
            const minutes = Math.floor((secs % 3600) / 60);
            let timeStr = `${hours}h ${minutes}m`;
            if (hours === 0) timeStr = `${minutes} phút`;

            return {
                totalAnswered: total,
                totalCorrect: correct,
                totalWrong: p.totalWrong || 0,
                accuracy: accuracy,
                avgExamScore: avgExamScore,
                totalExams: exams.length,
                studyTimeFormatted: timeStr,
                studyTimeSeconds: secs,
                mistakeCount: mistakes.filter(m => !m.mastered).length
            };
        },

        /**
         * Subject mastery breakdown
         */
        getSubjectMetrics: function() {
            const p = window.AtlasStorage.getProgress();
            const his = p.subjectStats.history || { answered: 0, correct: 0 };
            const geo = p.subjectStats.geography || { answered: 0, correct: 0 };

            const hisAcc = his.answered > 0 ? Math.round((his.correct / his.answered) * 100) : 0;
            const geoAcc = geo.answered > 0 ? Math.round((geo.correct / geo.answered) * 100) : 0;

            return {
                history: {
                    answered: his.answered,
                    correct: his.correct,
                    accuracy: hisAcc
                },
                geography: {
                    answered: geo.answered,
                    correct: geo.correct,
                    accuracy: geoAcc
                }
            };
        },

        /**
         * Cognitive level mastery breakdown
         */
        getLevelMetrics: function() {
            const p = window.AtlasStorage.getProgress();
            const lvls = p.levelStats || {};
            const res = {};

            ['recognition', 'understanding', 'application', 'high_application'].forEach(lvl => {
                const stat = lvls[lvl] || { answered: 0, correct: 0 };
                const acc = stat.answered > 0 ? Math.round((stat.correct / stat.answered) * 100) : 0;
                res[lvl] = {
                    answered: stat.answered,
                    correct: stat.correct,
                    accuracy: acc
                };
            });
            return res;
        },

        /**
         * Mastery status for each lesson across curriculum
         */
        getLessonsMastery: function() {
            const p = window.AtlasStorage.getProgress();
            const curriculum = window.ATLAS_CURRICULUM ? window.ATLAS_CURRICULUM.lessons : [];
            const completed = p.completedLessons || {};

            return curriculum.map(l => {
                const c = completed[l.id];
                if (!c || c.answered === 0) {
                    return {
                        lessonId: l.id,
                        title: l.title,
                        subject: l.subject,
                        lessonNum: l.lessonNum,
                        status: 'unstarted', // 'unstarted', 'needs_work', 'moderate', 'mastered'
                        answered: 0,
                        correct: 0,
                        accuracy: 0
                    };
                }
                const acc = Math.round((c.correct / c.answered) * 100);
                let status = 'needs_work';
                if (acc >= 80 && c.answered >= 10) status = 'mastered';
                else if (acc >= 55) status = 'moderate';

                return {
                    lessonId: l.id,
                    title: l.title,
                    subject: l.subject,
                    lessonNum: l.lessonNum,
                    status: status,
                    answered: c.answered,
                    correct: c.correct,
                    accuracy: acc
                };
            });
        },

        /**
         * Get fully hydrated list of questions in the Mistake Notebook
         */
        getMistakeQuestions: function() {
            const mistakes = window.AtlasStorage.getMistakes();
            const questions = window.ATLAS_QUESTIONS || [];
            const result = [];

            mistakes.forEach(m => {
                const q = questions.find(item => item.id === m.questionId);
                if (q) {
                    result.push({
                        mistakeMeta: m,
                        question: q
                    });
                }
            });
            return result;
        }
    };

    window.AtlasStatistics = AtlasStatistics;

})(window);
