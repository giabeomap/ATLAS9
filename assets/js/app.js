// ==========================================================================
// Bản đồ gán biểu đồ chuyên biệt cho từng bài học Địa lí 9
// ==========================================================================
window.ATLAS_LESSON_CHARTS = {
    geo_b1: [
        { src: 'assets/charts/chart_b01_so_dan_tang_truong.png', title: 'Bảng 1.1: Quy mô dân số và tỉ lệ tăng dân số Việt Nam (1999 – 2024)' },
        { src: 'assets/charts/chart_b01_co_cau_tuoi.png', title: 'Bảng 1.2: Cơ cấu dân số theo nhóm tuổi và tỉ số phụ thuộc (1999 – 2024)' }
    ],
    geo_b2: [
        { src: 'assets/charts/chart_b02_mat_do_dan_so.png', title: 'Bảng 2: Mật độ dân số các vùng kinh tế Việt Nam năm 2024 (người/km²)' },
        { src: 'assets/charts/chart_b02_ti_le_do_thi_hoa.png', title: 'Quá trình đô thị hoá: Tỉ lệ dân thành thị và nông thôn Việt Nam (1990 – 2024)' }
    ],
    geo_b3: [
        { src: 'assets/charts/chart_b03_co_cau_lao_dong_nganh.png', title: 'Bảng 3.1 & Hình 3.2: Cơ cấu lao động theo 3 khu vực kinh tế (2010 – 2024)' }
    ],
    geo_b5: [
        { src: 'assets/charts/chart_b05_dien_tich_san_luong_lua.png', title: 'Bảng 5.1: Diện tích gieo trồng và sản lượng lúa cả nước (2010 – 2024)' },
        { src: 'assets/charts/chart_b05_cay_cong_nghiep.png', title: 'Bảng 5.2: Diện tích cây công nghiệp lâu năm chủ yếu (2010 – 2024)' },
        { src: 'assets/charts/chart_b05_dan_gia_suc.png', title: 'Bảng 5.3: Số lượng đàn lợn và đàn gia cầm Việt Nam (2010 – 2024)' }
    ],
    geo_b6: [
        { src: 'assets/charts/chart_b06_dien_tich_rung_che_phu.png', title: 'Diện tích rừng tự nhiên, rừng trồng và tỉ lệ che phủ rừng (2010 – 2024)' },
        { src: 'assets/charts/chart_b06_san_luong_thuy_san.png', title: 'Bảng 6.2 & Hình 6.2: Sản lượng thuỷ sản khai thác và nuôi trồng (2010 – 2024)' }
    ],
    geo_b7: [
        { src: 'assets/charts/chart_b07_tong_hop_nong_lam_thuy.png', title: 'Thực hành: Các chỉ tiêu kinh tế tổng hợp nông - lâm - thuỷ sản Việt Nam' }
    ],
    geo_b8: [
        { src: 'assets/charts/chart_b08_san_luong_khoang_san.png', title: 'Bảng 8.1: Sản lượng khai thác than sạch, dầu thô và khí tự nhiên' },
        { src: 'assets/charts/chart_b08_co_cau_cong_nghiep.png', title: 'Hình 8.2: Cơ cấu giá trị sản xuất và các phân ngành công nghiệp' }
    ],
    geo_b10: [
        { src: 'assets/charts/chart_b10_van_tai_du_lich.png', title: 'Khối lượng vận chuyển hàng hoá theo ngành GTVT và du lịch' }
    ],
    geo_b11: [
        { src: 'assets/charts/chart_b11_xuat_nhap_khau.png', title: 'Cơ cấu kim ngạch xuất - nhập khẩu và cán cân thương mại Việt Nam' }
    ],
    geo_b12: [
        { src: 'assets/charts/chart_b12_grdp_tdmnpb.png', title: 'Bảng 12.2: Cơ cấu GRDP vùng Trung du và miền núi Bắc Bộ (2010 – 2024)' }
    ],
    geo_b13: [
        { src: 'assets/charts/chart_b13_nang_suat_lua_dbsh.png', title: 'Năng suất lúa vùng Đồng bằng sông Hồng so với cả nước (2010 – 2024)' }
    ],
    geo_b14: [
        { src: 'assets/charts/chart_b14_grdp_btb.png', title: 'Bảng 14.1: Cơ cấu GRDP vùng Bắc Trung Bộ (2010 – 2024)' }
    ],
    geo_b16: [
        { src: 'assets/charts/chart_b16_cay_cong_nghiep_tay_nguyen.png', title: 'Diện tích và sản lượng cây công nghiệp lâu năm vùng Tây Nguyên' }
    ],
    geo_b17: [
        { src: 'assets/charts/chart_b17_do_thi_hoa_dong_nam_bo.png', title: 'Bảng 17.1: Dân thành thị và tỉ lệ đô thị hoá vùng Đông Nam Bộ (1999 – 2024)' }
    ],
    geo_b18: [
        { src: 'assets/charts/chart_b18_lien_vung_dnb_dbscl.png', title: 'Thực hành: So sánh các chỉ tiêu kinh tế liên vùng Đông Nam Bộ & ĐBSCL' }
    ],
    geo_b19: [
        { src: 'assets/charts/chart_b19_thuy_san_lua_dbscl.png', title: 'Vị thế sản lượng lúa và thuỷ sản vùng Đồng bằng sông Cửu Long' }
    ],
    geo_b21: [
        { src: 'assets/charts/chart_b21_kinh_te_bien.png', title: 'Hình 21.1 & 21.4: Cơ cấu 4 ngành kinh tế biển then chốt Việt Nam' }
    ]
};

/**
 * ATLAS 9 - MAIN APPLICATION CONTROLLER
 * Comprehensive UI Rendering & Event Handling
 * 100% Offline, Pure Vanilla JavaScript
 */

