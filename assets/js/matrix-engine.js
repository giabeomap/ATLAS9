/**
 * ATLAS 9 - EXAM MATRIX & TEST GENERATOR ENGINE
 * Mode A: Automatic Balanced Matrix
 * Mode B: Custom Percentage Matrix with Hamilton-Hare Largest Remainder Rounding
 * Bank Adequacy Checking & Multi-code Generator
 */

(function(window) {
    'use strict';

    const AtlasMatrixEngine = {
        /**
         * Largest Remainder Method (Hamilton-Hare Method)
         * Converts percentages or fractional quotas into exact integers summing to totalCount.
         */
        distributeQuota: function(itemsWithRatio, totalCount) {
            // itemsWithRatio: [ { key: 'recognition', ratio: 0.25 }, ... ]
            if (totalCount <= 0 || itemsWithRatio.length === 0) return {};

            // Calculate exact unrounded quotas
            let sumRatio = itemsWithRatio.reduce((acc, it) => acc + (it.ratio || 0), 0);
            if (sumRatio <= 0) sumRatio = 1;

            let distributed = [];
            let currentSum = 0;

            itemsWithRatio.forEach((it, idx) => {
                const normalizedRatio = it.ratio / sumRatio;
                const exactQuota = normalizedRatio * totalCount;
                const integerPart = Math.floor(exactQuota);
                const remainder = exactQuota - integerPart;
                distributed.push({
                    key: it.key,
                    integerPart: integerPart,
                    remainder: remainder,
                    originalIndex: idx
                });
                currentSum += integerPart;
            });

            // Distribute remaining units to items with largest remainders
            let remainderUnits = totalCount - currentSum;
            distributed.sort((a, b) => b.remainder - a.remainder);

            for (let i = 0; i < remainderUnits && i < distributed.length; i++) {
                distributed[i].integerPart += 1;
            }

            // Restore original order
            distributed.sort((a, b) => a.originalIndex - b.originalIndex);

            const result = {};
            distributed.forEach(d => {
                result[d.key] = d.integerPart;
            });
            return result;
        },

        /**
         * Mode A: Generate Automatic Balanced Matrix Configuration
         */
        generateAutoMatrixConfig: function(selectedLessonIds, totalQuestions = 28, totalEssays = 2) {
            // Standard Vietnamese GDPT 2018 Cognitive Level Distribution:
            // Nhận biết: ~30%, Thông hiểu: ~35%, Vận dụng: ~25%, Vận dụng cao: ~10%
            const levelRatios = [
                { key: 'recognition', ratio: 0.30 },
                { key: 'understanding', ratio: 0.35 },
                { key: 'application', ratio: 0.25 },
                { key: 'high_application', ratio: 0.10 }
            ];

            // Question types for Objective Part I:
            // ~75% Single Choice, ~25% True/False
            const typeRatios = [
                { key: 'single_choice', ratio: 0.75 },
                { key: 'true_false', ratio: 0.25 }
            ];

            const distributedLevels = this.distributeQuota(levelRatios, totalQuestions);
            const distributedTypes = this.distributeQuota(typeRatios, totalQuestions);

            return {
                mode: 'auto',
                totalQuestions: totalQuestions,
                totalEssays: totalEssays,
                levelRatios: { recognition: 30, understanding: 35, application: 25, high_application: 10 },
                levelsCount: distributedLevels,
                typesCount: distributedTypes,
                lessonIds: selectedLessonIds
            };
        },

        /**
         * Mode B: Generate Custom Percentage Matrix Configuration
         */
        generateCustomMatrixConfig: function(selectedLessonIds, customPercentages, totalQuestions = 40, totalEssays = 2) {
            // customPercentages:
            // levels: { recognition: 25, understanding: 35, application: 25, high_application: 15 }
            // types: { single_choice: 80, true_false: 20 }
            const lvlInput = customPercentages.levels || { recognition: 30, understanding: 35, application: 25, high_application: 10 };
            const typeInput = customPercentages.types || { single_choice: 75, true_false: 25 };

            const levelItems = [
                { key: 'recognition', ratio: lvlInput.recognition || 0 },
                { key: 'understanding', ratio: lvlInput.understanding || 0 },
                { key: 'application', ratio: lvlInput.application || 0 },
                { key: 'high_application', ratio: lvlInput.high_application || 0 }
            ];

            const typeItems = [
                { key: 'single_choice', ratio: typeInput.single_choice || 0 },
                { key: 'true_false', ratio: typeInput.true_false || 0 }
            ];

            const distributedLevels = this.distributeQuota(levelItems, totalQuestions);
            const distributedTypes = this.distributeQuota(typeItems, totalQuestions);

            return {
                mode: 'custom',
                totalQuestions: totalQuestions,
                totalEssays: totalEssays,
                levelRatios: lvlInput,
                typeRatios: typeInput,
                levelsCount: distributedLevels,
                typesCount: distributedTypes,
                lessonIds: selectedLessonIds
            };
        },

        /**
         * Check Bank Adequacy against Matrix Configuration
         * Returns { adequate: bool, issues: [ { lessonId, level, requested, available, message } ] }
         */
        checkBankAdequacy: function(matrixConfig) {
            const lessonIds = matrixConfig.lessonIds || [];
            const issues = [];
            const availableQuestions = window.AtlasQuestionEngine.filterQuestions({ lessonIds: lessonIds });
            const availableEssays = window.AtlasQuestionEngine.filterEssays({ lessonIds: lessonIds });

            // 1. Total count check
            if (availableQuestions.length < matrixConfig.totalQuestions) {
                issues.push({
                    type: 'total',
                    requested: matrixConfig.totalQuestions,
                    available: availableQuestions.length,
                    message: `Phạm vi ${lessonIds.length} bài đã chọn chỉ có ${availableQuestions.length} câu hỏi trắc nghiệm, không đủ cho yêu cầu ${matrixConfig.totalQuestions} câu.`
                });
            }

            // 2. Cognitive Level check
            const levelsCount = matrixConfig.levelsCount || {};
            for (let [lvl, reqCount] of Object.entries(levelsCount)) {
                if (reqCount <= 0) continue;
                const inLevel = availableQuestions.filter(q => q.cognitiveLevel === lvl);
                if (inLevel.length < reqCount) {
                    const lvlName = {
                        recognition: 'Nhận biết',
                        understanding: 'Thông hiểu',
                        application: 'Vận dụng',
                        high_application: 'Vận dụng cao'
                    }[lvl] || lvl;
                    issues.push({
                        type: 'level',
                        level: lvl,
                        requested: reqCount,
                        available: inLevel.length,
                        message: `Yêu cầu ${reqCount} câu ở mức độ ${lvlName}, nhưng phạm vi đã chọn chỉ có ${inLevel.length} câu phù hợp.`
                    });
                }
            }

            // 3. Question Type check
            const typesCount = matrixConfig.typesCount || {};
            if (typesCount.true_false > 0) {
                const tfInBank = availableQuestions.filter(q => q.type === 'true_false');
                if (tfInBank.length < typesCount.true_false) {
                    issues.push({
                        type: 'question_type',
                        requested: typesCount.true_false,
                        available: tfInBank.length,
                        message: `Yêu cầu ${typesCount.true_false} câu Đúng/Sai, nhưng phạm vi đã chọn chỉ có ${tfInBank.length} câu.`
                    });
                }
            }

            // 4. Essay check
            if (matrixConfig.totalEssays > 0 && availableEssays.length < matrixConfig.totalEssays) {
                issues.push({
                    type: 'essay',
                    requested: matrixConfig.totalEssays,
                    available: availableEssays.length,
                    message: `Yêu cầu ${matrixConfig.totalEssays} câu tự luận, nhưng phạm vi đã chọn chỉ có ${availableEssays.length} câu tự luận.`
                });
            }

            return {
                adequate: issues.length === 0,
                issues: issues,
                totalAvailable: availableQuestions.length,
                totalAvailableEssays: availableEssays.length
            };
        },

        /**
         * Generate Detailed Matrix Grid
         * Builds a 2D matrix (Lesson x Cognitive Level x Question Type) with point values.
         */
        buildDetailedMatrixGrid: function(matrixConfig) {
            const lessonIds = matrixConfig.lessonIds || [];
            const curriculumLessons = window.ATLAS_CURRICULUM ? window.ATLAS_CURRICULUM.lessons : [];
            const targetLessons = curriculumLessons.filter(l => lessonIds.includes(l.id));

            // Distribute total objective questions among selected lessons
            const lessonRatios = targetLessons.map(l => ({ key: l.id, ratio: 1 }));
            const questionsPerLesson = this.distributeQuota(lessonRatios, matrixConfig.totalQuestions);

            // Part I Points: standard 7.0 points; Part II: 3.0 points
            const part1TotalPoints = 7.0;
            const pointPerObjQuestion = matrixConfig.totalQuestions > 0 ? (part1TotalPoints / matrixConfig.totalQuestions) : 0.25;

            const gridRows = targetLessons.map(lesson => {
                const count = questionsPerLesson[lesson.id] || 0;
                // Distribute this lesson's count among the 4 levels according to matrixConfig level ratios
                const lvlDistribution = this.distributeQuota([
                    { key: 'recognition', ratio: matrixConfig.levelRatios.recognition || 30 },
                    { key: 'understanding', ratio: matrixConfig.levelRatios.understanding || 35 },
                    { key: 'application', ratio: matrixConfig.levelRatios.application || 25 },
                    { key: 'high_application', ratio: matrixConfig.levelRatios.high_application || 10 }
                ], count);

                const totalPoints = count * pointPerObjQuestion;
                return {
                    lessonId: lesson.id,
                    lessonTitle: lesson.title,
                    subject: lesson.subject,
                    totalQuestions: count,
                    totalPoints: parseFloat(totalPoints.toFixed(2)),
                    levels: lvlDistribution
                };
            });

            return {
                rows: gridRows,
                totalQuestions: matrixConfig.totalQuestions,
                totalEssays: matrixConfig.totalEssays,
                part1Points: part1TotalPoints,
                part2Points: 3.0,
                totalPoints: 10.0,
                pointPerQuestion: parseFloat(pointPerObjQuestion.toFixed(2))
            };
        },

        /**
         * Generate Exam Instance (or Multiple Test Codes)
         */
        generateExam: function(matrixConfig, options = {}) {
            const code = options.code || '101';
            const title = options.title || 'ĐỀ KIỂM TRA LỊCH SỬ – ĐỊA LÍ 9';
            const timeMinutes = options.timeMinutes || (matrixConfig.totalQuestions >= 30 ? 60 : 45);
            const lessonIds = matrixConfig.lessonIds || [];

            const poolQuestions = window.AtlasQuestionEngine.filterQuestions({ lessonIds: lessonIds });
            const poolEssays = window.AtlasQuestionEngine.filterEssays({ lessonIds: lessonIds });

            // Sample MCQs & TF according to type and level quotas
            const reqTfCount = matrixConfig.typesCount ? (matrixConfig.typesCount.true_false || 0) : 0;
            const reqMcqCount = matrixConfig.totalQuestions - reqTfCount;

            const selectedMCQs = [];
            const selectedTFs = [];

            // 1. Pick TF Questions
            const tfPool = window.AtlasQuestionEngine.shuffle(poolQuestions.filter(q => q.type === 'true_false'));
            for (let i = 0; i < reqTfCount && i < tfPool.length; i++) {
                selectedTFs.push(tfPool[i]);
            }

            // 2. Pick MCQ Questions respecting cognitive levels
            const mcqPool = poolQuestions.filter(q => q.type === 'single_choice');
            const levelsCount = matrixConfig.levelsCount || {};
            const usedIds = new Set(selectedTFs.map(q => q.id));

            for (let [lvl, reqCount] of Object.entries(levelsCount)) {
                let lvlPool = window.AtlasQuestionEngine.shuffle(mcqPool.filter(q => q.cognitiveLevel === lvl && !usedIds.has(q.id)));
                for (let i = 0; i < reqCount && i < lvlPool.length && selectedMCQs.length < reqMcqCount; i++) {
                    selectedMCQs.push(lvlPool[i]);
                    usedIds.add(lvlPool[i].id);
                }
            }

            // If still short of reqMcqCount due to level shortages, top up from remaining
            if (selectedMCQs.length < reqMcqCount) {
                const remaining = window.AtlasQuestionEngine.shuffle(mcqPool.filter(q => !usedIds.has(q.id)));
                for (let q of remaining) {
                    if (selectedMCQs.length >= reqMcqCount) break;
                    selectedMCQs.push(q);
                    usedIds.add(q.id);
                }
            }

            // 3. Shuffle Options if desired
            const finalMCQs = selectedMCQs.map(q => window.AtlasQuestionEngine.shuffleOptions(q));

            // 4. Pick Essay Questions (1 to 3 essays)
            const selectedEssays = [];
            const essayCount = matrixConfig.totalEssays || 2;
            const shuffledEssays = window.AtlasQuestionEngine.shuffle(poolEssays);
            for (let i = 0; i < essayCount && i < shuffledEssays.length; i++) {
                selectedEssays.push(shuffledEssays[i]);
            }

            return {
                id: 'exam_' + Date.now() + '_' + code,
                code: code,
                title: title,
                timeMinutes: timeMinutes,
                createDate: Date.now(),
                matrixConfig: matrixConfig,
                mcqs: finalMCQs,
                tfs: selectedTFs,
                essays: selectedEssays,
                part1Points: '7,0',
                part2Points: '3,0',
                totalPoints: 10.0
            };
        },

        /**
         * Generate Multiple Test Codes (e.g. 101, 102, 103, 104)
         */
        generateMultipleCodes: function(matrixConfig, count = 4, options = {}) {
            const baseCodes = ['101', '102', '103', '104', '105', '106'];
            const exams = [];
            for (let i = 0; i < count; i++) {
                const code = baseCodes[i] || String(101 + i);
                const ex = this.generateExam(matrixConfig, { ...options, code: code });
                exams.push(ex);
            }
            return exams;
        }
    };

    window.AtlasMatrixEngine = AtlasMatrixEngine;

})(window);
