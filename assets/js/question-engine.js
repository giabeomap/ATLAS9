/**
 * ATLAS 9 - QUESTION ENGINE
 * Filtering, searching, shuffling, and standard GDPT 2018 grading logic.
 */

(function(window) {
    'use strict';

    const AtlasQuestionEngine = {
        /**
         * Get full bank
         */
        getAllQuestions: function() {
            return window.ATLAS_QUESTIONS || [];
        },

        getAllEssays: function() {
            return window.ATLAS_ESSAYS || [];
        },

        getQuestionById: function(id) {
            return this.getAllQuestions().find(q => q.id === id) || null;
        },

        getEssayById: function(id) {
            return this.getAllEssays().find(e => e.id === id) || null;
        },

        /**
         * Filter questions with rich criteria
         */
        filterQuestions: function(criteria = {}) {
            let list = this.getAllQuestions();

            // Subject ('history', 'geography', or 'all')
            if (criteria.subject && criteria.subject !== 'all') {
                list = list.filter(q => q.subject === criteria.subject);
            }

            // Chapter
            if (criteria.chapterId && criteria.chapterId !== 'all') {
                list = list.filter(q => q.chapterId === criteria.chapterId);
            }

            // Single lesson
            if (criteria.lessonId && criteria.lessonId !== 'all') {
                list = list.filter(q => q.lessonId === criteria.lessonId);
            }

            // Multiple lessons (array of lessonIds)
            if (criteria.lessonIds && Array.isArray(criteria.lessonIds) && criteria.lessonIds.length > 0) {
                const set = new Set(criteria.lessonIds);
                list = list.filter(q => set.has(q.lessonId));
            }

            // Question type ('single_choice', 'true_false', or 'all')
            if (criteria.type && criteria.type !== 'all') {
                list = list.filter(q => q.type === criteria.type);
            }

            // Cognitive level ('recognition', 'understanding', 'application', 'high_application', or 'all')
            if (criteria.cognitiveLevel && criteria.cognitiveLevel !== 'all') {
                list = list.filter(q => q.cognitiveLevel === criteria.cognitiveLevel);
            }

            // Difficulty
            if (criteria.difficulty && criteria.difficulty !== 'all') {
                list = list.filter(q => q.difficulty === criteria.difficulty);
            }

            // Search query text
            if (criteria.searchQuery && criteria.searchQuery.trim()) {
                const kw = criteria.searchQuery.trim().toLowerCase();
                list = list.filter(q => {
                    const qText = (q.question || '').toLowerCase();
                    const expText = (q.explanation || '').toLowerCase();
                    const topicText = (q.contentTopic || '').toLowerCase();
                    const optText = (q.options || []).join(' ').toLowerCase();
                    return qText.includes(kw) || expText.includes(kw) || topicText.includes(kw) || optText.includes(kw);
                });
            }

            return list;
        },

        /**
         * Filter essays with criteria
         */
        filterEssays: function(criteria = {}) {
            let list = this.getAllEssays();

            if (criteria.subject && criteria.subject !== 'all') {
                list = list.filter(e => e.subject === criteria.subject);
            }
            if (criteria.chapterId && criteria.chapterId !== 'all') {
                list = list.filter(e => e.chapterId === criteria.chapterId);
            }
            if (criteria.lessonId && criteria.lessonId !== 'all') {
                list = list.filter(e => e.lessonId === criteria.lessonId);
            }
            if (criteria.lessonIds && Array.isArray(criteria.lessonIds) && criteria.lessonIds.length > 0) {
                const set = new Set(criteria.lessonIds);
                list = list.filter(e => set.has(e.lessonId));
            }
            if (criteria.cognitiveLevel && criteria.cognitiveLevel !== 'all') {
                list = list.filter(e => e.cognitiveLevel === criteria.cognitiveLevel);
            }
            return list;
        },

        /**
         * Pure Fisher-Yates shuffle
         */
        shuffle: function(array) {
            const arr = array.slice();
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        },

        /**
         * Shuffle MCQ options without changing the logic
         */
        shuffleOptions: function(q) {
            if (q.type !== 'single_choice' || !q.options) return q;
            const newQ = JSON.parse(JSON.stringify(q));
            const originalCorrectText = q.options[q.answer];

            // Shuffle options
            newQ.options = this.shuffle(newQ.options);
            newQ.answer = newQ.options.indexOf(originalCorrectText);
            newQ.answerLetter = ['A', 'B', 'C', 'D'][newQ.answer];
            return newQ;
        },

        /**
         * Grade single question
         * For Single Choice: 1.0 point if match, 0 if wrong
         * For True/False (GDPT 2018 official scale):
         *   - Correct 1 statement: 0.10 pt
         *   - Correct 2 statements: 0.25 pt
         *   - Correct 3 statements: 0.50 pt
         *   - Correct 4 statements: 1.00 pt
         */
        gradeQuestion: function(q, userAnswer) {
            if (q.type === 'single_choice') {
                const isCorrect = (userAnswer !== undefined && userAnswer !== null && Number(userAnswer) === Number(q.answer));
                return {
                    isCorrect: isCorrect,
                    score: isCorrect ? 1.0 : 0.0,
                    maxScore: 1.0,
                    correctAnswer: q.answer,
                    correctLetter: q.answerLetter,
                    userAnswer: userAnswer
                };
            } else if (q.type === 'true_false') {
                // userAnswer is expected to be an object: { 'a': true/false, 'b': true/false, ... }
                userAnswer = userAnswer || {};
                let correctCount = 0;
                const details = {};
                (q.statements || []).forEach(st => {
                    const uVal = userAnswer[st.id];
                    const isSubCorrect = (uVal === st.answer);
                    if (isSubCorrect) correctCount++;
                    details[st.id] = {
                        expected: st.answer,
                        actual: uVal,
                        isCorrect: isSubCorrect
                    };
                });

                // GDPT 2018 grading rule
                let score = 0;
                if (correctCount === 1) score = 0.1;
                else if (correctCount === 2) score = 0.25;
                else if (correctCount === 3) score = 0.5;
                else if (correctCount === 4) score = 1.0;

                return {
                    isCorrect: correctCount === 4,
                    isPartiallyCorrect: correctCount > 0 && correctCount < 4,
                    correctCount: correctCount,
                    totalStatements: (q.statements || []).length,
                    score: score,
                    maxScore: 1.0,
                    details: details
                };
            }
            return { isCorrect: false, score: 0, maxScore: 1.0 };
        }
    };

    window.AtlasQuestionEngine = AtlasQuestionEngine;

})(window);
