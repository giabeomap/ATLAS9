# 🌍 ATLAS 9 – HỆ THỐNG HỌC TẬP VÀ LUYỆN THI LỊCH SỬ – ĐỊA LÍ 9

> **Website giáo dục số bám sát Chương trình Giáo dục phổ thông (GDPT) 2018**  
> *Sử dụng bộ sách Kết nối tri thức với cuộc sống làm chuẩn kiến thức & năng lực.*

---

## 🚀 Giới thiệu tổng quan

**ATLAS 9** là nền tảng học tập số toàn diện dành cho học sinh lớp 9 ôn tập, rèn luyện kỹ năng và chuẩn bị cho các kỳ thi khảo sát, kiểm tra định kỳ và thi vào lớp 10 môn Lịch sử & Địa lí.

Hệ thống được thiết kế theo kiến trúc **100% Offline-First (Local/Zero-dependency)**:
- 🌐 Chạy trực tiếp trên trình duyệt qua file `index.html` hoặc triển khai trực tuyến qua **GitHub Pages**.
- ❌ Không cần cài đặt backend, cơ sở dữ liệu trực tuyến hay Node.js/Python.
- 🔒 Dữ liệu ngân hàng câu hỏi gốc được bảo vệ an toàn, không bị ghi đè khi làm bài.

---

## ✨ Tính năng nổi bật

### 1. 📚 Không gian bài học (38 bài học toàn cấp)
- **Lịch sử 9 (21 bài):** Hệ thống hóa theo tiến trình sự kiện, mốc thời gian, bảng niên biểu và câu hỏi tự luận.
- **Địa lí 9 (17 bài):** Bảng số liệu thống kê chuẩn năm 2024, phân tích cơ cấu kinh tế, vùng kinh tế và **23 biểu đồ chuyên biệt chuẩn SGK**.

### 2. 🎯 Ngân hàng câu hỏi chuẩn hóa (1.900 câu)
- **1.520 câu trắc nghiệm nhiều lựa chọn (MCQ)** 4 phương án, có giải thích chi tiết, nguồn dẫn SGK và phân tích phương án nhiễu.
- **380 câu trắc nghiệm Đúng / Sai (TF)** theo cấu trúc chuẩn khảo thí GDPT 2018 (mỗi câu gồm 4 nhận định a, b, c, d với thang điểm bậc thang).
- **56 đề bài và đáp án câu hỏi tự luận chuyên sâu**.

### 3. 📊 Bộ biểu đồ số liệu Địa lí chuyên biệt (23 charts)
- Toàn bộ 17 bài học Địa lí đều có bộ biểu đồ độc lập được thiết kế chính xác theo bảng số liệu SGK Kết nối tri thức.
- Bóc tách chuẩn xác giữa câu hỏi lý thuyết khái niệm và câu hỏi kĩ năng phân tích biểu đồ/số liệu.

### 4. 📝 Công cụ tạo đề thi theo ma trận chuẩn & Xuất file Word (.docx)
- Tự động bốc đề theo tỷ lệ nhận thức: *Nhận biết (40%) – Thông hiểu (30%) – Vận dụng (20%) – Vận dụng cao (10%)*.
- Xuất đề thi và đáp án chi tiết ra định dạng **Microsoft Word (.docx)** định dạng chuẩn để in ấn bằng thư viện thuần JavaScript offline.

### 5. 📕 Sổ câu hỏi sai & Thống kê tiến độ cá nhân
- Tự động lưu trữ các câu làm sai theo từng chuyên đề vào `LocalStorage`.
- Cho phép ôn luyện lại riêng các câu sai đến khi thuần thục.

---

## 📁 Cấu trúc thư mục

```text
ATLAS9/
│
├── index.html                  # Giao diện chính của hệ thống
├── README.md                   # Tài liệu giới thiệu dự án
│
├── assets/
│   ├── css/                    # Giao diện CSS thuần, responsive PC/Mobile/Tablet
│   │   ├── style.css
│   │   ├── components.css
│   │   └── responsive.css
│   │
│   ├── js/                     # Các engine xử lý cốt lõi
│   │   ├── app.js              # Controller chính & quản lý giao diện
│   │   ├── router.js           # Client-side hash router (#/history, #/exam...)
│   │   ├── storage.js          # Quản lý LocalStorage tiến độ & điểm số
│   │   ├── question-engine.js  # Chấm điểm MCQ và Đúng/Sai chuẩn GDPT 2018
│   │   ├── practice-engine.js  # Chế độ luyện tập tự do
│   │   ├── exam-engine.js      # Chế độ phòng thi bấm giờ & nộp bài
│   │   ├── matrix-engine.js    # Thuật toán sinh đề thi theo ma trận
│   │   ├── statistics.js       # Thống kê kết quả & biểu đồ năng lực
│   │   └── export-engine.js    # Trình tạo file DOCX xuất bản in
│   │
│   ├── charts/                 # 23 biểu đồ chuyên biệt Địa lí 9
│   └── libraries/              # Thư viện thuần offline (docx-builder.js)
│
└── data/                       # Dữ liệu ngân hàng câu hỏi & chương trình
    ├── metadata.js             # Thông số hệ thống & taxonomy
    ├── curriculum.js           # Khung chương trình GDPT 2018
    ├── lessons.js              # 38 bài học & kiến thức trọng tâm
    ├── questions.js            # 1.900 câu trắc nghiệm chuẩn hóa
    └── essays.js               # 56 câu hỏi tự luận & hướng dẫn chấm
```

---

## 🛠️ Hướng dẫn sử dụng

### Xem trực tiếp trên máy tính (Offline)
1. Tải hoặc clone thư mục `ATLAS9` về máy.
2. Nhấp đúp chuột mở file `index.html` bằng bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Safari, Cốc Cốc).
3. Không cần kết nối Internet, mọi tính năng đều sẵn sàng!

### Xem trực tuyến (GitHub Pages)
Truy cập đường link GitHub Pages của dự án để trải nghiệm trực tiếp trên điện thoại, máy tính bảng hoặc máy tính mà không cần cài đặt.

---

## 📜 Bản quyền & Tham chiếu
- Chương trình Giáo dục phổ thông 2018 – Môn Lịch sử và Địa lí cấp THCS.
- Sách giáo khoa Lịch sử và Địa lí 9 – Bộ sách *Kết nối tri thức với cuộc sống*, NXB Giáo dục Việt Nam.