(function(window) {
    'use strict';

    // Global App State
    window.AtlasApp = {
        activeExam: null,
        activeExamSession: null,
        activePracticeSession: null,

        init: function() {
            console.log("ATLAS 9 initializing...");
            this.setupMobileMenu();
            this.registerRoutes();
            window.AtlasRouter.init();
        },

        setupMobileMenu: function() {
            const menuBtn = document.querySelector('.mobile-menu-btn');
            const sidebar = document.querySelector('.app-sidebar');
            const backdrop = document.querySelector('.sidebar-backdrop');

            if (menuBtn && sidebar && backdrop) {
                menuBtn.addEventListener('click', () => {
                    sidebar.classList.toggle('open');
                    backdrop.classList.toggle('active');
                });

                backdrop.addEventListener('click', () => {
                    sidebar.classList.remove('open');
                    backdrop.classList.remove('active');
                });
            }
        },

        setPageTitle: function(title) {
            const el = document.getElementById('page-title-text');
            if (el) el.textContent = title;
            document.title = `${title} | ATLAS 9 - Học và Thi Lịch sử - Địa lí 9`;
        },

        renderRoot: function(html) {
            const root = document.getElementById('app-root');
            if (root) root.innerHTML = html;
        },

        registerRoutes: function() {
            // 1. Home / Dashboard
            window.AtlasRouter.register('/', () => this.viewHome());

            // 2. History 9
            window.AtlasRouter.register('/history', () => this.viewHistory());

            // 3. Geography 9
            window.AtlasRouter.register('/geography', () => this.viewGeography());

            // 4. Lesson Detail Space
            window.AtlasRouter.register('/lesson/:id', (params) => this.viewLesson(params.id));

            // 5. Practice Center
            window.AtlasRouter.register('/practice', (params) => this.viewPractice(params));

            // 6. Exam Matrix Creator
            window.AtlasRouter.register('/matrix', (params) => this.viewMatrix(params));

            // 7. Exam Arena
            window.AtlasRouter.register('/exam', () => this.viewExam());

            // 8. Exam Results
            window.AtlasRouter.register('/exam-result', () => this.viewExamResult());

            // 9. Question Bank Browser
            window.AtlasRouter.register('/bank', (params) => this.viewBank(params));

            // 10. Mistake Notebook
            window.AtlasRouter.register('/mistakes', () => this.viewMistakes());

            // 11. Learning Statistics
            window.AtlasRouter.register('/statistics', () => this.viewStatistics());

            // 12. Settings & Backup
            window.AtlasRouter.register('/settings', () => this.viewSettings());
        },

        // ==========================================
        // VIEW 1: HOME / DASHBOARD
        // ==========================================
        viewHome: function() {
            this.setPageTitle('Tổng quan học tập');
            const metrics = window.AtlasStatistics.getOverviewMetrics();
            const subjectStats = window.AtlasStatistics.getSubjectMetrics();
            const examHistory = window.AtlasStorage.getExamHistory().slice(0, 4);

            const html = `
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon blue">📝</div>
                    <div class="stat-info">
                        <div class="stat-value">${metrics.totalAnswered}</div>
                        <div class="stat-label">Câu hỏi đã làm</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon green">🎯</div>
                    <div class="stat-info">
                        <div class="stat-value">${metrics.accuracy}%</div>
                        <div class="stat-label">Tỉ lệ chính xác</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon gold">⏱️</div>
                    <div class="stat-info">
                        <div class="stat-value">${metrics.studyTimeFormatted}</div>
                        <div class="stat-label">Thời gian ôn luyện</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon red">📖</div>
                    <div class="stat-info">
                        <div class="stat-value">${metrics.mistakeCount}</div>
                        <div class="stat-label">Câu hỏi cần ôn lại</div>
                    </div>
                </div>
            </div>

            <!-- Subject Quick Access -->
            <div class="subject-quick-grid">
                <div class="subject-banner-card history">
                    <div>
                        <div class="subject-banner-header">
                            <span class="badge badge-history">LỊCH SỬ 9</span>
                            <span style="font-size: 13px; font-weight: 600; color: var(--text-muted);">21 BÀI HỌC</span>
                        </div>
                        <h2 class="subject-title" style="color: var(--history-red);">Lịch sử thế giới & Lịch sử Việt Nam</h2>
                        <p class="subject-desc">Toàn bộ 7 chương: Thế giới từ 1918 đến nay, các giai đoạn cách mạng Việt Nam 1918 – nay và Cách mạng KH-KT.</p>
                        <div style="margin-bottom: 18px; font-size: 13px;">
                            <span>Đã làm: <strong>${subjectStats.history.answered}</strong> câu • Độ chính xác: <strong>${subjectStats.history.accuracy}%</strong></span>
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <a href="#/history" class="btn btn-primary" style="background: var(--history-red); border-color: var(--history-red); flex: 1;">Vào học Lịch sử</a>
                        <a href="#/practice?subject=history" class="btn btn-outline" style="border-color: var(--history-border); color: var(--history-red);">Luyện tập</a>
                    </div>
                </div>

                <div class="subject-banner-card geography">
                    <div>
                        <div class="subject-banner-header">
                            <span class="badge badge-geo">ĐỊA LÍ 9</span>
                            <span style="font-size: 13px; font-weight: 600; color: var(--text-muted);">17 BÀI HỌC</span>
                        </div>
                        <h2 class="subject-title" style="color: var(--geo-green);">Địa lí dân cư, Kinh tế & Các vùng</h2>
                        <p class="subject-desc">3 chương trọng tâm: Dân tộc - Dân số, Các ngành kinh tế (Nông nghiệp, Công nghiệp, Dịch vụ) và 6 Vùng kinh tế - xã hội.</p>
                        <div style="margin-bottom: 18px; font-size: 13px;">
                            <span>Đã làm: <strong>${subjectStats.geography.answered}</strong> câu • Độ chính xác: <strong>${subjectStats.geography.accuracy}%</strong></span>
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <a href="#/geography" class="btn btn-primary" style="background: var(--geo-green); border-color: var(--geo-green); flex: 1;">Vào học Địa lí</a>
                        <a href="#/practice?subject=geography" class="btn btn-outline" style="border-color: var(--geo-border); color: var(--geo-green);">Luyện tập</a>
                    </div>
                </div>
            </div>

            <!-- Quick Action Shortcuts -->
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">⚡ Thao tác nhanh</h3>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px;">
                    <a href="#/practice" class="btn btn-primary" style="padding: 14px; flex-direction: column; gap: 6px;">
                        <span style="font-size: 20px;">🎯</span>
                        <span>Luyện tập tự chọn bài</span>
                    </a>
                    <a href="#/matrix" class="btn btn-gold" style="padding: 14px; flex-direction: column; gap: 6px;">
                        <span style="font-size: 20px;">📊</span>
                        <span>Thi thử & Tạo ma trận</span>
                    </a>
                    <a href="#/bank" class="btn btn-outline" style="padding: 14px; flex-direction: column; gap: 6px;">
                        <span style="font-size: 20px;">🔍</span>
                        <span>Ngân hàng 1.900 câu hỏi</span>
                    </a>
                    <a href="#/mistakes" class="btn btn-outline" style="padding: 14px; flex-direction: column; gap: 6px; border-color: var(--history-border); color: var(--history-red);">
                        <span style="font-size: 20px;">📕</span>
                        <span>Ôn sổ câu sai (${metrics.mistakeCount})</span>
                    </a>
                </div>
            </div>

            <!-- Recent Exam History -->
            ${examHistory.length > 0 ? `
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">🏆 Bài thi gần đây</h3>
                    <a href="#/statistics" class="btn btn-outline btn-sm">Xem tất cả</a>
                </div>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    ${examHistory.map(ex => `
                        <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: white;">
                            <div>
                                <div style="font-weight: 700; color: var(--primary-navy);">${ex.title || 'Đề thi thử ATLAS 9'} (Mã ${ex.code})</div>
                                <div style="font-size: 12px; color: var(--text-muted);">
                                    ${new Date(ex.date).toLocaleDateString('vi-VN')} • ${ex.totalQuestions} câu • Đúng ${ex.correctCount}/${ex.totalQuestions}
                                </div>
                            </div>
                            <div style="text-align: right;">
                                <div style="font-size: 20px; font-weight: 800; color: ${ex.totalScore >= 8 ? 'var(--success)' : (ex.totalScore >= 5 ? 'var(--accent-gold)' : 'var(--danger)')};">
                                    ${ex.totalScore}/10
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}
            `;

            this.renderRoot(html);
        },

        // ==========================================
        // VIEW 2: HISTORY 9 CURRICULUM
        // ==========================================
        viewHistory: function() {
            this.setPageTitle('Lịch sử 9 – Kết nối tri thức');
            const curriculum = window.ATLAS_CURRICULUM;
            const chapters = curriculum.chapters.filter(c => c.subject === 'history');
            const lessons = curriculum.lessons.filter(l => l.subject === 'history');
            const p = window.AtlasStorage.getProgress();
            const completed = p.completedLessons || {};

            let html = `
            <div class="card" style="background: linear-gradient(135deg, #7f1d1d, #991b1b); color: white; margin-bottom: 24px;">
                <h1 style="color: white; font-size: 24px; margin-bottom: 6px;">Phân môn Lịch sử 9</h1>
                <p style="color: #fecaca; margin-bottom: 14px;">Chương trình GDPT 2018 bộ Kết nối tri thức với cuộc sống. Tổng hợp 7 chương, 21 bài học với 1.050 câu hỏi trắc nghiệm và câu tự luận.</p>
                <div style="display: flex; gap: 10px;">
                    <a href="#/practice?subject=history" class="btn btn-gold btn-sm">Luyện tập Lịch sử</a>
                    <a href="#/matrix?subject=history" class="btn btn-outline btn-sm" style="color: white; border-color: rgba(255,255,255,0.4);">Tạo đề thi Lịch sử</a>
                </div>
            </div>
            `;

            chapters.forEach(ch => {
                const chLessons = lessons.filter(l => l.chapterId === ch.id);
                html += `
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title" style="color: var(--history-red);">📖 ${ch.title}</h3>
                        <span class="badge badge-history">${chLessons.length} bài học</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        ${chLessons.map(l => {
                            const cInfo = completed[l.id];
                            const answered = cInfo ? cInfo.answered : 0;
                            const acc = cInfo && cInfo.answered > 0 ? Math.round((cInfo.correct / cInfo.answered) * 100) : 0;
                            return `
                            <div class="lesson-card-item">
                                <div class="lesson-card-info">
                                    <div class="lesson-num-pill">BÀI ${l.lessonNum} • LỊCH SỬ 9</div>
                                    <div class="lesson-card-title">${l.title}</div>
                                    <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">
                                        ${answered > 0 ? `Đã làm: <strong>${answered}</strong> câu • Độ chính xác: <strong style="color: ${acc >= 80 ? 'var(--success)' : (acc >= 50 ? 'var(--accent-gold)' : 'var(--danger)')};">${acc}%</strong>` : 'Chưa làm câu nào trong ngân hàng'}
                                    </div>
                                </div>
                                <div class="lesson-card-actions" style="display: flex; gap: 8px;">
                                    <a href="#/lesson/${l.id}" class="btn btn-outline btn-sm">Học kiến thức</a>
                                    <a href="#/practice?lessonId=${l.id}" class="btn btn-primary btn-sm" style="background: var(--history-red); border-color: var(--history-red);">Luyện tập</a>
                                </div>
                            </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                `;
            });

            this.renderRoot(html);
        },

        // ==========================================
        // VIEW 3: GEOGRAPHY 9 CURRICULUM
        // ==========================================
        viewGeography: function() {
            this.setPageTitle('Địa lí 9 – Kết nối tri thức');
            const curriculum = window.ATLAS_CURRICULUM;
            const chapters = curriculum.chapters.filter(c => c.subject === 'geography');
            const lessons = curriculum.lessons.filter(l => l.subject === 'geography');
            const p = window.AtlasStorage.getProgress();
            const completed = p.completedLessons || {};

            let html = `
            <div class="card" style="background: linear-gradient(135deg, #064e3b, #065f46); color: white; margin-bottom: 24px;">
                <h1 style="color: white; font-size: 24px; margin-bottom: 6px;">Phân môn Địa lí 9</h1>
                <p style="color: #a7f3d0; margin-bottom: 14px;">Chương trình GDPT 2018 bộ Kết nối tri thức với cuộc sống. Tổng hợp 3 chương, 17 bài học với 850 câu hỏi trắc nghiệm, bài tập khai thác biểu đồ và tự luận.</p>
                <div style="display: flex; gap: 10px;">
                    <a href="#/practice?subject=geography" class="btn btn-gold btn-sm">Luyện tập Địa lí</a>
                    <a href="#/matrix?subject=geography" class="btn btn-outline btn-sm" style="color: white; border-color: rgba(255,255,255,0.4);">Tạo đề thi Địa lí</a>
                </div>
            </div>
            `;

            chapters.forEach(ch => {
                const chLessons = lessons.filter(l => l.chapterId === ch.id);
                html += `
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title" style="color: var(--geo-green);">🌏 ${ch.title}</h3>
                        <span class="badge badge-geo">${chLessons.length} bài học</span>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        ${chLessons.map(l => {
                            const cInfo = completed[l.id];
                            const answered = cInfo ? cInfo.answered : 0;
                            const acc = cInfo && cInfo.answered > 0 ? Math.round((cInfo.correct / cInfo.answered) * 100) : 0;
                            return `
                            <div class="lesson-card-item">
                                <div class="lesson-card-info">
                                    <div class="lesson-num-pill">BÀI ${l.lessonNum} • ĐỊA LÍ 9</div>
                                    <div class="lesson-card-title">${l.title}</div>
                                    <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">
                                        ${answered > 0 ? `Đã làm: <strong>${answered}</strong> câu • Độ chính xác: <strong style="color: ${acc >= 80 ? 'var(--success)' : (acc >= 50 ? 'var(--accent-gold)' : 'var(--danger)')};">${acc}%</strong>` : 'Chưa làm câu nào trong ngân hàng'}
                                    </div>
                                </div>
                                <div class="lesson-card-actions" style="display: flex; gap: 8px;">
                                    <a href="#/lesson/${l.id}" class="btn btn-outline btn-sm">Học kiến thức</a>
                                    <a href="#/practice?lessonId=${l.id}" class="btn btn-primary btn-sm" style="background: var(--geo-green); border-color: var(--geo-green);">Luyện tập</a>
                                </div>
                            </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                `;
            });

            this.renderRoot(html);
        },

        // ==========================================
        // VIEW 4: LESSON DETAIL SPACE
        // ==========================================
        viewLesson: function(lessonId) {
            const curriculumLessons = window.ATLAS_CURRICULUM ? window.ATLAS_CURRICULUM.lessons : [];
            const lesson = curriculumLessons.find(l => l.id === lessonId);
            if (!lesson) {
                this.renderRoot(`<div class="alert alert-danger">Không tìm thấy bài học yêu cầu.</div>`);
                return;
            }

            this.setPageTitle(lesson.title);
            const lessonData = (window.ATLAS_LESSONS && window.ATLAS_LESSONS[lessonId]) || {};
            const isHistory = (lesson.subject === 'history');
            const themeColor = isHistory ? 'var(--history-red)' : 'var(--geo-green)';
            const badgeClass = isHistory ? 'badge-history' : 'badge-geo';

            // Available questions for this lesson
            const lessonQuestions = window.AtlasQuestionEngine.filterQuestions({ lessonId: lessonId });
            const lessonEssays = window.AtlasQuestionEngine.filterEssays({ lessonId: lessonId });

            const topics = lessonData.topics || [];
            const timeline = lessonData.timeline || [];
            const stats = lessonData.stats || [];

            let html = `
            <div style="margin-bottom: 20px;">
                <a href="#/${isHistory ? 'history' : 'geography'}" style="color: var(--text-muted); text-decoration: none; font-size: 13px;">← Quay lại danh sách ${isHistory ? 'Lịch sử 9' : 'Địa lí 9'}</a>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 8px; flex-wrap: wrap; gap: 12px;">
                    <div>
                        <span class="badge ${badgeClass}" style="margin-bottom: 6px;">BÀI ${lesson.lessonNum} • ${isHistory ? 'LỊCH SỬ 9' : 'ĐỊA LÍ 9'}</span>
                        <h1 style="color: ${themeColor}; font-size: 22px; margin: 0;">${lesson.title}</h1>
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <a href="#/practice?lessonId=${lesson.id}&count=10" class="btn btn-outline btn-sm">Kiểm tra nhanh 10 câu</a>
                        <a href="#/practice?lessonId=${lesson.id}" class="btn btn-primary btn-sm" style="background: ${themeColor}; border-color: ${themeColor};">Luyện tập bài này (${lessonQuestions.length} câu)</a>
                    </div>
                </div>
            </div>

            <!-- Tab Navigation -->
            <div class="lesson-tabs">
                <button class="lesson-tab-btn active" onclick="AtlasApp.switchLessonTab(event, 'tab-knowledge')">📌 Trọng tâm kiến thức</button>
                ${timeline.length > 0 ? `<button class="lesson-tab-btn" onclick="AtlasApp.switchLessonTab(event, 'tab-timeline')">⏳ Mốc thời gian & Sự kiện</button>` : ''}
                ${stats.length > 0 ? `<button class="lesson-tab-btn" onclick="AtlasApp.switchLessonTab(event, 'tab-stats')">📊 Bảng số liệu thống kê</button>` : ''}
                <button class="lesson-tab-btn" onclick="AtlasApp.switchLessonTab(event, 'tab-summary')">💡 Ghi nhớ nhanh & Nhầm lẫn</button>
                <button class="lesson-tab-btn" onclick="AtlasApp.switchLessonTab(event, 'tab-essays')">✍️ Câu hỏi tự luận (${lessonEssays.length})</button>
            </div>

            <!-- TAB 1: KNOWLEDGE UNITS -->
            <div id="tab-knowledge" class="lesson-tab-content">
                ${topics.length > 0 ? topics.map((tp, idx) => `
                    <div class="card" style="border-left: 4px solid ${themeColor};">
                        <div class="card-header" style="border: none; padding-bottom: 8px;">
                            <h3 class="card-title" style="color: ${themeColor}; font-size: 16px;">
                                Chủ đề ${idx + 1}: ${tp.title}
                            </h3>
                            <a href="#/practice?lessonId=${lesson.id}&topic=${encodeURIComponent(tp.title)}" class="btn btn-outline btn-sm">Luyện tập phần này</a>
                        </div>
                        <div style="font-size: 14.5px; line-height: 1.7; color: var(--text-secondary); white-space: pre-line;">
                            ${tp.content}
                        </div>
                    </div>
                `).join('') : `
                    <div class="card">
                        <p>Nội dung kiến thức trọng tâm bám sát SGK Lịch sử và Địa lí 9 (bộ Kết nối tri thức với cuộc sống).</p>
                    </div>
                `}

${(!isHistory && window.ATLAS_LESSON_CHARTS && window.ATLAS_LESSON_CHARTS[lessonId]) ? `
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title" style="color: var(--geo-green);">📈 Biểu đồ & Số liệu minh họa Địa lí (${lesson.title})</h3>
                        </div>
                        <div class="lesson-charts-container" style="display: flex; flex-direction: column; gap: 24px; padding: 12px 0;">
                            ${window.ATLAS_LESSON_CHARTS[lessonId].map(ch => `
                                <div class="lesson-chart-item" style="text-align: center; background: var(--bg-hover, #f8fafc); border-radius: 8px; padding: 16px; border: 1px solid var(--border-color, #e2e8f0);">
                                    <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 10px; font-size: 15px;">📊 ${ch.title}</div>
                                    <div class="question-chart-wrapper" style="margin: 0 auto; max-width: 720px;">
                                        <img src="${ch.src}" alt="${ch.title}" class="question-chart-img" style="width: 100%; height: auto; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);" onerror="this.style.display='none'">
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>

            <!-- TAB 2: TIMELINE -->
            ${timeline.length > 0 ? `
            <div id="tab-timeline" class="lesson-tab-content" style="display: none;">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title" style="color: var(--history-red);">⏳ Bảng tiến trình lịch sử & Sự kiện then chốt</h3>
                    </div>
                    <table class="matrix-table">
                        <thead>
                            <tr>
                                <th style="width: 130px;">Thời gian</th>
                                <th style="text-align: left;">Sự kiện lịch sử quan trọng</th>
                                <th style="text-align: left;">Kết quả hoặc Ý nghĩa</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${timeline.map(tl => `
                                <tr>
                                    <td><strong style="color: var(--history-red);">${tl.time}</strong></td>
                                    <td class="align-left">${tl.event}</td>
                                    <td class="align-left" style="color: var(--text-secondary);">${tl.result}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
            ` : ''}

            <!-- TAB 3: STATS (GEOGRAPHY) -->
            ${stats.length > 0 ? `
            <div id="tab-stats" class="lesson-tab-content" style="display: none;">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title" style="color: var(--geo-green);">📊 Bảng số liệu kinh tế - xã hội quan trọng</h3>
                    </div>
                    <table class="matrix-table">
                        <thead>
                            <tr>
                                <th>Năm / Giai đoạn</th>
                                <th style="text-align: left;">Chỉ tiêu & Đơn vị đo</th>
                                <th style="text-align: left;">Giá trị thống kê</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${stats.map(st => `
                                <tr>
                                    <td><strong>${st.year}</strong></td>
                                    <td class="align-left">${st.indicator}</td>
                                    <td class="align-left">${st.value}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
            ` : ''}

            <!-- TAB 4: QUICK SUMMARY & COMMON PITFALLS -->
            <div id="tab-summary" class="lesson-tab-content" style="display: none;">
                <div class="card" style="background-color: #fffbeb; border-color: #fde68a;">
                    <div class="card-header" style="border-bottom-color: #fde68a;">
                        <h3 class="card-title" style="color: #92400e;">💡 Ghi nhớ nhanh cốt lõi</h3>
                    </div>
                    <div style="font-size: 14.5px; line-height: 1.7; color: #78350f; white-space: pre-line;">
                        ${lessonData.quickSummary || 'Nắm vững kiến thức trọng tâm, các khái niệm, mốc thời gian và bản chất hiện tượng trong SGK Kết nối tri thức.'}
                    </div>
                </div>

                ${lessonData.keyTerms ? `
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title" style="color: var(--primary-navy);">🔑 Khái niệm & Thuật ngữ quan trọng</h3>
                    </div>
                    <div style="font-size: 14px; line-height: 1.7; color: var(--text-secondary); white-space: pre-line;">
                        ${lessonData.keyTerms}
                    </div>
                </div>
                ` : ''}

                ${lessonData.evaluation ? `
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title" style="color: var(--primary-navy);">🎯 Nhận xét & Đánh giá sư phạm</h3>
                    </div>
                    <div style="font-size: 14px; line-height: 1.7; color: var(--text-secondary); white-space: pre-line;">
                        ${lessonData.evaluation}
                    </div>
                </div>
                ` : ''}
            </div>

            <!-- TAB 5: ESSAYS -->
            <div id="tab-essays" class="lesson-tab-content" style="display: none;">
                ${lessonEssays.length > 0 ? lessonEssays.map((es, idx) => `
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title" style="color: var(--primary-navy);">
                                Câu ${idx + 1}: ${es.title}
                            </h3>
                            <span class="badge badge-gold">${es.points} điểm • ${es.essayType}</span>
                        </div>
                        <p class="q-stem">${es.question}</p>
                        
                        <div style="margin-top: 14px;">
                            <button class="btn btn-outline btn-sm" onclick="this.nextElementSibling.style.display = (this.nextElementSibling.style.display === 'none' ? 'block' : 'none');">
                                Xem đáp án tham khảo & Barem chấm
                            </button>
                            <div style="display: none; margin-top: 12px; background: #f8fafc; padding: 14px 18px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                                <div style="font-weight: 700; color: var(--primary-navy); margin-bottom: 6px;">Đáp án tham khảo:</div>
                                <div style="font-size: 13.5px; white-space: pre-line; color: var(--text-secondary); margin-bottom: 12px;">${es.modelAnswer}</div>
                                
                                <div style="font-weight: 700; color: var(--primary-navy); margin-bottom: 6px;">Barem tiêu chí chấm điểm:</div>
                                <table class="matrix-table" style="background: white;">
                                    <thead><tr><th>Tiêu chí chấm / Nội dung cần đạt</th><th style="width: 80px;">Điểm</th></tr></thead>
                                    <tbody>
                                        ${(es.rubric || []).map(r => `<tr><td class="align-left">${r.criteria}</td><td><strong>${r.points}đ</strong></td></tr>`).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `).join('') : '<p>Chưa có câu hỏi tự luận cho bài này.</p>'}
            </div>
            `;

            this.renderRoot(html);
        },

        switchLessonTab: function(e, tabId) {
            document.querySelectorAll('.lesson-tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.lesson-tab-content').forEach(c => c.style.display = 'none');
            e.currentTarget.classList.add('active');
            const target = document.getElementById(tabId);
            if (target) target.style.display = 'block';
        },

        // ==========================================
        // VIEW 5: PRACTICE CENTER
        // ==========================================
        viewPractice: function(queryParams = {}) {
            this.setPageTitle('Trung tâm luyện tập');
            const curriculum = window.ATLAS_CURRICULUM;
            const preLessonId = queryParams.lessonId || '';
            const preSubject = queryParams.subject || 'all';

            // If an active session is in progress and not finished, render session
            const currentSession = window.AtlasPracticeEngine.getSession();
            if (currentSession && !currentSession.isSubmitted && !queryParams.new) {
                this.renderPracticeSession(currentSession);
                return;
            }

            // Otherwise, render Practice Setup Form
            let lessonsList = curriculum.lessons;
            if (preSubject !== 'all') {
                lessonsList = lessonsList.filter(l => l.subject === preSubject);
            }

            let html = `
            <div class="card" style="max-width: 860px; margin: 0 auto;">
                <div class="card-header">
                    <h2 class="card-title" style="font-size: 18px;">🎯 Thiết lập bài luyện tập tùy chỉnh</h2>
                    <span class="badge badge-blue">Ngân hàng 1.900 câu</span>
                </div>

                <form id="practice-setup-form" onsubmit="AtlasApp.startPracticeSession(event);">
                    <!-- 1. Subject Filter -->
                    <div style="margin-bottom: 18px;">
                        <label style="display: block; font-weight: 700; margin-bottom: 8px;">1. Phân môn:</label>
                        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                            <label style="cursor: pointer; display: flex; align-items: center; gap: 6px;">
                                <input type="radio" name="p_subject" value="all" ${preSubject === 'all' ? 'checked' : ''} onchange="AtlasApp.updatePracticeLessonsFilter(this.value)"> Tất cả (Lịch sử & Địa lí)
                            </label>
                            <label style="cursor: pointer; display: flex; align-items: center; gap: 6px;">
                                <input type="radio" name="p_subject" value="history" ${preSubject === 'history' ? 'checked' : ''} onchange="AtlasApp.updatePracticeLessonsFilter(this.value)"> <span style="color: var(--history-red); font-weight: 600;">Lịch sử 9</span>
                            </label>
                            <label style="cursor: pointer; display: flex; align-items: center; gap: 6px;">
                                <input type="radio" name="p_subject" value="geography" ${preSubject === 'geography' ? 'checked' : ''} onchange="AtlasApp.updatePracticeLessonsFilter(this.value)"> <span style="color: var(--geo-green); font-weight: 600;">Địa lí 9</span>
                            </label>
                        </div>
                    </div>

                    <!-- 2. Lessons Selection (Non-consecutive multiple selection) -->
                    <div style="margin-bottom: 18px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                            <label style="font-weight: 700; margin: 0;">2. Chọn phạm vi bài học (Chọn một hoặc nhiều bài bất kì):</label>
                            <div style="display: flex; gap: 8px;">
                                <button type="button" class="btn btn-outline btn-sm" onclick="AtlasApp.toggleSelectAllPracticeLessons(true)">Chọn tất cả</button>
                                <button type="button" class="btn btn-outline btn-sm" onclick="AtlasApp.toggleSelectAllPracticeLessons(false)">Bỏ chọn</button>
                            </div>
                        </div>

                        <div id="practice-lessons-container" style="max-height: 240px; overflow-y: auto; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 12px; background: #f8fafc;">
                            ${this.renderPracticeLessonCheckboxes(preSubject, preLessonId)}
                        </div>
                    </div>

                    <!-- 3. Question Type & Cognitive Level -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 18px;">
                        <div>
                            <label style="display: block; font-weight: 700; margin-bottom: 6px;">3. Dạng câu hỏi:</label>
                            <select id="p_type" class="form-select" style="width: 100%; padding: 8px 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                                <option value="all">Tất cả dạng (4 lựa chọn & Đúng/Sai)</option>
                                <option value="single_choice">Trắc nghiệm 4 lựa chọn (MCQ)</option>
                                <option value="true_false">Trắc nghiệm Đúng / Sai (4 nhận định)</option>
                            </select>
                        </div>
                        <div>
                            <label style="display: block; font-weight: 700; margin-bottom: 6px;">4. Mức độ nhận thức:</label>
                            <select id="p_level" class="form-select" style="width: 100%; padding: 8px 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                                <option value="all">Tất cả mức độ (Nhận biết → Vận dụng cao)</option>
                                <option value="recognition">Nhận biết</option>
                                <option value="understanding">Thông hiểu</option>
                                <option value="application">Vận dụng</option>
                                <option value="high_application">Vận dụng cao</option>
                            </select>
                        </div>
                    </div>

                    <!-- 4. Question Count & Mode -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                        <div>
                            <label style="display: block; font-weight: 700; margin-bottom: 6px;">5. Số lượng câu hỏi:</label>
                            <select id="p_count" class="form-select" style="width: 100%; padding: 8px 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                                <option value="10">10 câu (Luyện nhanh)</option>
                                <option value="20" selected>20 câu (Tiêu chuẩn)</option>
                                <option value="30">30 câu</option>
                                <option value="40">40 câu</option>
                                <option value="50">50 câu (Toàn diện)</option>
                            </select>
                        </div>
                        <div>
                            <label style="display: block; font-weight: 700; margin-bottom: 6px;">6. Chế độ luyện tập:</label>
                            <select id="p_mode" class="form-select" style="width: 100%; padding: 8px 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                                <option value="study" selected>Chế độ Học tập (Xem đáp án & giải thích ngay)</option>
                                <option value="test">Chế độ Kiểm tra (Nộp bài mới xem kết quả)</option>
                            </select>
                        </div>
                    </div>

                    <div style="text-align: right;">
                        <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">Bắt đầu luyện tập ngay 🚀</button>
                    </div>
                </form>
            </div>
            `;

            this.renderRoot(html);
        },

        renderPracticeLessonCheckboxes: function(subjectFilter = 'all', preselectedLessonId = '') {
            const lessons = window.ATLAS_CURRICULUM ? window.ATLAS_CURRICULUM.lessons : [];
            const filtered = subjectFilter === 'all' ? lessons : lessons.filter(l => l.subject === subjectFilter);

            return filtered.map(l => `
                <label style="display: flex; align-items: center; gap: 8px; padding: 4px 0; font-size: 13.5px; cursor: pointer;">
                    <input type="checkbox" name="p_lesson_chk" value="${l.id}" ${(preselectedLessonId === l.id || !preselectedLessonId) ? 'checked' : ''}>
                    <span style="font-weight: 600; color: ${l.subject === 'history' ? 'var(--history-red)' : 'var(--geo-green)'};">
                        [${l.subject === 'history' ? 'Sử' : 'Địa'} B${l.lessonNum}]
                    </span>
                    <span>${l.title}</span>
                </label>
            `).join('');
        },

        updatePracticeLessonsFilter: function(subj) {
            const container = document.getElementById('practice-lessons-container');
            if (container) {
                container.innerHTML = this.renderPracticeLessonCheckboxes(subj, '');
            }
        },

        toggleSelectAllPracticeLessons: function(checked) {
            const checkboxes = document.querySelectorAll('input[name="p_lesson_chk"]');
            checkboxes.forEach(chk => chk.checked = checked);
        },

        startPracticeSession: function(e) {
            if (e) e.preventDefault();
            const subject = document.querySelector('input[name="p_subject"]:checked')?.value || 'all';
            const selectedChks = Array.from(document.querySelectorAll('input[name="p_lesson_chk"]:checked')).map(chk => chk.value);

            if (selectedChks.length === 0) {
                alert('Vui lòng chọn ít nhất 1 bài học để luyện tập.');
                return;
            }

            const type = document.getElementById('p_type')?.value || 'all';
            const cognitiveLevel = document.getElementById('p_level')?.value || 'all';
            const count = parseInt(document.getElementById('p_count')?.value || '20', 10);
            const mode = document.getElementById('p_mode')?.value || 'study';

            const session = window.AtlasPracticeEngine.startSession({
                subject: subject,
                lessonIds: selectedChks,
                type: type,
                cognitiveLevel: cognitiveLevel,
                count: count,
                mode: mode
            });

            if (session.questions.length === 0) {
                alert('Không tìm thấy câu hỏi nào phù hợp với bộ lọc bạn chọn. Vui lòng mở rộng tiêu chí!');
                return;
            }

            this.renderPracticeSession(session);
        },

        renderPracticeSession: function(session) {
            const q = session.getCurrentQuestion();
            if (!q) {
                this.renderRoot(`<div class="alert alert-info">Bài luyện tập đã kết thúc hoặc không có câu hỏi.</div>`);
                return;
            }

            this.setPageTitle(`Luyện tập – Câu ${session.currentIndex + 1}/${session.questions.length}`);
            const isAnswered = (session.userAnswers[q.id] !== undefined);
            const userAnswer = session.userAnswers[q.id];
            const isStudyMode = (session.config.mode === 'study');
            const grade = isAnswered ? window.AtlasQuestionEngine.gradeQuestion(q, userAnswer) : null;
            const isFlagged = session.flagged.has(q.id);

            let html = `
            <div style="max-width: 900px; margin: 0 auto;">
                <!-- Header navigation bar -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <button class="btn btn-outline btn-sm" onclick="if(confirm('Bạn có chắc muốn thoát buổi luyện tập?')) AtlasRouter.navigate('/practice?new=1');">
                        ← Thoát luyện tập
                    </button>
                    <div>
                        <span class="badge ${session.config.mode === 'study' ? 'badge-blue' : 'badge-gold'}">
                            ${session.config.mode === 'study' ? 'Chế độ Học tập' : 'Chế độ Kiểm tra'}
                        </span>
                    </div>
                </div>

                <!-- Main Question Card -->
                <div class="question-card ${isFlagged ? 'flagged' : ''}">
                    <div class="q-meta-bar">
                        <div class="q-meta-tags">
                            <span class="q-number-badge">Câu ${session.currentIndex + 1} / ${session.questions.length}</span>
                            <span class="badge ${q.subject === 'history' ? 'badge-history' : 'badge-geo'}">${q.subject === 'history' ? 'Lịch sử' : 'Địa lí'}</span>
                            <span class="badge badge-neutral">${{
                                recognition: 'Nhận biết',
                                understanding: 'Thông hiểu',
                                application: 'Vận dụng',
                                high_application: 'Vận dụng cao'
                            }[q.cognitiveLevel] || q.cognitiveLevel}</span>
                            <span style="font-size: 12px; color: var(--text-muted);">${q.lessonTitle}</span>
                        </div>
                        <div>
                            <button class="flag-btn ${isFlagged ? 'active' : ''}" onclick="AtlasApp.togglePracticeFlag('${q.id}');">
                                ${isFlagged ? '★ Đã đánh dấu' : '☆ Đánh dấu xem lại'}
                            </button>
                        </div>
                    </div>

                    <!-- Question Stem -->
                    <div class="q-stem">${q.question}</div>

                    <!-- Chart if present -->
                    ${q.chart ? `
                        <div class="question-chart-wrapper">
                            <img src="${q.chart}" alt="Biểu đồ minh họa" class="question-chart-img" onerror="this.style.display='none'">
                        </div>
                    ` : ''}

                    <!-- Options / Inputs -->
                    ${q.type === 'single_choice' ? this.renderPracticeMCQOptions(q, userAnswer, isStudyMode && isAnswered, grade) : this.renderPracticeTFOptions(q, userAnswer, isStudyMode && isAnswered, grade)}

                    <!-- Explanation Box in Study Mode (if answered) -->
                    ${(isStudyMode && isAnswered) ? `
                        <div class="explanation-box">
                            <div class="explanation-title" style="color: ${grade.isCorrect ? 'var(--success)' : 'var(--danger)'};">
                                ${grade.isCorrect ? '✓ CHÍNH XÁC!' : `✗ CHƯA CHÍNH XÁC (Đáp án đúng: ${q.answerLetter})`}
                            </div>
                            <div class="explanation-text">${q.explanation}</div>
                            ${q.textbookRef ? `<div class="textbook-cite">${q.textbookRef}</div>` : ''}
                            ${!grade.isCorrect ? `
                                <div style="margin-top: 10px;">
                                    <button class="btn btn-outline btn-sm" onclick="AtlasStorage.addMistake(AtlasQuestionEngine.getQuestionById('${q.id}')); alert('Đã lưu câu hỏi vào Sổ câu sai!');">
                                        📕 Lưu vào Sổ câu sai
                                    </button>
                                </div>
                            ` : ''}
                        </div>
                    ` : ''}
                </div>

                <!-- Navigation Controls -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                    <button class="btn btn-outline" onclick="AtlasApp.practicePrev()" ${session.currentIndex === 0 ? 'disabled' : ''}>
                        ← Câu trước
                    </button>
                    <div>
                        ${session.currentIndex < session.questions.length - 1 ? `
                            <button class="btn btn-primary" onclick="AtlasApp.practiceNext()">Câu tiếp theo →</button>
                        ` : `
                            <button class="btn btn-success" onclick="AtlasApp.practiceSubmit()">Nộp bài luyện tập ✓</button>
                        `}
                    </div>
                </div>

                <!-- Question Palette (Grid of numbers) -->
                <div class="card">
                    <div style="font-weight: 700; font-size: 14px; margin-bottom: 8px;">Danh sách câu hỏi:</div>
                    <div class="q-palette-grid">
                        ${session.questions.map((item, idx) => {
                            const ans = session.userAnswers[item.id] !== undefined;
                            const flg = session.flagged.has(item.id);
                            const active = (idx === session.currentIndex);
                            return `
                            <button class="q-palette-btn ${active ? 'active' : ''} ${ans ? 'answered' : ''} ${flg ? 'flagged' : ''}" onclick="AtlasApp.practiceJumpTo(${idx})">
                                ${idx + 1}
                            </button>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
            `;

            this.renderRoot(html);
        },

        renderPracticeMCQOptions: function(q, userAnswer, showResults, grade) {
            const opts = q.options || [];
            const letters = ['A', 'B', 'C', 'D'];

            return `
            <div class="options-list">
                ${opts.map((opt, idx) => {
                    let itemClass = '';
                    if (userAnswer !== undefined && Number(userAnswer) === idx) {
                        itemClass += ' selected';
                    }
                    if (showResults) {
                        if (idx === q.answer) itemClass += ' correct';
                        else if (Number(userAnswer) === idx && !grade.isCorrect) itemClass += ' incorrect';
                    }
                    return `
                    <div class="option-item ${itemClass}" onclick="AtlasApp.selectPracticeMCQOption(${idx})">
                        <div class="option-letter">${letters[idx]}</div>
                        <div class="option-text">${opt}</div>
                    </div>
                    `;
                }).join('')}
            </div>
            `;
        },

        renderPracticeTFOptions: function(q, userAnswer = {}, showResults, grade) {
            const statements = q.statements || [];
            userAnswer = userAnswer || {};

            return `
            ${q.passage ? `<div class="tf-passage-box">"${q.passage}"</div>` : ''}
            <table class="tf-statements-table">
                <thead>
                    <tr>
                        <th>Nhận định</th>
                        <th style="width: 70px; text-align: center;">ĐÚNG</th>
                        <th style="width: 70px; text-align: center;">SAI</th>
                    </tr>
                </thead>
                <tbody>
                    ${statements.map(st => {
                        const val = userAnswer[st.id];
                        let rowStatus = '';
                        if (showResults && grade && grade.details && grade.details[st.id]) {
                            rowStatus = grade.details[st.id].isCorrect ? 'background: #ecfdf5;' : 'background: #fef2f2;';
                        }
                        return `
                        <tr style="${rowStatus}">
                            <td>
                                <strong>${st.id})</strong> ${st.text}
                                ${showResults ? `<div style="font-size: 12px; color: var(--text-muted); margin-top: 3px;"><em>${st.explanation || ''}</em></div>` : ''}
                            </td>
                            <td class="tf-radio-cell">
                                <div class="tf-radio-btn ${val === true ? 'selected-true' : ''}" onclick="AtlasApp.selectPracticeTFOption('${st.id}', true)">Đ</div>
                            </td>
                            <td class="tf-radio-cell">
                                <div class="tf-radio-btn ${val === false ? 'selected-false' : ''}" onclick="AtlasApp.selectPracticeTFOption('${st.id}', false)">S</div>
                            </td>
                        </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
            `;
        },

        selectPracticeMCQOption: function(optIdx) {
            const session = window.AtlasPracticeEngine.getSession();
            if (!session) return;
            const q = session.getCurrentQuestion();
            if (!q) return;

            session.setAnswer(q.id, optIdx);
            this.renderPracticeSession(session);
        },

        selectPracticeTFOption: function(subId, isTrue) {
            const session = window.AtlasPracticeEngine.getSession();
            if (!session) return;
            const q = session.getCurrentQuestion();
            if (!q) return;

            const currentAns = Object.assign({}, session.userAnswers[q.id] || {});
            currentAns[subId] = isTrue;
            session.setAnswer(q.id, currentAns);
            this.renderPracticeSession(session);
        },

        togglePracticeFlag: function(qId) {
            const session = window.AtlasPracticeEngine.getSession();
            if (!session) return;
            session.toggleFlag(qId);
            this.renderPracticeSession(session);
        },

        practiceNext: function() {
            const session = window.AtlasPracticeEngine.getSession();
            if (session && session.next()) this.renderPracticeSession(session);
        },

        practicePrev: function() {
            const session = window.AtlasPracticeEngine.getSession();
            if (session && session.prev()) this.renderPracticeSession(session);
        },

        practiceJumpTo: function(idx) {
            const session = window.AtlasPracticeEngine.getSession();
            if (session && session.jumpTo(idx)) this.renderPracticeSession(session);
        },

        practiceSubmit: function() {
            const session = window.AtlasPracticeEngine.getSession();
            if (!session) return;
            if (!confirm('Bạn có chắc chắn muốn nộp bài luyện tập và xem tổng kết?')) return;

            const res = session.submit();
            this.renderPracticeResult(res);
        },

        renderPracticeResult: function(res) {
            this.setPageTitle('Kết quả luyện tập');
            const html = `
            <div class="card" style="max-width: 800px; margin: 0 auto; text-align: center; padding: 32px 24px;">
                <div style="font-size: 54px; margin-bottom: 12px;">🎉</div>
                <h2 style="font-size: 24px; color: var(--primary-navy); margin-bottom: 8px;">Hoàn thành bài luyện tập!</h2>
                <div style="font-size: 42px; font-weight: 800; color: ${res.score10 >= 8 ? 'var(--success)' : (res.score10 >= 5 ? 'var(--accent-gold)' : 'var(--danger)')}; margin-bottom: 12px;">
                    ${res.score10} / 10
                </div>
                <p style="font-size: 16px; margin-bottom: 24px;">
                    Đúng: <strong style="color: var(--success);">${res.correctCount}</strong> câu • Sai: <strong style="color: var(--danger);">${res.wrongCount}</strong> câu • Thời gian: <strong>${Math.round(res.elapsedSeconds / 60)} phút ${res.elapsedSeconds % 60}s</strong>
                </p>

                <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 28px;">
                    <a href="#/practice?new=1" class="btn btn-primary">Luyện bài mới 🚀</a>
                    <a href="#/mistakes" class="btn btn-outline" style="border-color: var(--history-border); color: var(--history-red);">Xem sổ câu sai 📕</a>
                    <a href="#/" class="btn btn-outline">Về trang chủ</a>
                </div>

                <div style="text-align: left; border-top: 1px solid var(--border-color); padding-top: 24px;">
                    <h3 style="font-size: 17px; margin-bottom: 16px;">Chi tiết từng câu hỏi:</h3>
                    ${res.detailedResults.map(item => `
                        <div style="padding: 12px 16px; border: 1px solid var(--border-color); border-radius: var(--radius-md); margin-bottom: 10px; background: ${item.grade.isCorrect ? '#ecfdf5' : '#fef2f2'};">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                                <span style="font-weight: 700; color: var(--primary-navy);">Câu ${item.index}: ${item.question.question}</span>
                                <span class="badge ${item.grade.isCorrect ? 'badge-geo' : 'badge-history'}">
                                    ${item.grade.isCorrect ? 'Đúng' : 'Sai'}
                                </span>
                            </div>
                            <div style="font-size: 13px; color: var(--text-secondary); margin-top: 6px;">
                                <strong>Giải thích:</strong> ${item.question.explanation}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            `;
            this.renderRoot(html);
        }
    };

    window.AtlasApp = AtlasApp;

})(window);


// ==========================================
// VIEW 6: EXAM MATRIX CREATOR & SIMULATION SETUP
// ==========================================
AtlasApp.matrixState = {
    selectedLessons: [],
    mode: 'auto', // 'auto' or 'custom'
    totalQuestions: 28,
    totalEssays: 2,
    timeMinutes: 45,
    customLevels: { recognition: 30, understanding: 35, application: 25, high_application: 10 },
    customTypes: { single_choice: 75, true_false: 25 },
    currentMatrixConfig: null,
    previewGrid: null,
    generatedExams: null
};

AtlasApp.viewMatrix = function(queryParams = {}) {
    this.setPageTitle('Tạo đề thi & Thiết lập ma trận');
    const curriculum = window.ATLAS_CURRICULUM;
    const preSubject = queryParams.subject || 'all';

    // Initialize selected lessons if empty
    if (this.matrixState.selectedLessons.length === 0) {
        if (preSubject === 'history') {
            this.matrixState.selectedLessons = curriculum.lessons.filter(l => l.subject === 'history').slice(0, 4).map(l => l.id);
        } else if (preSubject === 'geography') {
            this.matrixState.selectedLessons = curriculum.lessons.filter(l => l.subject === 'geography').slice(0, 4).map(l => l.id);
        } else {
            // First 2 history + first 2 geography
            const h = curriculum.lessons.filter(l => l.subject === 'history').slice(0, 2).map(l => l.id);
            const g = curriculum.lessons.filter(l => l.subject === 'geography').slice(0, 2).map(l => l.id);
            this.matrixState.selectedLessons = [...h, ...g];
        }
    }

    this.recalculateMatrix();
    this.renderMatrixUI();
};

AtlasApp.recalculateMatrix = function() {
    if (this.matrixState.mode === 'auto') {
        this.matrixState.currentMatrixConfig = window.AtlasMatrixEngine.generateAutoMatrixConfig(
            this.matrixState.selectedLessons,
            this.matrixState.totalQuestions,
            this.matrixState.totalEssays
        );
    } else {
        this.matrixState.currentMatrixConfig = window.AtlasMatrixEngine.generateCustomMatrixConfig(
            this.matrixState.selectedLessons,
            {
                levels: this.matrixState.customLevels,
                types: this.matrixState.customTypes
            },
            this.matrixState.totalQuestions,
            this.matrixState.totalEssays
        );
    }
    this.matrixState.previewGrid = window.AtlasMatrixEngine.buildDetailedMatrixGrid(this.matrixState.currentMatrixConfig);
};

AtlasApp.renderMatrixUI = function() {
    const curriculum = window.ATLAS_CURRICULUM;
    const state = this.matrixState;
    const adequacy = window.AtlasMatrixEngine.checkBankAdequacy(state.currentMatrixConfig);
    const grid = state.previewGrid;

    let html = `
    <div style="max-width: 1100px; margin: 0 auto;">
        <!-- Header banner -->
        <div class="card" style="background: linear-gradient(135deg, #0f172a, #1e3a8a); color: white; margin-bottom: 24px;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                <div>
                    <h1 style="color: white; font-size: 22px; margin-bottom: 6px;">Hệ thống tạo đề thi chuẩn GDPT 2018</h1>
                    <p style="color: #cbd5e1; margin: 0; font-size: 14px;">Xây dựng cấu trúc đề thi 2 phần (Phần I Trắc nghiệm 7.0đ, Phần II Tự luận 3.0đ) theo ma trận tự động hoặc tùy chỉnh.</p>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button class="btn btn-gold btn-sm" onclick="AtlasApp.generateAndStartExam()">Bắt đầu làm bài thi trực tuyến ⏱️</button>
                    <button class="btn btn-outline btn-sm" style="color: white; border-color: rgba(255,255,255,0.4);" onclick="AtlasApp.exportMatrixExamDocx()">Xuất Word (.docx) 📄</button>
                    <button class="btn btn-outline btn-sm" style="color: white; border-color: rgba(255,255,255,0.4);" onclick="AtlasApp.printMatrixExam()">In A4 / PDF 🖨️</button>
                </div>
            </div>
        </div>

        <!-- STEP 1: SELECT LESSONS -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">1. Chọn phạm vi bài học thi thử (Đã chọn: ${state.selectedLessons.length} bài)</h3>
                <div style="display: flex; gap: 8px;">
                    <button type="button" class="btn btn-outline btn-sm" onclick="AtlasApp.matrixSelectAllLessons(true)">Chọn tất cả 38 bài</button>
                    <button type="button" class="btn btn-outline btn-sm" onclick="AtlasApp.matrixSelectAllLessons(false)">Bỏ chọn tất cả</button>
                    <button type="button" class="btn btn-outline btn-sm" onclick="AtlasApp.matrixSelectSubjectLessons('history')">Chỉ Lịch sử</button>
                    <button type="button" class="btn btn-outline btn-sm" onclick="AtlasApp.matrixSelectSubjectLessons('geography')">Chỉ Địa lí</button>
                </div>
            </div>

            <div style="max-height: 220px; overflow-y: auto; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 12px; background: #f8fafc; display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 6px;">
                ${curriculum.lessons.map(l => `
                    <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;">
                        <input type="checkbox" value="${l.id}" ${state.selectedLessons.includes(l.id) ? 'checked' : ''} onchange="AtlasApp.matrixToggleLesson('${l.id}')">
                        <span style="font-weight: 700; color: ${l.subject === 'history' ? 'var(--history-red)' : 'var(--geo-green)'};">[${l.subject === 'history' ? 'Sử' : 'Địa'} ${l.lessonNum}]</span>
                        <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${l.title}</span>
                    </label>
                `).join('')}
            </div>
        </div>

        <!-- STEP 2: MATRIX MODE & PERCENTAGE CONFIGURATION -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">2. Phương thức tạo ma trận & Cấu trúc câu hỏi</h3>
                <div style="display: flex; gap: 10px;">
                    <button class="btn btn-sm ${state.mode === 'auto' ? 'btn-primary' : 'btn-outline'}" onclick="AtlasApp.setMatrixMode('auto')">Chế độ A: Tự động cân đối</button>
                    <button class="btn btn-sm ${state.mode === 'custom' ? 'btn-primary' : 'btn-outline'}" onclick="AtlasApp.setMatrixMode('custom')">Chế độ B: Tùy chỉnh tỷ lệ %</button>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 20px;">
                <div>
                    <label style="display: block; font-weight: 700; font-size: 13px; margin-bottom: 4px;">Tổng số câu Phần I (Trắc nghiệm):</label>
                    <select class="form-select" style="width: 100%; padding: 7px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);" onchange="AtlasApp.setMatrixTotalQuestions(this.value)">
                        <option value="20" ${state.totalQuestions == 20 ? 'selected' : ''}>20 câu</option>
                        <option value="28" ${state.totalQuestions == 28 ? 'selected' : ''}>28 câu (Chuẩn thi học kì)</option>
                        <option value="40" ${state.totalQuestions == 40 ? 'selected' : ''}>40 câu (Đề lớn)</option>
                    </select>
                </div>

                <div>
                    <label style="display: block; font-weight: 700; font-size: 13px; margin-bottom: 4px;">Số câu Phần II (Tự luận):</label>
                    <select class="form-select" style="width: 100%; padding: 7px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);" onchange="AtlasApp.setMatrixTotalEssays(this.value)">
                        <option value="1" ${state.totalEssays == 1 ? 'selected' : ''}>1 câu (3.0 điểm)</option>
                        <option value="2" ${state.totalEssays == 2 ? 'selected' : ''}>2 câu (1.5đ + 1.5đ)</option>
                        <option value="3" ${state.totalEssays == 3 ? 'selected' : ''}>3 câu (1.0đ + 1.0đ + 1.0đ)</option>
                    </select>
                </div>

                <div>
                    <label style="display: block; font-weight: 700; font-size: 13px; margin-bottom: 4px;">Thời gian làm bài:</label>
                    <select class="form-select" style="width: 100%; padding: 7px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);" onchange="AtlasApp.matrixState.timeMinutes = parseInt(this.value, 10)">
                        <option value="45" ${state.timeMinutes == 45 ? 'selected' : ''}>45 phút (1 tiết)</option>
                        <option value="60" ${state.timeMinutes == 60 ? 'selected' : ''}>60 phút</option>
                        <option value="90" ${state.timeMinutes == 90 ? 'selected' : ''}>90 phút (Thi học kì lớn)</option>
                    </select>
                </div>
            </div>

            <!-- CUSTOM PERCENTAGE SLIDERS (IF MODE B) -->
            ${state.mode === 'custom' ? `
            <div style="background: #f8fafc; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 18px; margin-bottom: 16px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                    <h4 style="margin: 0; font-size: 15px; color: var(--primary-navy);">⚙️ Tùy chỉnh phần trăm mức độ nhận thức (Thuật toán Hamilton-Hare):</h4>
                    <div>
                        <span id="level-percent-total-badge" class="badge ${(state.customLevels.recognition + state.customLevels.understanding + state.customLevels.application + state.customLevels.high_application === 100) ? 'badge-geo' : 'badge-history'}">
                            Tổng tỉ lệ: ${state.customLevels.recognition + state.customLevels.understanding + state.customLevels.application + state.customLevels.high_application}%
                        </span>
                        <button type="button" class="btn btn-outline btn-sm" onclick="AtlasApp.normalizeCustomLevelPercentages()" style="margin-left: 6px;">Tự động chuẩn hóa 100%</button>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px;">
                    <div class="slider-group">
                        <div class="slider-header">
                            <span>Nhận biết:</span>
                            <strong id="lbl-rec">${state.customLevels.recognition}% (${state.currentMatrixConfig.levelsCount.recognition} câu)</strong>
                        </div>
                        <input type="range" class="custom-range" min="0" max="60" step="5" value="${state.customLevels.recognition}" oninput="AtlasApp.updateCustomLevel('recognition', this.value)">
                    </div>

                    <div class="slider-group">
                        <div class="slider-header">
                            <span>Thông hiểu:</span>
                            <strong id="lbl-und">${state.customLevels.understanding}% (${state.currentMatrixConfig.levelsCount.understanding} câu)</strong>
                        </div>
                        <input type="range" class="custom-range" min="0" max="60" step="5" value="${state.customLevels.understanding}" oninput="AtlasApp.updateCustomLevel('understanding', this.value)">
                    </div>

                    <div class="slider-group">
                        <div class="slider-header">
                            <span>Vận dụng:</span>
                            <strong id="lbl-app">${state.customLevels.application}% (${state.currentMatrixConfig.levelsCount.application} câu)</strong>
                        </div>
                        <input type="range" class="custom-range" min="0" max="60" step="5" value="${state.customLevels.application}" oninput="AtlasApp.updateCustomLevel('application', this.value)">
                    </div>

                    <div class="slider-group">
                        <div class="slider-header">
                            <span>Vận dụng cao:</span>
                            <strong id="lbl-hap">${state.customLevels.high_application}% (${state.currentMatrixConfig.levelsCount.high_application} câu)</strong>
                        </div>
                        <input type="range" class="custom-range" min="0" max="40" step="5" value="${state.customLevels.high_application}" oninput="AtlasApp.updateCustomLevel('high_application', this.value)">
                    </div>
                </div>
            </div>
            ` : ''}

            <!-- BANK ADEQUACY WARNING (IF ANY) -->
            ${!adequacy.adequate ? `
                <div class="alert alert-warning">
                    <div>
                        <strong>⚠️ Cảnh báo khả năng đáp ứng của ngân hàng câu hỏi:</strong>
                        <ul style="margin: 6px 0 0 16px;">
                            ${adequacy.issues.map(iss => `<li>${iss.message}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            ` : `
                <div class="alert alert-success" style="padding: 10px 16px; margin-bottom: 16px;">
                    ✓ Ngân hàng câu hỏi đáp ứng đầy đủ 100% cấu trúc ma trận yêu cầu (${adequacy.totalAvailable} câu trắc nghiệm và ${adequacy.totalAvailableEssays} câu tự luận trong phạm vi đã chọn).
                </div>
            `}
        </div>

        <!-- STEP 3: 2D MATRIX PREVIEW TABLE -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">3. Bảng ma trận đề thi chi tiết (Phần I + Phần II)</h3>
                <span class="badge badge-neutral">Tổng điểm: 10,0 điểm</span>
            </div>

            <div style="overflow-x: auto;">
                <table class="matrix-table">
                    <thead>
                        <tr>
                            <th rowspan="2" style="text-align: left;">Môn & Bài học</th>
                            <th colspan="4">Mức độ nhận thức (Phần I)</th>
                            <th rowspan="2">Tổng câu TN</th>
                            <th rowspan="2">Điểm Phần I</th>
                            <th rowspan="2">Phần II (Tự luận)</th>
                            <th rowspan="2">Tổng điểm</th>
                        </tr>
                        <tr>
                            <th>Nhận biết</th>
                            <th>Thông hiểu</th>
                            <th>Vận dụng</th>
                            <th>Vận dụng cao</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${grid.rows.map(r => `
                            <tr>
                                <td class="align-left">
                                    <span style="font-weight: 700; color: ${r.subject === 'history' ? 'var(--history-red)' : 'var(--geo-green)'};">[${r.subject === 'history' ? 'Sử' : 'Địa'}]</span>
                                    ${r.lessonTitle}
                                </td>
                                <td>${r.levels.recognition || 0}</td>
                                <td>${r.levels.understanding || 0}</td>
                                <td>${r.levels.application || 0}</td>
                                <td>${r.levels.high_application || 0}</td>
                                <td><strong>${r.totalQuestions}</strong></td>
                                <td>${r.totalPoints}đ</td>
                                <td>—</td>
                                <td>${r.totalPoints}đ</td>
                            </tr>
                        `).join('')}
                        <tr style="background: #eff6ff; font-weight: 700;">
                            <td class="align-left">PHẦN II. TỰ LUẬN (Tự chọn bài)</td>
                            <td>—</td>
                            <td>—</td>
                            <td>—</td>
                            <td>—</td>
                            <td>—</td>
                            <td>—</td>
                            <td><strong>${state.totalEssays} câu</strong></td>
                            <td>3,0đ</td>
                        </tr>
                        <tr style="background: #f1f5f9; font-weight: 800; font-size: 14px;">
                            <td class="align-left">TỔNG TOÀN ĐỀ THI</td>
                            <td>${state.currentMatrixConfig.levelsCount.recognition}</td>
                            <td>${state.currentMatrixConfig.levelsCount.understanding}</td>
                            <td>${state.currentMatrixConfig.levelsCount.application}</td>
                            <td>${state.currentMatrixConfig.levelsCount.high_application}</td>
                            <td>${grid.totalQuestions} câu</td>
                            <td>7,0đ</td>
                            <td>${state.totalEssays} câu</td>
                            <td>10,0đ</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- ACTION BUTTONS -->
            <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 18px; flex-wrap: wrap;">
                <button class="btn btn-outline" onclick="AtlasApp.exportMatrixMultipleCodesDocx()">
                    📦 Xuất 4 mã đề Word (101, 102, 103, 104)
                </button>
                <button class="btn btn-outline" onclick="AtlasApp.printMatrixExam()">
                    🖨️ In A4 / Lưu PDF
                </button>
                <button class="btn btn-gold" onclick="AtlasApp.exportMatrixExamDocx()">
                    📄 Xuất file Word (.docx)
                </button>
                <button class="btn btn-primary btn-lg" onclick="AtlasApp.generateAndStartExam()">
                    Bắt đầu làm bài thi thử ngay 🚀
                </button>
            </div>
        </div>
    </div>
    `;

    this.renderRoot(html);
};

AtlasApp.matrixToggleLesson = function(lId) {
    const list = this.matrixState.selectedLessons;
    const idx = list.indexOf(lId);
    if (idx >= 0) list.splice(idx, 1);
    else list.push(lId);
    this.recalculateMatrix();
    this.renderMatrixUI();
};

AtlasApp.matrixSelectAllLessons = function(selectAll) {
    if (selectAll) {
        this.matrixState.selectedLessons = window.ATLAS_CURRICULUM.lessons.map(l => l.id);
    } else {
        this.matrixState.selectedLessons = [];
    }
    this.recalculateMatrix();
    this.renderMatrixUI();
};

AtlasApp.matrixSelectSubjectLessons = function(subj) {
    this.matrixState.selectedLessons = window.ATLAS_CURRICULUM.lessons.filter(l => l.subject === subj).map(l => l.id);
    this.recalculateMatrix();
    this.renderMatrixUI();
};

AtlasApp.setMatrixMode = function(mode) {
    this.matrixState.mode = mode;
    this.recalculateMatrix();
    this.renderMatrixUI();
};

AtlasApp.setMatrixTotalQuestions = function(val) {
    this.matrixState.totalQuestions = parseInt(val, 10);
    this.recalculateMatrix();
    this.renderMatrixUI();
};

AtlasApp.setMatrixTotalEssays = function(val) {
    this.matrixState.totalEssays = parseInt(val, 10);
    this.recalculateMatrix();
    this.renderMatrixUI();
};

AtlasApp.updateCustomLevel = function(key, val) {
    this.matrixState.customLevels[key] = parseInt(val, 10);
    this.recalculateMatrix();
    this.renderMatrixUI();
};

AtlasApp.normalizeCustomLevelPercentages = function() {
    const lvls = this.matrixState.customLevels;
    const sum = lvls.recognition + lvls.understanding + lvls.application + lvls.high_application;
    if (sum === 0) {
        this.matrixState.customLevels = { recognition: 30, understanding: 35, application: 25, high_application: 10 };
    } else {
        const quotas = window.AtlasMatrixEngine.distributeQuota([
            { key: 'recognition', ratio: lvls.recognition },
            { key: 'understanding', ratio: lvls.understanding },
            { key: 'application', ratio: lvls.application },
            { key: 'high_application', ratio: lvls.high_application }
        ], 100);
        this.matrixState.customLevels = quotas;
    }
    this.recalculateMatrix();
    this.renderMatrixUI();
};

AtlasApp.generateAndStartExam = function() {
    if (this.matrixState.selectedLessons.length === 0) {
        alert('Vui lòng chọn ít nhất 1 bài học để tạo đề thi.');
        return;
    }
    this.recalculateMatrix();
    const examInstance = window.AtlasMatrixEngine.generateExam(this.matrixState.currentMatrixConfig, {
        code: '101',
        title: 'ĐỀ THI THỬ LỊCH SỬ – ĐỊA LÍ 9 (GDPT 2018)',
        timeMinutes: this.matrixState.timeMinutes
    });

    this.activeExam = examInstance;
    this.activeExamSession = window.AtlasExamEngine.startExam(examInstance);
    window.AtlasRouter.navigate('/exam');
};

AtlasApp.exportMatrixExamDocx = function() {
    if (this.matrixState.selectedLessons.length === 0) {
        alert('Vui lòng chọn bài học trước khi xuất đề.');
        return;
    }
    this.recalculateMatrix();
    const examInstance = window.AtlasMatrixEngine.generateExam(this.matrixState.currentMatrixConfig, {
        code: '101',
        title: 'ĐỀ THI THỬ LỊCH SỬ – ĐỊA LÍ 9',
        timeMinutes: this.matrixState.timeMinutes
    });
    window.AtlasExportEngine.exportExamDocx(examInstance, 'with_answers');
};

AtlasApp.printMatrixExam = function() {
    if (this.matrixState.selectedLessons.length === 0) {
        alert('Vui lòng chọn bài học trước khi in đề.');
        return;
    }
    this.recalculateMatrix();
    const examInstance = window.AtlasMatrixEngine.generateExam(this.matrixState.currentMatrixConfig, {
        code: '101',
        title: 'ĐỀ THI THỬ LỊCH SỬ – ĐỊA LÍ 9',
        timeMinutes: this.matrixState.timeMinutes
    });
    window.AtlasExportEngine.printExam(examInstance, 'with_answers');
};

AtlasApp.exportMatrixMultipleCodesDocx = function() {
    if (this.matrixState.selectedLessons.length === 0) {
        alert('Vui lòng chọn bài học trước khi xuất đề.');
        return;
    }
    this.recalculateMatrix();
    window.AtlasExportEngine.exportMultipleCodesDocx(this.matrixState.currentMatrixConfig, 4);
};

// ==========================================
// VIEW 7: EXAM SIMULATION (ACTIVE TEST)
// ==========================================
AtlasApp.viewExam = function() {
    const session = this.activeExamSession;
    if (!session) {
        window.AtlasRouter.navigate('/matrix');
        return;
    }
    this.setPageTitle(`Phòng thi thử – Mã đề ${session.exam.code}`);

    // Start countdown timer if not yet running
    if (!session.timerInterval) {
        session.startTimer(
            (secondsRemaining) => {
                const el = document.getElementById('exam-countdown-timer');
                if (el) {
                    const m = Math.floor(secondsRemaining / 60);
                    const s = secondsRemaining % 60;
                    el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
                    if (secondsRemaining <= 300) el.classList.add('urgent');
                }
            },
            () => {
                alert('HẾT THỜI GIAN LÀM BÀI! Hệ thống sẽ tự động nộp bài và chấm điểm.');
                AtlasApp.finishExamAndShowResult();
            }
        );
    }

    const exam = session.exam;
    const mcqs = exam.mcqs || [];
    const tfs = exam.tfs || [];
    const essays = exam.essays || [];

    let html = `
    <div style="max-width: 960px; margin: 0 auto; padding-bottom: 70px;">
        <!-- Exam Top Header -->
        <div class="card" style="position: sticky; top: var(--header-height); z-index: 70; background: white; margin-bottom: 16px; border-bottom: 2px solid var(--primary-navy);">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                <div>
                    <h2 style="font-size: 17px; margin: 0; color: var(--primary-navy);">${exam.title}</h2>
                    <span style="font-size: 13px; color: var(--text-muted);">MÃ ĐỀ: <strong>${exam.code}</strong> • ${mcqs.length + tfs.length} câu TN + ${essays.length} câu TL</span>
                </div>
                <div style="display: flex; align-items: center; gap: 14px;">
                    <div id="exam-countdown-timer" class="timer-badge">
                        ${String(exam.timeMinutes).padStart(2, '0')}:00
                    </div>
                    <button class="btn btn-success btn-sm" onclick="AtlasApp.confirmSubmitExam()">Nộp bài thi ✓</button>
                </div>
            </div>
        </div>

        <!-- PART I: MULTIPLE CHOICE QUESTIONS -->
        <div style="margin-bottom: 24px;">
            <div style="background: var(--navy-subtle); border-left: 4px solid var(--primary-navy); padding: 12px 18px; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 16px;">
                <h3 style="font-size: 16px; color: var(--primary-navy); margin: 0;">PHẦN I. CÂU HỎI TRẮC NGHIỆM (7,0 điểm)</h3>
                <div style="font-size: 12.5px; color: var(--text-secondary); margin-top: 2px;">Gồm câu hỏi 4 lựa chọn và trắc nghiệm Đúng/Sai theo ngữ liệu.</div>
            </div>

            <!-- Single choice questions -->
            ${mcqs.map((q, idx) => {
                const uAns = session.userAnswers[q.id];
                const isFlg = session.flagged.has(q.id);
                return `
                <div id="exam-q-${q.id}" class="question-card ${isFlg ? 'flagged' : ''}">
                    <div class="q-meta-bar">
                        <div class="q-meta-tags">
                            <span class="q-number-badge">Câu ${idx + 1}</span>
                            <span class="badge ${q.subject === 'history' ? 'badge-history' : 'badge-geo'}">${q.subject === 'history' ? 'Lịch sử' : 'Địa lí'}</span>
                        </div>
                        <button class="flag-btn ${isFlg ? 'active' : ''}" onclick="AtlasApp.toggleExamFlag('${q.id}')">
                            ${isFlg ? '★ Đã đánh dấu' : '☆ Đánh dấu'}
                        </button>
                    </div>

                    <div class="q-stem">${q.question}</div>

                    ${q.chart ? `
                        <div class="question-chart-wrapper">
                            <img src="${q.chart}" alt="Biểu đồ" class="question-chart-img" onerror="this.style.display='none'">
                        </div>
                    ` : ''}

                    <div class="options-list">
                        ${(q.options || []).map((opt, oIdx) => `
                            <div class="option-item ${uAns !== undefined && Number(uAns) === oIdx ? 'selected' : ''}" onclick="AtlasApp.selectExamMCQ('${q.id}', ${oIdx})">
                                <div class="option-letter">${['A', 'B', 'C', 'D'][oIdx]}</div>
                                <div class="option-text">${opt}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                `;
            }).join('')}

            <!-- True/False questions -->
            ${tfs.map((tf, idx) => {
                const qNum = mcqs.length + idx + 1;
                const uAns = session.userAnswers[tf.id] || {};
                const isFlg = session.flagged.has(tf.id);
                return `
                <div id="exam-q-${tf.id}" class="question-card ${isFlg ? 'flagged' : ''}">
                    <div class="q-meta-bar">
                        <div class="q-meta-tags">
                            <span class="q-number-badge">Câu ${qNum} (Đúng / Sai)</span>
                            <span class="badge ${tf.subject === 'history' ? 'badge-history' : 'badge-geo'}">${tf.subject === 'history' ? 'Lịch sử' : 'Địa lí'}</span>
                        </div>
                        <button class="flag-btn ${isFlg ? 'active' : ''}" onclick="AtlasApp.toggleExamFlag('${tf.id}')">
                            ${isFlg ? '★ Đã đánh dấu' : '☆ Đánh dấu'}
                        </button>
                    </div>

                    <div class="q-stem">${tf.question || 'Đọc đoạn thông tin sau và xác định Đúng hoặc Sai cho mỗi nhận định a, b, c, d:'}</div>
                    ${tf.chart ? `
                        <div class="question-chart-wrapper">
                            <img src="${tf.chart}" alt="Biểu đồ" class="question-chart-img" onerror="this.style.display='none'">
                        </div>
                    ` : ''}
                    ${tf.passage ? `<div class="tf-passage-box">"${tf.passage}"</div>` : ''}

                    <table class="tf-statements-table">
                        <thead>
                            <tr>
                                <th>Nhận định</th>
                                <th style="width: 70px; text-align: center;">ĐÚNG</th>
                                <th style="width: 70px; text-align: center;">SAI</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${(tf.statements || []).map(st => `
                                <tr>
                                    <td><strong>${st.id})</strong> ${st.text}</td>
                                    <td class="tf-radio-cell">
                                        <div class="tf-radio-btn ${uAns[st.id] === true ? 'selected-true' : ''}" onclick="AtlasApp.selectExamTF('${tf.id}', '${st.id}', true)">Đ</div>
                                    </td>
                                    <td class="tf-radio-cell">
                                        <div class="tf-radio-btn ${uAns[st.id] === false ? 'selected-false' : ''}" onclick="AtlasApp.selectExamTF('${tf.id}', '${st.id}', false)">S</div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                `;
            }).join('')}
        </div>

        <!-- PART II: ESSAY QUESTIONS -->
        ${essays.length > 0 ? `
        <div style="margin-bottom: 24px;">
            <div style="background: #fef2f2; border-left: 4px solid var(--history-red); padding: 12px 18px; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 16px;">
                <h3 style="font-size: 16px; color: var(--history-red); margin: 0;">PHẦN II. CÂU HỎI TỰ LUẬN (3,0 điểm)</h3>
                <div style="font-size: 12.5px; color: var(--text-secondary); margin-top: 2px;">Thí sinh viết câu trả lời trực tiếp vào ô làm bài dưới đây.</div>
            </div>

            ${essays.map((es, idx) => `
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title" style="font-size: 15px;">Câu ${idx + 1} (${es.points || 1.5} điểm): ${es.title}</h4>
                        <span class="badge ${es.subject === 'history' ? 'badge-history' : 'badge-geo'}">${es.subject === 'history' ? 'Lịch sử' : 'Địa lí'}</span>
                    </div>
                    <p class="q-stem">${es.question}</p>
                    <div>
                        <label style="display: block; font-weight: 600; font-size: 13px; margin-bottom: 6px;">Bài làm của học sinh:</label>
                        <textarea class="form-textarea" style="width: 100%; min-height: 120px; padding: 12px; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-family: inherit; font-size: 14px;" placeholder="Nhập bài làm tự luận của bạn tại đây..." oninput="AtlasApp.updateExamEssayDraft('${es.id}', this.value)">${session.essayDrafts[es.id] || ''}</textarea>
                    </div>
                </div>
            `).join('')}
        </div>
        ` : ''}
    </div>
    `;

    this.renderRoot(html);
};

AtlasApp.selectExamMCQ = function(qId, optIdx) {
    const session = this.activeExamSession;
    if (!session) return;
    session.setAnswer(qId, optIdx);
    this.viewExam();
};

AtlasApp.selectExamTF = function(qId, subId, isTrue) {
    const session = this.activeExamSession;
    if (!session) return;
    const current = Object.assign({}, session.userAnswers[qId] || {});
    current[subId] = isTrue;
    session.setAnswer(qId, current);
    this.viewExam();
};

AtlasApp.toggleExamFlag = function(qId) {
    const session = this.activeExamSession;
    if (!session) return;
    session.toggleFlag(qId);
    this.viewExam();
};

AtlasApp.updateExamEssayDraft = function(essayId, text) {
    const session = this.activeExamSession;
    if (!session) return;
    session.setEssayDraft(essayId, text);
};

AtlasApp.confirmSubmitExam = function() {
    const session = this.activeExamSession;
    if (!session) return;
    const answeredCount = Object.keys(session.userAnswers).length;
    const totalObj = session.objectiveQuestions.length;

    let msg = `Bạn đã hoàn thành ${answeredCount} / ${totalObj} câu trắc nghiệm.`;
    if (answeredCount < totalObj) {
        msg += `\nVẫn còn ${totalObj - answeredCount} câu chưa trả lời. Bạn có chắc chắn muốn nộp bài ngay không?`;
    } else {
        msg += `\nBạn có chắc chắn muốn nộp bài thi để chấm điểm?`;
    }

    if (confirm(msg)) {
        this.finishExamAndShowResult();
    }
};

AtlasApp.finishExamAndShowResult = function() {
    const session = this.activeExamSession;
    if (!session) return;
    const results = session.submit();
    this.activeExamResults = results;
    window.AtlasRouter.navigate('/exam-result');
};

// ==========================================
// VIEW 8: EXAM RESULT & IN-DEPTH ANALYTICS
// ==========================================
AtlasApp.viewExamResult = function() {
    const res = this.activeExamResults;
    if (!res) {
        window.AtlasRouter.navigate('/matrix');
        return;
    }
    this.setPageTitle(`Kết quả thi thử – Mã đề ${res.code}`);

    const subHis = res.subjectStats.history || { total: 0, score: 0 };
    const subGeo = res.subjectStats.geography || { total: 0, score: 0 };
    const hisPercent = subHis.total > 0 ? Math.round((subHis.score / subHis.total) * 100) : 0;
    const geoPercent = subGeo.total > 0 ? Math.round((subGeo.score / subGeo.total) * 100) : 0;

    let html = `
    <div style="max-width: 960px; margin: 0 auto;">
        <!-- Top Score Summary Card -->
        <div class="card" style="text-align: center; padding: 32px 24px; background: linear-gradient(135deg, #1e3a8a, #0f172a); color: white; margin-bottom: 24px;">
            <div style="font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #cbd5e1; margin-bottom: 6px;">KẾT QUẢ BÀI THI CHÍNH THỨC</div>
            <h1 style="color: white; font-size: 22px; margin-bottom: 12px;">${res.title} (Mã đề: ${res.code})</h1>
            
            <div style="display: inline-flex; align-items: baseline; gap: 6px; margin: 10px 0 16px 0;">
                <span style="font-size: 58px; font-weight: 900; color: #fbbf24; line-height: 1;">${res.totalScore}</span>
                <span style="font-size: 22px; color: #cbd5e1;">/ 10 điểm</span>
            </div>

            <div style="display: flex; justify-content: center; gap: 24px; font-size: 14.5px; color: #e2e8f0; flex-wrap: wrap;">
                <div>Phần I (Trắc nghiệm): <strong>${res.part1Score} / 7,0đ</strong></div>
                <div>Phần II (Tự luận): <strong>${res.part2Score} / 3,0đ</strong></div>
                <div>Đúng: <strong>${res.correctCount} / ${res.totalQuestions}</strong> câu</div>
                <div>Thời gian: <strong>${Math.round(res.elapsedSeconds / 60)} phút ${res.elapsedSeconds % 60}s</strong></div>
            </div>

            <div style="margin-top: 24px; display: flex; justify-content: center; gap: 10px;">
                <button class="btn btn-gold btn-sm" onclick="AtlasApp.exportCurrentResultDocx()">Xuất file Word đề & đáp án (.docx) 📄</button>
                <button class="btn btn-outline btn-sm" style="color: white; border-color: rgba(255,255,255,0.4);" onclick="AtlasApp.printCurrentResult()">In A4 kèm đáp án 🖨️</button>
                <a href="#/matrix" class="btn btn-outline btn-sm" style="color: white; border-color: rgba(255,255,255,0.4);">Tạo đề thi mới 🔄</a>
            </div>
        </div>

        <!-- In-depth Performance Breakdown -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
            <!-- By Subject -->
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">📊 Kết quả theo phân môn</h3>
                </div>
                <div style="margin-bottom: 14px;">
                    <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 4px;">
                        <span style="color: var(--history-red);">Lịch sử 9:</span>
                        <span>${hisPercent}% (${subHis.score.toFixed(1)} / ${subHis.total.toFixed(1)}đ)</span>
                    </div>
                    <div style="height: 8px; background: #fee2e2; border-radius: 4px; overflow: hidden;">
                        <div style="width: ${hisPercent}%; height: 100%; background: var(--history-red);"></div>
                    </div>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 13px; font-weight: 600; margin-bottom: 4px;">
                        <span style="color: var(--geo-green);">Địa lí 9:</span>
                        <span>${geoPercent}% (${subGeo.score.toFixed(1)} / ${subGeo.total.toFixed(1)}đ)</span>
                    </div>
                    <div style="height: 8px; background: #d1fae5; border-radius: 4px; overflow: hidden;">
                        <div style="width: ${geoPercent}%; height: 100%; background: var(--geo-green);"></div>
                    </div>
                </div>
            </div>

            <!-- By Cognitive Level -->
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">🎯 Kết quả theo mức độ nhận thức</h3>
                </div>
                ${['recognition', 'understanding', 'application', 'high_application'].map(lvl => {
                    const st = res.levelStats[lvl] || { total: 0, score: 0 };
                    const pct = st.total > 0 ? Math.round((st.score / st.total) * 100) : 0;
                    const name = {
                        recognition: 'Nhận biết',
                        understanding: 'Thông hiểu',
                        application: 'Vận dụng',
                        high_application: 'Vận dụng cao'
                    }[lvl];
                    return `
                    <div style="margin-bottom: 10px;">
                        <div style="display: flex; justify-content: space-between; font-size: 12.5px; margin-bottom: 2px;">
                            <span>${name}:</span>
                            <strong>${pct}%</strong>
                        </div>
                        <div style="height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
                            <div style="width: ${pct}%; height: 100%; background: var(--primary-navy);"></div>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>

        <!-- Detailed Question-by-Question Review -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">📖 Chi tiết đáp án và lời giải Phần I (${res.detailedObjResults.length} câu)</h3>
            </div>

            <div style="display: flex; flex-direction: column; gap: 14px;">
                ${res.detailedObjResults.map(item => `
                    <div style="padding: 16px 18px; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: ${item.grade.isCorrect ? '#f0fdf4' : '#fef2f2'};">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
                            <div>
                                <span style="font-weight: 700; color: var(--primary-navy);">Câu ${item.index}</span>
                                <span class="badge ${item.question.subject === 'history' ? 'badge-history' : 'badge-geo'}">${item.question.subject === 'history' ? 'Lịch sử' : 'Địa lí'}</span>
                                <span class="badge badge-neutral">${item.question.lessonTitle}</span>
                            </div>
                            <span class="badge ${item.grade.isCorrect ? 'badge-geo' : 'badge-history'}">
                                ${item.grade.isCorrect ? `✓ Đúng (+${item.earnedPoints}đ)` : `✗ Sai (+${item.earnedPoints}đ)`}
                            </span>
                        </div>

                        <div style="font-weight: 600; font-size: 14.5px; margin-bottom: 8px;">${item.question.question}</div>
                        ${item.question.passage ? `<div class="tf-passage-box">"${item.question.passage}"</div>` : ''}

                        <!-- Explanation -->
                        <div class="explanation-box" style="margin-top: 10px; background: white;">
                            <div style="font-weight: 700; color: var(--primary-navy); margin-bottom: 4px;">
                                Đáp án chính xác: ${item.question.answerLetter || ''}
                            </div>
                            <div style="font-size: 13.5px; white-space: pre-line; color: var(--text-secondary);">${item.question.explanation}</div>
                            ${item.question.textbookRef ? `<div class="textbook-cite">${item.question.textbookRef}</div>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Self-Scoring Part II: Essays -->
        ${res.detailedEssayResults.length > 0 ? `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">✍️ Hướng dẫn chấm & Tự đánh giá Phần II - Tự luận</h3>
                <span class="badge badge-gold">Tổng 3,0 điểm</span>
            </div>

            ${res.detailedEssayResults.map(item => `
                <div style="border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 18px; margin-bottom: 16px; background: white;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <h4 style="font-size: 15px; color: var(--primary-navy); margin: 0;">Câu ${item.index}: ${item.essay.title}</h4>
                        <span class="badge badge-gold">Tối đa ${item.maxScore} điểm</span>
                    </div>
                    <p style="font-size: 14.5px; font-weight: 600; margin-bottom: 10px;">${item.essay.question}</p>

                    ${item.userDraft ? `
                        <div style="background: #f8fafc; padding: 12px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 13.5px; margin-bottom: 12px;">
                            <strong>Bài làm của bạn:</strong>
                            <div style="white-space: pre-line; color: var(--text-secondary); margin-top: 4px;">${item.userDraft}</div>
                        </div>
                    ` : ''}

                    <div style="background: #eff6ff; padding: 12px 14px; border-radius: var(--radius-sm); border: 1px solid #bfdbfe; font-size: 13.5px; margin-bottom: 12px;">
                        <strong style="color: var(--primary-navy);">Đáp án tham khảo:</strong>
                        <div style="white-space: pre-line; color: #1e3a8a; margin-top: 4px;">${item.essay.modelAnswer}</div>
                    </div>

                    <div style="font-weight: 700; font-size: 13px; margin-bottom: 6px;">Bảng tiêu chí chấm điểm (Barem):</div>
                    <table class="matrix-table" style="margin: 0 0 12px 0;">
                        <thead><tr><th>Tiêu chí chấm</th><th style="width: 80px;">Điểm</th></tr></thead>
                        <tbody>
                            ${(item.essay.rubric || []).map(r => `<tr><td class="align-left">${r.criteria}</td><td><strong>${r.points}đ</strong></td></tr>`).join('')}
                        </tbody>
                    </table>

                    <div style="display: flex; align-items: center; justify-content: flex-end; gap: 10px;">
                        <label style="font-size: 13px; font-weight: 600;">Điểm tự chấm cho câu này:</label>
                        <select class="form-select" style="padding: 4px 8px; border-radius: 4px;" onchange="AtlasApp.updateEssaySelfScore('${item.essay.id}', this.value)">
                            <option value="0" ${item.selfScore == 0 ? 'selected' : ''}>0 điểm</option>
                            <option value="0.5" ${item.selfScore == 0.5 ? 'selected' : ''}>0.5 điểm</option>
                            <option value="1.0" ${item.selfScore == 1.0 ? 'selected' : ''}>1.0 điểm</option>
                            <option value="${item.maxScore}" ${item.selfScore == item.maxScore ? 'selected' : ''}>${item.maxScore} điểm (Tối đa)</option>
                        </select>
                    </div>
                </div>
            `).join('')}
        </div>
        ` : ''}
    </div>
    `;

    this.renderRoot(html);
};

AtlasApp.updateEssaySelfScore = function(essayId, val) {
    if (!this.activeExamSession) return;
    this.activeExamSession.setEssayScore(essayId, parseFloat(val));
    // Recalculate results
    this.activeExamResults = this.activeExamSession.submit();
    this.viewExamResult();
};

AtlasApp.exportCurrentResultDocx = function() {
    if (!this.activeExam) return;
    window.AtlasExportEngine.exportExamDocx(this.activeExam, 'with_answers');
};

AtlasApp.printCurrentResult = function() {
    if (!this.activeExam) return;
    window.AtlasExportEngine.printExam(this.activeExam, 'with_answers');
};

// ==========================================
// VIEW 9: QUESTION BANK BROWSER
// ==========================================
AtlasApp.bankFilter = {
    subject: 'all',
    lessonId: 'all',
    cognitiveLevel: 'all',
    type: 'all',
    searchQuery: '',
    page: 1,
    pageSize: 15
};

AtlasApp.viewBank = function(queryParams = {}) {
    this.setPageTitle('Ngân hàng câu hỏi');
    if (queryParams.subject) this.bankFilter.subject = queryParams.subject;
    if (queryParams.lessonId) this.bankFilter.lessonId = queryParams.lessonId;

    const curriculum = window.ATLAS_CURRICULUM;
    const questions = window.AtlasQuestionEngine.filterQuestions(this.bankFilter);
    const essays = window.AtlasQuestionEngine.filterEssays(this.bankFilter);
    const totalCount = questions.length + essays.length;

    // Pagination
    const totalPages = Math.max(1, Math.ceil(questions.length / this.bankFilter.pageSize));
    const startIdx = (this.bankFilter.page - 1) * this.bankFilter.pageSize;
    const pageQuestions = questions.slice(startIdx, startIdx + this.bankFilter.pageSize);

    let html = `
    <div style="max-width: 1040px; margin: 0 auto;">
        <!-- Filter Card -->
        <div class="card" style="margin-bottom: 20px;">
            <div class="card-header">
                <h3 class="card-title">🔍 Tra cứu & Tìm kiếm trong ngân hàng 1.900 câu hỏi</h3>
                <span class="badge badge-blue">Tìm thấy: ${totalCount} câu</span>
            </div>

            <!-- Search input -->
            <div style="margin-bottom: 14px;">
                <input type="text" class="form-input" style="width: 100%; padding: 10px 14px; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-size: 14px;" placeholder="Nhập từ khóa tìm kiếm (sự kiện, nhân vật, mốc thời gian, số liệu, bài học...)..." value="${this.bankFilter.searchQuery}" oninput="AtlasApp.updateBankSearch(this.value)">
            </div>

            <!-- Filters Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
                <div>
                    <label style="font-size: 12px; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 3px;">Phân môn:</label>
                    <select class="form-select" style="width: 100%; padding: 6px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 13px;" onchange="AtlasApp.updateBankFilter('subject', this.value)">
                        <option value="all" ${this.bankFilter.subject === 'all' ? 'selected' : ''}>Tất cả môn</option>
                        <option value="history" ${this.bankFilter.subject === 'history' ? 'selected' : ''}>Lịch sử 9</option>
                        <option value="geography" ${this.bankFilter.subject === 'geography' ? 'selected' : ''}>Địa lí 9</option>
                    </select>
                </div>

                <div>
                    <label style="font-size: 12px; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 3px;">Bài học:</label>
                    <select class="form-select" style="width: 100%; padding: 6px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 13px;" onchange="AtlasApp.updateBankFilter('lessonId', this.value)">
                        <option value="all">Tất cả bài học</option>
                        ${curriculum.lessons.map(l => `
                            <option value="${l.id}" ${this.bankFilter.lessonId === l.id ? 'selected' : ''}>[${l.subject === 'history' ? 'Sử' : 'Địa'} B${l.lessonNum}] ${l.title}</option>
                        `).join('')}
                    </select>
                </div>

                <div>
                    <label style="font-size: 12px; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 3px;">Mức độ nhận thức:</label>
                    <select class="form-select" style="width: 100%; padding: 6px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 13px;" onchange="AtlasApp.updateBankFilter('cognitiveLevel', this.value)">
                        <option value="all" ${this.bankFilter.cognitiveLevel === 'all' ? 'selected' : ''}>Tất cả mức độ</option>
                        <option value="recognition" ${this.bankFilter.cognitiveLevel === 'recognition' ? 'selected' : ''}>Nhận biết</option>
                        <option value="understanding" ${this.bankFilter.cognitiveLevel === 'understanding' ? 'selected' : ''}>Thông hiểu</option>
                        <option value="application" ${this.bankFilter.cognitiveLevel === 'application' ? 'selected' : ''}>Vận dụng</option>
                        <option value="high_application" ${this.bankFilter.cognitiveLevel === 'high_application' ? 'selected' : ''}>Vận dụng cao</option>
                    </select>
                </div>

                <div>
                    <label style="font-size: 12px; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 3px;">Dạng câu hỏi:</label>
                    <select class="form-select" style="width: 100%; padding: 6px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 13px;" onchange="AtlasApp.updateBankFilter('type', this.value)">
                        <option value="all" ${this.bankFilter.type === 'all' ? 'selected' : ''}>Tất cả dạng</option>
                        <option value="single_choice" ${this.bankFilter.type === 'single_choice' ? 'selected' : ''}>Trắc nghiệm 4 lựa chọn</option>
                        <option value="true_false" ${this.bankFilter.type === 'true_false' ? 'selected' : ''}>Trắc nghiệm Đúng/Sai</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Questions List -->
        <div style="display: flex; flex-direction: column; gap: 16px;">
            ${pageQuestions.map((q, idx) => `
                <div class="question-card">
                    <div class="q-meta-bar">
                        <div class="q-meta-tags">
                            <span class="q-number-badge">Mã: ${q.id}</span>
                            <span class="badge ${q.subject === 'history' ? 'badge-history' : 'badge-geo'}">${q.subject === 'history' ? 'Lịch sử' : 'Địa lí'}</span>
                            <span class="badge badge-neutral">${{
                                recognition: 'Nhận biết',
                                understanding: 'Thông hiểu',
                                application: 'Vận dụng',
                                high_application: 'Vận dụng cao'
                            }[q.cognitiveLevel]}</span>
                            <span style="font-size: 12.5px; color: var(--text-muted);">${q.lessonTitle}</span>
                        </div>
                    </div>

                    <div class="q-stem">${q.question}</div>

                    ${q.chart ? `
                        <div class="question-chart-wrapper">
                            <img src="${q.chart}" alt="Biểu đồ" class="question-chart-img" onerror="this.style.display='none'">
                        </div>
                    ` : ''}

                    ${q.passage ? `<div class="tf-passage-box">"${q.passage}"</div>` : ''}

                    ${q.type === 'single_choice' ? `
                        <div class="options-list">
                            ${(q.options || []).map((opt, oIdx) => `
                                <div class="option-item ${oIdx === q.answer ? 'correct' : ''}">
                                    <div class="option-letter">${['A', 'B', 'C', 'D'][oIdx]}</div>
                                    <div class="option-text">${opt}</div>
                                </div>
                            `).join('')}
                        </div>
                    ` : `
                        <table class="tf-statements-table">
                            <thead><tr><th>Nhận định</th><th style="width: 80px; text-align: center;">Đáp án</th></tr></thead>
                            <tbody>
                                ${(q.statements || []).map(st => `
                                    <tr>
                                        <td><strong>${st.id})</strong> ${st.text}</td>
                                        <td style="text-align: center;"><span class="badge ${st.answer ? 'badge-geo' : 'badge-history'}">${st.answer ? 'Đúng' : 'Sai'}</span></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    `}

                    <!-- Toggle Explanation -->
                    <div style="margin-top: 10px;">
                        <button class="btn btn-outline btn-sm" onclick="this.nextElementSibling.style.display = (this.nextElementSibling.style.display === 'none' ? 'block' : 'none');">
                            Xem giải thích chi tiết & Căn cứ SGK
                        </button>
                        <div class="explanation-box" style="display: none; margin-top: 10px;">
                            <div style="font-weight: 700; color: var(--primary-navy); margin-bottom: 4px;">Lời giải chi tiết:</div>
                            <div style="font-size: 13.5px; white-space: pre-line; color: var(--text-secondary);">${q.explanation}</div>
                            ${q.textbookRef ? `<div class="textbook-cite">${q.textbookRef}</div>` : ''}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- Pagination Controls -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin: 24px 0;">
            <button class="btn btn-outline btn-sm" onclick="AtlasApp.changeBankPage(-1)" ${this.bankFilter.page <= 1 ? 'disabled' : ''}>← Trang trước</button>
            <span style="font-size: 13px; font-weight: 600; color: var(--text-secondary);">Trang ${this.bankFilter.page} / ${totalPages}</span>
            <button class="btn btn-outline btn-sm" onclick="AtlasApp.changeBankPage(1)" ${this.bankFilter.page >= totalPages ? 'disabled' : ''}>Trang sau →</button>
        </div>
    </div>
    `;

    this.renderRoot(html);
};

AtlasApp.updateBankFilter = function(key, val) {
    this.bankFilter[key] = val;
    this.bankFilter.page = 1;
    this.viewBank();
};

AtlasApp.updateBankSearch = function(query) {
    this.bankFilter.searchQuery = query;
    this.bankFilter.page = 1;
    // Debounce slightly or direct render
    this.viewBank();
};

AtlasApp.changeBankPage = function(delta) {
    this.bankFilter.page += delta;
    this.viewBank();
};

// ==========================================
// VIEW 10: MISTAKE NOTEBOOK (SỔ CÂU SAI)
// ==========================================
AtlasApp.viewMistakes = function() {
    this.setPageTitle('Sổ câu hỏi sai');
    const mistakes = window.AtlasStatistics.getMistakeQuestions();

    let html = `
    <div style="max-width: 960px; margin: 0 auto;">
        <div class="card" style="margin-bottom: 20px;">
            <div class="card-header">
                <div>
                    <h2 class="card-title" style="color: var(--history-red);">📕 Sổ câu hỏi sai cá nhân (${mistakes.length} câu)</h2>
                    <p style="font-size: 13px; color: var(--text-muted); margin: 4px 0 0 0;">Hệ thống tự động lưu các câu hỏi bạn trả lời sai trong quá trình luyện tập và thi thử để ôn luyện lại.</p>
                </div>
                ${mistakes.length > 0 ? `
                    <button class="btn btn-primary btn-sm" onclick="AtlasApp.retakeAllMistakes()">Luyện tập lại các câu sai 🚀</button>
                ` : ''}
            </div>
        </div>

        ${mistakes.length === 0 ? `
            <div class="card" style="text-align: center; padding: 48px 24px;">
                <div style="font-size: 48px; margin-bottom: 12px;">🌟</div>
                <h3 style="font-size: 18px; color: var(--primary-navy);">Hiện tại bạn chưa có câu hỏi nào bị sai!</h3>
                <p style="color: var(--text-muted);">Hãy tiếp tục làm các bài luyện tập và thi thử để kiểm tra kiến thức.</p>
                <a href="#/practice" class="btn btn-primary" style="margin-top: 12px;">Bắt đầu luyện tập</a>
            </div>
        ` : `
            <div style="display: flex; flex-direction: column; gap: 16px;">
                ${mistakes.map(item => {
                    const q = item.question;
                    const m = item.mistakeMeta;
                    return `
                    <div class="question-card" style="border-left: 4px solid var(--history-red);">
                        <div class="q-meta-bar">
                            <div class="q-meta-tags">
                                <span class="badge ${q.subject === 'history' ? 'badge-history' : 'badge-geo'}">${q.subject === 'history' ? 'Lịch sử' : 'Địa lí'}</span>
                                <span class="badge badge-neutral">${q.lessonTitle}</span>
                                <span class="badge badge-history">Đã làm sai ${m.wrongCount || 1} lần</span>
                            </div>
                            <button class="btn btn-outline btn-sm" onclick="AtlasApp.removeMistakeItem('${q.id}')">
                                ✓ Đã nắm vững (Xóa khỏi sổ)
                            </button>
                        </div>

                        <div class="q-stem">${q.question}</div>
                        ${q.passage ? `<div class="tf-passage-box">"${q.passage}"</div>` : ''}

                        <div class="explanation-box" style="margin-top: 10px;">
                            <div style="font-weight: 700; color: var(--primary-navy); margin-bottom: 4px;">Đáp án đúng: ${q.answerLetter || ''}</div>
                            <div style="font-size: 13.5px; white-space: pre-line; color: var(--text-secondary);">${q.explanation}</div>
                            ${q.textbookRef ? `<div class="textbook-cite">${q.textbookRef}</div>` : ''}
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        `}
    </div>
    `;

    this.renderRoot(html);
};

AtlasApp.removeMistakeItem = function(qId) {
    window.AtlasStorage.removeMistake(qId);
    this.viewMistakes();
};

AtlasApp.retakeAllMistakes = function() {
    const mistakes = window.AtlasStatistics.getMistakeQuestions();
    if (mistakes.length === 0) return;

    const qPool = mistakes.map(m => m.question);
    const session = window.AtlasPracticeEngine.startSession({
        count: qPool.length,
        mode: 'study'
    });
    session.questions = qPool;
    window.AtlasRouter.navigate('/practice');
};

// ==========================================
// VIEW 11: LEARNING STATISTICS & MASTERY MATRIX
// ==========================================
AtlasApp.viewStatistics = function() {
    this.setPageTitle('Thống kê & Tiến độ học tập');
    const metrics = window.AtlasStatistics.getOverviewMetrics();
    const subjects = window.AtlasStatistics.getSubjectMetrics();
    const levels = window.AtlasStatistics.getLevelMetrics();
    const lessonsMastery = window.AtlasStatistics.getLessonsMastery();

    let html = `
    <div style="max-width: 1040px; margin: 0 auto;">
        <!-- Top Stats -->
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon blue">📝</div>
                <div class="stat-info">
                    <div class="stat-value">${metrics.totalAnswered}</div>
                    <div class="stat-label">Tổng câu đã làm</div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon green">🎯</div>
                <div class="stat-info">
                    <div class="stat-value">${metrics.accuracy}%</div>
                    <div class="stat-label">Tỉ lệ chính xác chung</div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon gold">⏱️</div>
                <div class="stat-info">
                    <div class="stat-value">${metrics.studyTimeFormatted}</div>
                    <div class="stat-label">Thời gian ôn tập</div>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon red">🏆</div>
                <div class="stat-info">
                    <div class="stat-value">${metrics.avgExamScore}/10</div>
                    <div class="stat-label">Điểm thi TB (${metrics.totalExams} đề)</div>
                </div>
            </div>
        </div>

        <!-- Subject Comparison -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">📊 Năng lực theo phân môn Lịch sử & Địa lí</h3>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div style="padding: 16px; border: 1px solid var(--history-border); border-radius: var(--radius-md); background: #fffaf0;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                        <span style="font-weight: 700; color: var(--history-red); font-size: 16px;">Lịch sử 9</span>
                        <span style="font-size: 20px; font-weight: 800; color: var(--history-red);">${subjects.history.accuracy}%</span>
                    </div>
                    <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 8px;">Đã làm: ${subjects.history.answered} câu • Đúng: ${subjects.history.correct} câu</div>
                    <div style="height: 8px; background: #fee2e2; border-radius: 4px; overflow: hidden;">
                        <div style="width: ${subjects.history.accuracy}%; height: 100%; background: var(--history-red);"></div>
                    </div>
                </div>

                <div style="padding: 16px; border: 1px solid var(--geo-border); border-radius: var(--radius-md); background: #f0fdf4;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                        <span style="font-weight: 700; color: var(--geo-green); font-size: 16px;">Địa lí 9</span>
                        <span style="font-size: 20px; font-weight: 800; color: var(--geo-green);">${subjects.geography.accuracy}%</span>
                    </div>
                    <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 8px;">Đã làm: ${subjects.geography.answered} câu • Đúng: ${subjects.geography.correct} câu</div>
                    <div style="height: 8px; background: #d1fae5; border-radius: 4px; overflow: hidden;">
                        <div style="width: ${subjects.geography.accuracy}%; height: 100%; background: var(--geo-green);"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 38 Lessons Mastery Matrix -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">🗺️ Ma trận độ tinh thông 38 bài học</h3>
                <div style="display: flex; gap: 12px; font-size: 12px;">
                    <span>🟢 Đã nắm vững (≥80%)</span>
                    <span>🟡 Trung bình (55-79%)</span>
                    <span>🔴 Cần ôn lại (&lt;55%)</span>
                    <span>⚪ Chưa làm</span>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px;">
                ${lessonsMastery.map(lm => {
                    let chipColor = '#f1f5f9';
                    let chipBorder = '#cbd5e1';
                    let statusIcon = '⚪';
                    if (lm.status === 'mastered') { chipColor = '#ecfdf5'; chipBorder = '#a7f3d0'; statusIcon = '🟢'; }
                    else if (lm.status === 'moderate') { chipColor = '#fefce8'; chipBorder = '#fef08a'; statusIcon = '🟡'; }
                    else if (lm.status === 'needs_work') { chipColor = '#fef2f2'; chipBorder = '#fecaca'; statusIcon = '🔴'; }

                    return `
                    <div style="padding: 10px 12px; border-radius: var(--radius-sm); border: 1px solid ${chipBorder}; background: ${chipColor}; font-size: 13px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                            <span style="font-weight: 700; color: ${lm.subject === 'history' ? 'var(--history-red)' : 'var(--geo-green)'};">[${lm.subject === 'history' ? 'Sử' : 'Địa'} ${lm.lessonNum}]</span>
                            <span>${statusIcon} ${lm.accuracy}%</span>
                        </div>
                        <div style="font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: var(--text-primary); margin-bottom: 4px;">${lm.title}</div>
                        <div style="font-size: 11px; color: var(--text-muted);">${lm.answered} câu đã làm</div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
    </div>
    `;

    this.renderRoot(html);
};

// ==========================================
// VIEW 12: SETTINGS & BACKUP / RESTORE
// ==========================================
AtlasApp.viewSettings = function() {
    this.setPageTitle('Cài đặt & Sao lưu dữ liệu');

    let html = `
    <div style="max-width: 800px; margin: 0 auto;">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">💾 Sao lưu và Di chuyển dữ liệu học tập</h3>
            </div>
            <p>Do website chạy hoàn toàn cục bộ (offline), toàn bộ tiến độ làm bài, sổ câu sai và lịch sử thi thử được lưu an toàn trong trình duyệt của bạn. Bạn có thể xuất file sao lưu để chuyển sang máy tính khác hoặc lưu trữ định kì.</p>

            <div style="display: flex; gap: 12px; margin-top: 16px; flex-wrap: wrap;">
                <button class="btn btn-primary" onclick="AtlasStorage.exportBackup()">
                    📥 Xuất file sao lưu (JSON)
                </button>
                <button class="btn btn-outline" onclick="document.getElementById('import-file-input').click()">
                    📤 Khôi phục từ file JSON
                </button>
                <input type="file" id="import-file-input" accept=".json" style="display: none;" onchange="AtlasApp.handleImportFile(event)">
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3 class="card-title">ℹ️ Thông tin hệ thống ATLAS 9</h3>
            </div>
            <table class="matrix-table" style="text-align: left;">
                <tr><td style="width: 200px; font-weight: 600;">Phiên bản:</td><td>ATLAS 9 v1.0.0 (Bản hoàn chỉnh)</td></tr>
                <tr><td style="font-weight: 600;">Chương trình:</td><td>GDPT 2018 - SGK Kết nối tri thức với cuộc sống</td></tr>
                <tr><td style="font-weight: 600;">Chế độ hoạt động:</td><td>100% Offline / Local (Khởi chạy bằng index.html)</td></tr>
                <tr><td style="font-weight: 600;">Ngân hàng câu hỏi:</td><td>1.900 câu trắc nghiệm (MCQ & Đúng/Sai) + 56 câu tự luận</td></tr>
                <tr><td style="font-weight: 600;">Xuất bản tài liệu:</td><td>Định dạng Word chuẩn (.docx) và In ấn A4 (PDF)</td></tr>
            </table>
        </div>

        <div class="card" style="border-color: #fecaca; background: #fff5f5;">
            <div class="card-header" style="border-bottom-color: #fecaca;">
                <h3 class="card-title" style="color: var(--danger);">⚠️ Đặt lại dữ liệu học tập</h3>
            </div>
            <p style="color: #7f1d1d;">Xóa toàn bộ điểm số, tiến độ làm bài và sổ câu sai trong trình duyệt để bắt đầu học tập lại từ đầu.</p>
            <button class="btn btn-danger btn-sm" onclick="if(confirm('CẢNH BÁO: Thao tác này sẽ xóa toàn bộ tiến độ học tập và không thể hoàn tác! Bạn có chắc chắn không?')) { AtlasStorage.resetAllData(); alert('Đã đặt lại dữ liệu thành công.'); AtlasRouter.navigate('/'); }">
                Xóa toàn bộ dữ liệu & Đặt lại
            </button>
        </div>
    </div>
    `;

    this.renderRoot(html);
};

AtlasApp.handleImportFile = function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        const content = evt.target.result;
        const res = window.AtlasStorage.importBackup(content);
        if (res.success) {
            alert('Khôi phục dữ liệu học tập thành công!');
            window.AtlasRouter.navigate('/');
        } else {
            alert('Lỗi khôi phục: ' + res.error);
        }
    };
    reader.readAsText(file);
};
