/**
 * ATLAS 9 - DOCX BUILDER & EXPORTER (Offline Pure JavaScript)
 * Generates valid Microsoft Word .docx files and A4 print templates
 * Zero external dependencies, 100% offline.
 */

(function(window) {
    'use strict';

    // CRC32 Table for ZIP packing
    const CRC_TABLE = (function() {
        let c, table = [];
        for (let n = 0; n < 256; n++) {
            c = n;
            for (let k = 0; k < 8; k++) {
                c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
            }
            table[n] = c;
        }
        return table;
    })();

    function crc32(bytes) {
        let crc = 0 ^ (-1);
        for (let i = 0; i < bytes.length; i++) {
            crc = (crc >>> 8) ^ CRC_TABLE[(crc ^ bytes[i]) & 0xFF];
        }
        return (crc ^ (-1)) >>> 0;
    }

    // Lightweight In-Memory ZIP Packager (Store method, no compression needed for docx)
    class SimpleZip {
        constructor() {
            this.files = [];
        }

        addFile(name, content) {
            let bytes;
            if (typeof content === 'string') {
                bytes = new TextEncoder().encode(content);
            } else if (content instanceof Uint8Array) {
                bytes = content;
            } else {
                bytes = new Uint8Array(content);
            }
            this.files.push({
                name: name,
                bytes: bytes,
                crc: crc32(bytes)
            });
        }

        generate() {
            const encoder = new TextEncoder();
            let fileHeaders = [];
            let centralDir = [];
            let offset = 0;

            for (let f of this.files) {
                const nameBytes = encoder.encode(f.name);
                const size = f.bytes.length;
                const crc = f.crc;

                // Local File Header (30 bytes + name + data)
                const header = new Uint8Array(30 + nameBytes.length);
                const view = new DataView(header.buffer);
                view.setUint32(0, 0x04034b50, true); // Local file header signature
                view.setUint16(4, 20, true);         // Version needed
                view.setUint16(6, 0x0800, true);     // General purpose bit flag (UTF-8)
                view.setUint16(8, 0, true);          // Compression (0 = store)
                view.setUint16(10, 0x546b, true);    // Mod time
                view.setUint16(12, 0x5873, true);    // Mod date
                view.setUint32(14, crc, true);       // CRC-32
                view.setUint32(18, size, true);      // Compressed size
                view.setUint32(22, size, true);      // Uncompressed size
                view.setUint16(26, nameBytes.length, true); // Filename length
                view.setUint16(28, 0, true);         // Extra field length
                header.set(nameBytes, 30);

                fileHeaders.push(header);
                fileHeaders.push(f.bytes);

                // Central Directory Entry (46 bytes + name)
                const cd = new Uint8Array(46 + nameBytes.length);
                const cdView = new DataView(cd.buffer);
                cdView.setUint32(0, 0x02014b50, true); // Central directory signature
                cdView.setUint16(4, 20, true);         // Version made by
                cdView.setUint16(6, 20, true);         // Version needed
                cdView.setUint16(8, 0x0800, true);     // Flags (UTF-8)
                cdView.setUint16(10, 0, true);         // Compression
                cdView.setUint16(12, 0x546b, true);
                cdView.setUint16(14, 0x5873, true);
                cdView.setUint32(16, crc, true);
                cdView.setUint32(20, size, true);
                cdView.setUint32(24, size, true);
                cdView.setUint16(28, nameBytes.length, true);
                cdView.setUint16(30, 0, true);         // Extra field length
                cdView.setUint16(32, 0, true);         // Comment length
                cdView.setUint16(34, 0, true);         // Disk start
                cdView.setUint16(36, 0, true);         // Internal attr
                cdView.setUint32(38, 0, true);         // External attr
                cdView.setUint32(42, offset, true);    // Offset of local header
                cd.set(nameBytes, 46);

                centralDir.push(cd);
                offset += header.length + f.bytes.length;
            }

            const cdStart = offset;
            let cdSize = 0;
            for (let c of centralDir) cdSize += c.length;

            // End of Central Directory (22 bytes)
            const eocd = new Uint8Array(22);
            const eocdView = new DataView(eocd.buffer);
            eocdView.setUint32(0, 0x06054b50, true);
            eocdView.setUint16(4, 0, true);
            eocdView.setUint16(6, 0, true);
            eocdView.setUint16(8, this.files.length, true);
            eocdView.setUint16(10, this.files.length, true);
            eocdView.setUint32(12, cdSize, true);
            eocdView.setUint32(16, cdStart, true);
            eocdView.setUint16(20, 0, true);

            const allParts = [...fileHeaders, ...centralDir, eocd];
            return new Blob(allParts, { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        }
    }

    // Escape XML Special Characters
    function escapeXml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
    }

    // DOCX XML Templates
    const CONTENT_TYPES_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
    <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
    <Default Extension="xml" ContentType="application/xml"/>
    <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
    <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>`;

    const ROOT_RELS_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
    <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;

    const STYLES_XML = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
    <w:docDefaults>
        <w:rPrDefault>
            <w:rPr>
                <w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:cs="Times New Roman"/>
                <w:sz w:val="24"/>
                <w:lang w:val="vi-VN"/>
            </w:rPr>
        </w:rPrDefault>
        <w:pPrDefault>
            <w:pPr>
                <w:spacing w:line="276" w:lineRule="auto" w:before="60" w:after="60"/>
            </w:pPr>
        </w:pPrDefault>
    </w:docDefaults>
</w:styles>`;

    // Build Word Document XML
    function generateDocumentXml(examData, options = {}) {
        let bodyXml = [];

        // Exam Header Table (2 columns: Department/School on left, Test info on right)
        bodyXml.push(`
        <w:tbl>
            <w:tblPr>
                <w:tblW w:w="0" w:type="auto"/>
                <w:tblBorders>
                    <w:top w:val="none"/>
                    <w:left w:val="none"/>
                    <w:bottom w:val="none"/>
                    <w:right w:val="none"/>
                    <w:insideH w:val="none"/>
                    <w:insideV w:val="none"/>
                </w:tblBorders>
            </w:tblPr>
            <w:tr>
                <w:tc>
                    <w:tcPr><w:tcW w:w="4800" w:type="dxa"/></w:tcPr>
                    <w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/><w:sz w:val="22"/></w:rPr><w:t>KÌ THI THỬ LỚP 9 THCS</w:t></w:r></w:p>
                    <w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/><w:sz w:val="24"/></w:rPr><w:t>HỆ THỐNG GIÁO DỤC ATLAS 9</w:t></w:r></w:p>
                    <w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:i/><w:sz w:val="20"/></w:rPr><w:t>Đề thi chính thức</w:t></w:r></w:p>
                </w:tc>
                <w:tc>
                    <w:tcPr><w:tcW w:w="5200" w:type="dxa"/></w:tcPr>
                    <w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/><w:sz w:val="24"/></w:rPr><w:t>${escapeXml(examData.title || 'ĐỀ KIỂM TRA LỊCH SỬ – ĐỊA LÍ 9')}</w:t></w:r></w:p>
                    <w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/><w:sz w:val="22"/></w:rPr><w:t>NĂM HỌC 2026 – 2027</w:t></w:r></w:p>
                    <w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:sz w:val="20"/></w:rPr><w:t>Thời gian làm bài: ${examData.timeMinutes || 45} phút (không kể thời gian giao đề)</w:t></w:r></w:p>
                </w:tc>
            </w:tr>
        </w:tbl>`);

        // Student Info & Code Table
        bodyXml.push(`
        <w:p><w:pPr><w:spacing w:before="120" w:after="80"/></w:pPr>
            <w:r><w:rPr><w:b/><w:sz w:val="22"/></w:rPr><w:t>Họ và tên thí sinh: ........................................................................ Lớp: ................. SBD: .................</w:t></w:r>
            <w:r><w:rPr><w:b/><w:sz w:val="22"/></w:rPr><w:tab/><w:t>MÃ ĐỀ: ${escapeXml(examData.code || '101')}</w:t></w:r>
        </w:p>
        <w:p><w:pPr><w:pBdr><w:bottom w:val="single" w:sz="6" w:space="4" w:color="000000"/></w:pBdr><w:spacing w:after="160"/></w:pPr></w:p>`);

        // ==========================================
        // PART I: MULTIPLE CHOICE (TRẮC NGHIỆM)
        // ==========================================
        const mcqs = examData.mcqs || [];
        const tfs = examData.tfs || [];
        const totalObjective = mcqs.length + tfs.length;

        bodyXml.push(`
        <w:p><w:pPr><w:spacing w:before="180" w:after="100"/></w:pPr>
            <w:r><w:rPr><w:b/><w:sz w:val="26"/><w:color w:val="1E3A8A"/></w:rPr><w:t>PHẦN I. CÂU TRẮC NGHIỆM (${examData.part1Points || '7,0'} điểm)</w:t></w:r>
        </w:p>`);

        // Dạng 1: Trắc nghiệm 4 lựa chọn
        if (mcqs.length > 0) {
            bodyXml.push(`
            <w:p><w:pPr><w:spacing w:before="100" w:after="80"/></w:pPr>
                <w:r><w:rPr><w:b/><w:i/><w:sz w:val="22"/></w:rPr><w:t>Thí sinh trả lời từ câu 1 đến câu ${mcqs.length}. Mỗi câu hỏi thí sinh chỉ chọn một phương án.</w:t></w:r>
            </w:p>`);

            mcqs.forEach((q, idx) => {
                const qNum = idx + 1;
                bodyXml.push(`
                <w:p><w:pPr><w:spacing w:before="120" w:after="60"/></w:pPr>
                    <w:r><w:rPr><w:b/><w:sz w:val="23"/></w:rPr><w:t>Câu ${qNum}: </w:t></w:r>
                    <w:r><w:rPr><w:sz w:val="23"/></w:rPr><w:t>${escapeXml(q.question)}</w:t></w:r>
                </w:p>`);

                // 4 Options A, B, C, D
                const opts = q.options || [];
                const optLabels = ['A', 'B', 'C', 'D'];
                opts.forEach((opt, oIdx) => {
                    const label = optLabels[oIdx] || 'A';
                    bodyXml.push(`
                    <w:p><w:pPr><w:ind w:left="400"/><w:spacing w:before="30" w:after="30"/></w:pPr>
                        <w:r><w:rPr><w:b/><w:sz w:val="22"/></w:rPr><w:t>${label}. </w:t></w:r>
                        <w:r><w:rPr><w:sz w:val="22"/></w:rPr><w:t>${escapeXml(opt)}</w:t></w:r>
                    </w:p>`);
                });
            });
        }

        // Dạng 2: Trắc nghiệm Đúng/Sai
        if (tfs.length > 0) {
            const startTfNum = mcqs.length + 1;
            const endTfNum = mcqs.length + tfs.length;
            bodyXml.push(`
            <w:p><w:pPr><w:spacing w:before="180" w:after="80"/></w:pPr>
                <w:r><w:rPr><w:b/><w:i/><w:sz w:val="22"/></w:rPr><w:t>Thí sinh trả lời từ câu ${startTfNum} đến câu ${endTfNum}. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn Đúng hoặc Sai.</w:t></w:r>
            </w:p>`);

            tfs.forEach((tf, idx) => {
                const qNum = startTfNum + idx;
                bodyXml.push(`
                <w:p><w:pPr><w:spacing w:before="140" w:after="60"/></w:pPr>
                    <w:r><w:rPr><w:b/><w:sz w:val="23"/></w:rPr><w:t>Câu ${qNum}: </w:t></w:r>
                    <w:r><w:rPr><w:sz w:val="23"/></w:rPr><w:t>${escapeXml(tf.question || 'Đọc đoạn thông tin sau:')}</w:t></w:r>
                </w:p>`);

                if (tf.passage) {
                    bodyXml.push(`
                    <w:p><w:pPr><w:ind w:left="300" w:right="300"/><w:pBdr><w:left w:val="single" w:sz="12" w:space="6" w:color="1E3A8A"/></w:pBdr><w:spacing w:before="60" w:after="80"/></w:pPr>
                        <w:r><w:rPr><w:i/><w:sz w:val="22"/></w:rPr><w:t>"${escapeXml(tf.passage)}"</w:t></w:r>
                    </w:p>`);
                }

                (tf.statements || []).forEach(st => {
                    bodyXml.push(`
                    <w:p><w:pPr><w:ind w:left="400"/><w:spacing w:before="40" w:after="40"/></w:pPr>
                        <w:r><w:rPr><w:b/><w:sz w:val="22"/></w:rPr><w:t>${escapeXml(st.id)}) </w:t></w:r>
                        <w:r><w:rPr><w:sz w:val="22"/></w:rPr><w:t>${escapeXml(st.text)}</w:t></w:r>
                    </w:p>`);
                });
            });
        }

        // ==========================================
        // PART II: ESSAY (TỰ LUẬN) - SEPARATE SECTION
        // ==========================================
        const essays = examData.essays || [];
        if (essays.length > 0) {
            bodyXml.push(`
            <w:p><w:pPr><w:spacing w:before="240" w:after="100"/></w:pPr>
                <w:r><w:rPr><w:b/><w:sz w:val="26"/><w:color w:val="1E3A8A"/></w:rPr><w:t>PHẦN II. TỰ LUẬN (${examData.part2Points || '3,0'} điểm)</w:t></w:r>
            </w:p>`);

            essays.forEach((es, idx) => {
                const eNum = idx + 1;
                bodyXml.push(`
                <w:p><w:pPr><w:spacing w:before="120" w:after="80"/></w:pPr>
                    <w:r><w:rPr><w:b/><w:sz w:val="23"/></w:rPr><w:t>Câu ${eNum} (${es.points || 1.5} điểm): </w:t></w:r>
                    <w:r><w:rPr><w:sz w:val="23"/></w:rPr><w:t>${escapeXml(es.question)}</w:t></w:r>
                </w:p>`);

                // Blank dotted lines for student written work
                if (!options.includeAnswers) {
                    bodyXml.push(`
                    <w:p><w:pPr><w:spacing w:before="40" w:after="40"/></w:pPr><w:r><w:rPr><w:color w:val="777777"/></w:rPr><w:t>...................................................................................................................................................................................................................</w:t></w:r></w:p>
                    <w:p><w:pPr><w:spacing w:before="40" w:after="40"/></w:pPr><w:r><w:rPr><w:color w:val="777777"/></w:rPr><w:t>...................................................................................................................................................................................................................</w:t></w:r></w:p>
                    <w:p><w:pPr><w:spacing w:before="40" w:after="40"/></w:pPr><w:r><w:rPr><w:color w:val="777777"/></w:rPr><w:t>...................................................................................................................................................................................................................</w:t></w:r></w:p>
                    <w:p><w:pPr><w:spacing w:before="40" w:after="40"/></w:pPr><w:r><w:rPr><w:color w:val="777777"/></w:rPr><w:t>...................................................................................................................................................................................................................</w:t></w:r></w:p>`);
                }
            });
        }

        // ==========================================
        // OPTIONAL: ANSWER KEY & SCORING RUBRIC SECTION
        // ==========================================
        if (options.includeAnswers) {
            bodyXml.push(`
            <w:p><w:pPr><w:pageBreakBefore/><w:spacing w:before="240" w:after="120"/></w:pPr>
                <w:r><w:rPr><w:b/><w:sz w:val="28"/><w:color w:val="991B1B"/></w:rPr><w:t>ĐÁP ÁN VÀ HƯỚNG DẪN CHẤM CHI TIẾT (MÃ ĐỀ: ${escapeXml(examData.code || '101')})</w:t></w:r>
            </w:p>`);

            // MCQ Answer Table
            if (mcqs.length > 0) {
                bodyXml.push(`
                <w:p><w:pPr><w:spacing w:before="120" w:after="60"/></w:pPr>
                    <w:r><w:rPr><w:b/><w:sz w:val="24"/></w:rPr><w:t>1. Bảng đáp án Phần I - Trắc nghiệm 4 lựa chọn:</w:t></w:r>
                </w:p>`);

                let tableRows = '';
                const colsPerRow = 10;
                for (let r = 0; r < mcqs.length; r += colsPerRow) {
                    let headerCells = '';
                    let ansCells = '';
                    for (let c = 0; c < colsPerRow && (r + c) < mcqs.length; c++) {
                        const qIndex = r + c;
                        const qItem = mcqs[qIndex];
                        headerCells += `<w:tc><w:tcPr><w:shd w:val="clear" w:color="auto" w:fill="F1F5F9"/></w:tcPr><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/><w:sz w:val="20"/></w:rPr><w:t>${qIndex + 1}</w:t></w:r></w:p></w:tc>`;
                        ansCells += `<w:tc><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/><w:sz w:val="22"/><w:color w:val="1E3A8A"/></w:rPr><w:t>${qItem.answerLetter || 'A'}</w:t></w:r></w:p></w:tc>`;
                    }
                    tableRows += `<w:tr>${headerCells}</w:tr><w:tr>${ansCells}</w:tr>`;
                }

                bodyXml.push(`
                <w:tbl>
                    <w:tblPr>
                        <w:tblW w:w="10000" w:type="dxa"/>
                        <w:tblBorders>
                            <w:top w:val="single" w:sz="4" w:space="0" w:color="CBD5E1"/>
                            <w:left w:val="single" w:sz="4" w:space="0" w:color="CBD5E1"/>
                            <w:bottom w:val="single" w:sz="4" w:space="0" w:color="CBD5E1"/>
                            <w:right w:val="single" w:sz="4" w:space="0" w:color="CBD5E1"/>
                            <w:insideH w:val="single" w:sz="4" w:space="0" w:color="CBD5E1"/>
                            <w:insideV w:val="single" w:sz="4" w:space="0" w:color="CBD5E1"/>
                        </w:tblBorders>
                    </w:tblPr>
                    ${tableRows}
                </w:tbl>`);
            }

            // TF Answer Table
            if (tfs.length > 0) {
                bodyXml.push(`
                <w:p><w:pPr><w:spacing w:before="140" w:after="60"/></w:pPr>
                    <w:r><w:rPr><w:b/><w:sz w:val="24"/></w:rPr><w:t>2. Bảng đáp án Phần I - Trắc nghiệm Đúng / Sai:</w:t></w:r>
                </w:p>`);

                let tfRows = `
                <w:tr>
                    <w:tc><w:tcPr><w:shd w:val="clear" w:color="auto" w:fill="F1F5F9"/></w:tcPr><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/></w:rPr><w:t>Câu</w:t></w:r></w:p></w:tc>
                    <w:tc><w:tcPr><w:shd w:val="clear" w:color="auto" w:fill="F1F5F9"/></w:tcPr><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/></w:rPr><w:t>Lệnh a</w:t></w:r></w:p></w:tc>
                    <w:tc><w:tcPr><w:shd w:val="clear" w:color="auto" w:fill="F1F5F9"/></w:tcPr><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/></w:rPr><w:t>Lệnh b</w:t></w:r></w:p></w:tc>
                    <w:tc><w:tcPr><w:shd w:val="clear" w:color="auto" w:fill="F1F5F9"/></w:tcPr><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/></w:rPr><w:t>Lệnh c</w:t></w:r></w:p></w:tc>
                    <w:tc><w:tcPr><w:shd w:val="clear" w:color="auto" w:fill="F1F5F9"/></w:tcPr><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/></w:rPr><w:t>Lệnh d</w:t></w:r></w:p></w:tc>
                </w:tr>`;

                const startTfNum = mcqs.length + 1;
                tfs.forEach((tf, idx) => {
                    const st = tf.statements || [];
                    const aAns = st.find(s => s.id === 'a')?.answer ? 'Đúng' : 'Sai';
                    const bAns = st.find(s => s.id === 'b')?.answer ? 'Đúng' : 'Sai';
                    const cAns = st.find(s => s.id === 'c')?.answer ? 'Đúng' : 'Sai';
                    const dAns = st.find(s => s.id === 'd')?.answer ? 'Đúng' : 'Sai';

                    tfRows += `
                    <w:tr>
                        <w:tc><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/></w:rPr><w:t>Câu ${startTfNum + idx}</w:t></w:r></w:p></w:tc>
                        <w:tc><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:t>${aAns}</w:t></w:r></w:p></w:tc>
                        <w:tc><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:t>${bAns}</w:t></w:r></w:p></w:tc>
                        <w:tc><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:t>${cAns}</w:t></w:r></w:p></w:tc>
                        <w:tc><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:t>${dAns}</w:t></w:r></w:p></w:tc>
                    </w:tr>`;
                });

                bodyXml.push(`
                <w:tbl>
                    <w:tblPr><w:tblW w:w="8000" w:type="dxa"/></w:tblPr>
                    ${tfRows}
                </w:tbl>`);
            }

            // Essay Rubric Table
            if (essays.length > 0) {
                bodyXml.push(`
                <w:p><w:pPr><w:spacing w:before="160" w:after="80"/></w:pPr>
                    <w:r><w:rPr><w:b/><w:sz w:val="24"/></w:rPr><w:t>3. Hướng dẫn chấm chi tiết Phần II - Tự luận:</w:t></w:r>
                </w:p>`);

                essays.forEach((es, idx) => {
                    bodyXml.push(`
                    <w:p><w:pPr><w:spacing w:before="100" w:after="40"/></w:pPr>
                        <w:r><w:rPr><w:b/><w:sz w:val="22"/><w:color w:val="1E3A8A"/></w:rPr><w:t>Câu ${idx + 1} (${es.points || 1.5} điểm): </w:t></w:r>
                        <w:r><w:rPr><w:sz w:val="22"/></w:rPr><w:t>${escapeXml(es.title || es.question)}</w:t></w:r>
                    </w:p>`);

                    if (es.modelAnswer) {
                        bodyXml.push(`
                        <w:p><w:pPr><w:ind w:left="300"/><w:spacing w:before="40" w:after="60"/></w:pPr>
                            <w:r><w:rPr><w:b/><w:sz w:val="21"/></w:rPr><w:t>Đáp án tham khảo: </w:t></w:r>
                            <w:r><w:rPr><w:sz w:val="21"/></w:rPr><w:t>${escapeXml(es.modelAnswer)}</w:t></w:r>
                        </w:p>`);
                    }

                    if (es.rubric && es.rubric.length > 0) {
                        let rubricRows = `
                        <w:tr>
                            <w:tc><w:tcPr><w:tcW w:w="8000" w:type="dxa"/><w:shd w:val="clear" w:color="auto" w:fill="F1F5F9"/></w:tcPr><w:p><w:r><w:rPr><w:b/></w:rPr><w:t>Tiêu chí chấm / Nội dung cần đạt</w:t></w:r></w:p></w:tc>
                            <w:tc><w:tcPr><w:tcW w:w="2000" w:type="dxa"/><w:shd w:val="clear" w:color="auto" w:fill="F1F5F9"/></w:tcPr><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/></w:rPr><w:t>Điểm</w:t></w:r></w:p></w:tc>
                        </w:tr>`;

                        es.rubric.forEach(r => {
                            rubricRows += `
                            <w:tr>
                                <w:tc><w:p><w:r><w:t>${escapeXml(r.criteria)}</w:t></w:r></w:p></w:tc>
                                <w:tc><w:p><w:pPr><w:jc w:val="center"/></w:pPr><w:r><w:rPr><w:b/></w:rPr><w:t>${r.points}đ</w:t></w:r></w:p></w:tc>
                            </w:tr>`;
                        });

                        bodyXml.push(`
                        <w:tbl>
                            <w:tblPr><w:tblW w:w="10000" w:type="dxa"/></w:tblPr>
                            ${rubricRows}
                        </w:tbl>`);
                    }
                });
            }
        }

        // Page Margins (A4 format: top/bottom 20mm = 1134 dxa, left/right 20mm = 1134 dxa)
        bodyXml.push(`
        <w:sectPr>
            <w:pgSz w:w="11906" w:h="16838"/>
            <w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134" w:header="720" w:footer="720" w:gutter="0"/>
        </w:sectPr>`);

        return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
    <w:body>
        ${bodyXml.join('\n')}
    </w:body>
</w:document>`;
    }

    // Public API
    window.AtlasDocxBuilder = {
        /**
         * Generates and triggers download of a .docx file
         */
        exportExamDocx: function(examData, options = {}) {
            const zip = new SimpleZip();
            zip.addFile('[Content_Types].xml', CONTENT_TYPES_XML);
            zip.addFile('_rels/.rels', ROOT_RELS_XML);
            zip.addFile('word/styles.xml', STYLES_XML);
            
            const docXml = generateDocumentXml(examData, options);
            zip.addFile('word/document.xml', docXml);

            const blob = zip.generate();
            const fileName = options.fileName || `De_thi_${examData.code || '101'}_${new Date().toISOString().slice(0,10)}.docx`;
            
            // Download Blob
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 100);
            return true;
        },

        /**
         * Generates HTML for direct A4 print or PDF saving via browser
         */
        printExam: function(examData, options = {}) {
            const printWindow = window.open('', '_blank');
            if (!printWindow) {
                alert('Vui lòng cho phép mở cửa sổ popup để in đề thi.');
                return;
            }

            const mcqs = examData.mcqs || [];
            const tfs = examData.tfs || [];
            const essays = examData.essays || [];

            let mcqHtml = mcqs.map((q, idx) => `
                <div class="print-question">
                    <p class="print-q-stem"><strong>Câu ${idx + 1}:</strong> ${q.question}</p>
                    <div class="print-options">
                        ${q.options.map((opt, oIdx) => `
                            <div class="print-option"><strong>${['A', 'B', 'C', 'D'][oIdx]}.</strong> ${opt}</div>
                        `).join('')}
                    </div>
                </div>
            `).join('');

            let tfHtml = tfs.map((tf, idx) => `
                <div class="print-question">
                    <p class="print-q-stem"><strong>Câu ${mcqs.length + idx + 1}:</strong> ${tf.question || 'Đọc đoạn tư liệu sau và xác định Đúng/Sai:'}</p>
                    ${tf.passage ? `<div class="print-passage"><em>"${tf.passage}"</em></div>` : ''}
                    <div class="print-tf-items">
                        ${(tf.statements || []).map(st => `
                            <div class="print-tf-item"><strong>${st.id})</strong> ${st.text}</div>
                        `).join('')}
                    </div>
                </div>
            `).join('');

            let essayHtml = essays.map((es, idx) => `
                <div class="print-question">
                    <p class="print-q-stem"><strong>Câu ${idx + 1} (${es.points || 1.5} điểm):</strong> ${es.question}</p>
                    ${!options.includeAnswers ? `
                        <div class="print-blank-lines">
                            <div class="print-line"></div>
                            <div class="print-line"></div>
                            <div class="print-line"></div>
                            <div class="print-line"></div>
                        </div>
                    ` : ''}
                </div>
            `).join('');

            let answersHtml = '';
            if (options.includeAnswers) {
                answersHtml = `
                <div class="print-page-break"></div>
                <div class="print-answers-section">
                    <h2 class="print-section-title" style="color: #991b1b; text-align: center;">ĐÁP ÁN VÀ HƯỚNG DẪN CHẤM (MÃ ĐỀ: ${examData.code || '101'})</h2>
                    <h3>1. Bảng đáp án trắc nghiệm 4 lựa chọn:</h3>
                    <table class="print-ans-table">
                        <tr>
                            ${mcqs.map((_, i) => `<th>${i+1}</th>`).join('')}
                        </tr>
                        <tr>
                            ${mcqs.map(q => `<td><strong>${q.answerLetter || 'A'}</strong></td>`).join('')}
                        </tr>
                    </table>

                    ${tfs.length > 0 ? `
                        <h3>2. Bảng đáp án trắc nghiệm Đúng / Sai:</h3>
                        <table class="print-ans-table" style="width: auto;">
                            <tr><th>Câu</th><th>Lệnh a</th><th>Lệnh b</th><th>Lệnh c</th><th>Lệnh d</th></tr>
                            ${tfs.map((tf, idx) => `
                                <tr>
                                    <td><strong>Câu ${mcqs.length + idx + 1}</strong></td>
                                    <td>${tf.statements?.find(s => s.id === 'a')?.answer ? 'Đúng' : 'Sai'}</td>
                                    <td>${tf.statements?.find(s => s.id === 'b')?.answer ? 'Đúng' : 'Sai'}</td>
                                    <td>${tf.statements?.find(s => s.id === 'c')?.answer ? 'Đúng' : 'Sai'}</td>
                                    <td>${tf.statements?.find(s => s.id === 'd')?.answer ? 'Đúng' : 'Sai'}</td>
                                </tr>
                            `).join('')}
                        </table>
                    ` : ''}

                    ${essays.length > 0 ? `
                        <h3>3. Hướng dẫn chấm Phần II - Tự luận:</h3>
                        ${essays.map((es, idx) => `
                            <div style="margin-bottom: 15px;">
                                <p><strong>Câu ${idx + 1} (${es.points || 1.5} điểm):</strong> <em>${es.modelAnswer}</em></p>
                                <table class="print-ans-table" style="width: 100%;">
                                    <tr><th>Tiêu chí chấm</th><th>Điểm</th></tr>
                                    ${(es.rubric || []).map(r => `<tr><td>${r.criteria}</td><td style="text-align: center;"><strong>${r.points}đ</strong></td></tr>`).join('')}
                                </table>
                            </div>
                        `).join('')}
                    ` : ''}
                </div>`;
            }

            const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>${examData.title || 'Đề thi ATLAS 9'} - Mã đề ${examData.code || '101'}</title>
    <style>
        @page { size: A4; margin: 18mm 18mm 18mm 18mm; }
        body { font-family: "Times New Roman", Times, serif; font-size: 13pt; line-height: 1.4; color: #000; margin: 0; padding: 0; }
        .print-header { display: flex; justify-content: space-between; border-bottom: 1.5px solid #000; padding-bottom: 8px; margin-bottom: 12px; }
        .print-header-col { text-align: center; width: 48%; }
        .print-student-info { display: flex; justify-content: space-between; margin-bottom: 15px; font-weight: bold; font-size: 12pt; }
        .print-part-title { font-size: 14pt; font-weight: bold; color: #1e3a8a; margin: 15px 0 8px 0; }
        .print-part-guide { font-style: italic; margin-bottom: 10px; font-size: 12pt; }
        .print-question { margin-bottom: 12px; page-break-inside: avoid; }
        .print-q-stem { margin: 0 0 4px 0; font-size: 13pt; }
        .print-options { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 15px; margin-left: 20px; }
        .print-passage { margin: 6px 0 6px 15px; padding-left: 10px; border-left: 2.5px solid #1e3a8a; font-style: italic; }
        .print-tf-item { margin: 3px 0 3px 20px; }
        .print-page-break { page-break-before: always; }
        .print-blank-lines { margin-top: 8px; }
        .print-line { border-bottom: 1px dotted #888; height: 26px; }
        .print-ans-table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 11pt; }
        .print-ans-table th, .print-ans-table td { border: 1px solid #444; padding: 4px 6px; text-align: center; }
        .print-ans-table th { background-color: #f1f5f9; }
        @media print {
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .no-print { display: none; }
        }
    </style>
</head>
<body>
    <div class="no-print" style="background: #f8fafc; padding: 12px 20px; border-bottom: 1px solid #cbd5e1; display: flex; justify-content: space-between; align-items: center;">
        <span><strong>ATLAS 9 - Chế độ In A4 / Lưu PDF</strong></span>
        <div>
            <button onclick="window.print()" style="padding: 8px 16px; background: #1e3a8a; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">In đề thi (Ctrl+P / Lưu PDF)</button>
            <button onclick="window.close()" style="padding: 8px 16px; background: #64748b; color: white; border: none; border-radius: 4px; cursor: pointer; margin-left: 8px;">Đóng</button>
        </div>
    </div>
    <div style="padding: 20px;">
        <div class="print-header">
            <div class="print-header-col">
                <div style="font-size: 11pt; font-weight: bold;">KÌ THI THỬ LỚP 9 THCS</div>
                <div style="font-size: 13pt; font-weight: bold;">HỆ THỐNG GIÁO DỤC ATLAS 9</div>
                <div style="font-size: 10pt; font-style: italic;">Đề thi chính thức</div>
            </div>
            <div class="print-header-col">
                <div style="font-size: 13pt; font-weight: bold;">${examData.title || 'ĐỀ KIỂM TRA LỊCH SỬ – ĐỊA LÍ 9'}</div>
                <div style="font-size: 11pt; font-weight: bold;">NĂM HỌC 2026 – 2027</div>
                <div style="font-size: 10pt;">Thời gian: ${examData.timeMinutes || 45} phút (không kể giao đề)</div>
            </div>
        </div>
        <div class="print-student-info">
            <div>Họ và tên thí sinh: ..................................................... Lớp: ............. SBD: ............</div>
            <div>MÃ ĐỀ: ${examData.code || '101'}</div>
        </div>

        <div class="print-part-title">PHẦN I. CÂU TRẮC NGHIỆM (${examData.part1Points || '7,0'} điểm)</div>
        <div class="print-part-guide">Thí sinh trả lời các câu hỏi trắc nghiệm dưới đây theo yêu cầu từng phần:</div>
        ${mcqHtml}
        ${tfHtml}

        ${essays.length > 0 ? `
            <div class="print-part-title">PHẦN II. TỰ LUẬN (${examData.part2Points || '3,0'} điểm)</div>
            <div class="print-part-guide">Thí sinh trình bày bài làm vào khoảng trống dưới mỗi câu hỏi:</div>
            ${essayHtml}
        ` : ''}

        ${answersHtml}
    </div>
</body>
</html>`;
            printWindow.document.open();
            printWindow.document.write(html);
            printWindow.document.close();
            return true;
        }
    };

})(window);
