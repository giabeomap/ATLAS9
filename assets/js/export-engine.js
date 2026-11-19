/**
 * ATLAS 9 - EXPORT ENGINE
 * Bridges the Matrix/Exam sessions to the DocxBuilder and Print systems.
 */

(function(window) {
    'use strict';

    const AtlasExportEngine = {
        /**
         * Export active or generated exam as .docx
         */
        exportExamDocx: function(examInstance, mode = 'student') {
            // mode: 'student' (no answers), 'with_answers' (answers at end), 'full' (with rubric)
            const includeAnswers = (mode === 'with_answers' || mode === 'full');
            const fileName = `ATLAS9_DeThi_${examInstance.code || '101'}_${mode === 'student' ? 'HocSinh' : 'CoDapAn'}.docx`;

            window.AtlasDocxBuilder.exportExamDocx(examInstance, {
                includeAnswers: includeAnswers,
                fileName: fileName
            });
        },

        /**
         * Trigger A4 Print / PDF view
         */
        printExam: function(examInstance, mode = 'student') {
            const includeAnswers = (mode === 'with_answers' || mode === 'full');
            window.AtlasDocxBuilder.printExam(examInstance, {
                includeAnswers: includeAnswers
            });
        },

        /**
         * Export Multiple Exam Codes (Batch export)
         */
        exportMultipleCodesDocx: function(matrixConfig, count = 4) {
            const exams = window.AtlasMatrixEngine.generateMultipleCodes(matrixConfig, count);
            exams.forEach((ex, idx) => {
                setTimeout(() => {
                    this.exportExamDocx(ex, 'student');
                }, idx * 400); // slight stagger to allow browser download
            });
        }
    };

    window.AtlasExportEngine = AtlasExportEngine;

})(window);
