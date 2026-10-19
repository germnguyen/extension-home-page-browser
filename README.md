# myspace.

Trang chủ cá nhân thay cho trang **tab mới** của trình duyệt. Mỗi lần mở tab mới, bạn thấy ngay giờ giấc, thời tiết, các website hay dùng, một câu nói của riêng mình và một khu ghi chú nhanh. Không có máy chủ, không có tài khoản, dữ liệu nằm trên máy của bạn.

Chạy trên các trình duyệt nhân Chromium: Cốc Cốc, Chrome, Edge, Brave.

## Tính năng

- **Đồng hồ và ngày tháng**: giờ:phút theo máy, định dạng 24 giờ, ngày tháng theo kiểu Việt Nam, tự cập nhật.
- **Lời chào theo buổi**: sáng (5–11h), trưa (11–13h), chiều (13–18h), tối (18–22h), còn lại là khuya. Mỗi buổi có một câu chúc riêng.
- **6 lối tắt**: GitHub, YouTube, Gmail, ChatGPT, Claude, Notion. Logo SVG lưu sẵn trong extension, bấm để mở trong cùng tab.
- **Câu nói của tôi**: tự nhập câu nói, tên tác giả (không bắt buộc) và ảnh người nói. Có nút bút chì, Lưu và Hủy.
- **Ghi chú**: một ghi chú văn bản thuần, giữ xuống dòng, tối đa 10.000 ký tự, nội dung dài thì cuộn trong thẻ.
- **Thời tiết**: nhiệt độ và tình trạng trời của một thành phố cố định (mặc định Hà Nội), lấy từ Open-Meteo.
- **Đếm ngày**: số ngày tính từ một ngày đặc biệt do bạn đặt (mặc định 06/10/2026), hiện cạnh thời tiết.
- **Giao diện tối / sáng**: mặc định tối (đen thuần, chữ trắng), nút mặt trời/trăng ở góc phải để chuyển.

## Công nghệ

- React 18, JavaScript
- Tailwind CSS v4
- Vite 6
- Chrome Extension Manifest V3

Không dùng thêm thư viện nào khác. Không có backend.

## Chạy thử và cài đặt

Yêu cầu: Node.js bản LTS.

```bash
npm install
npm run dev      # xem nhanh ở localhost (chưa phải tab mới thật)
npm run build    # tạo thư mục dist để nạp vào trình duyệt
```

Nạp vào trình duyệt:

1. Mở trang tiện ích: `coccoc://extensions` (Chrome: `chrome://extensions`, Edge: `edge://extensions`, Brave: `brave://extensions`).
2. Bật **Chế độ nhà phát triển**.
3. Bấm **Tải tiện ích đã giải nén** và chọn thư mục **`dist`** (không phải thư mục gốc).
4. Mở tab mới.

Khi sửa code: chạy lại `npm run build`, rồi bấm nút tải lại (⟳) trên thẻ extension. Mỗi trình duyệt cần nạp riêng một lần.

Trình duyệt có thể nhắc về tiện ích ở chế độ nhà phát triển mỗi lần khởi động, bạn có thể bỏ qua.

## Cấu hình

| Muốn đổi | Sửa ở đâu |
|---|---|
| Thành phố thời tiết (tên, vĩ độ, kinh độ) | `src/config.js` → `LOCATION` |
| Ngày đặc biệt để đếm ngày | `src/config.js` → `SPECIAL_DATE` (dạng `năm-tháng-ngày`) |
| Danh sách lối tắt (tên, URL, logo, màu, thứ tự) | `src/data/shortcuts.js` |
| Câu chúc theo buổi và các mốc giờ | `src/lib/greeting.js` |
| Màu sắc hai theme | `src/index.css` (khối `:root` và `[data-theme="dark"]`) |
| Tỉ lệ chiều cao thẻ câu nói và ghi chú | `src/App.jsx` (`md:flex-[1]` và `md:flex-[4]`) |
| Chu kỳ làm mới thời tiết | `src/hooks/useWeather.js` → `TTL` (mặc định 30 phút) |

Cách đếm ngày: chính ngày đặc biệt là 0 ngày, qua nửa đêm tăng thêm 1. Nếu ngày đặt ở tương lai thì hiện `Còn N ngày`.

Để thêm lối tắt, đặt file SVG vào `src/assets/icons/`, import trong `src/data/shortcuts.js` và thêm một dòng vào danh sách. Địa chỉ phải là `http` hoặc `https`, địa chỉ không hợp lệ sẽ bị bỏ qua.

## Dữ liệu được lưu thế nào

| Dữ liệu | Khóa | Nơi lưu |
|---|---|---|
| Câu nói (`text`, `author`, `photo`, `updatedAt`) | `myspace:quote` | `chrome.storage.local` |
| Ghi chú (`content`, `updatedAt`) | `myspace:notes` | `chrome.storage.local` |
| Thời tiết gần nhất (để mở tab là hiện ngay) | `myspace:weather` | `chrome.storage.local` |
| Theme sáng / tối | `myspace:theme` | `localStorage` (để áp dụng ngay, không bị nháy) |

Khi chạy `npm run dev` (không phải extension), dữ liệu tạm lưu bằng `localStorage` của trang.

Ảnh người nói được cắt vuông ở giữa, thu nhỏ còn 256×256 và nén JPEG (khoảng 20–40 KB) trước khi lưu. Chỉ nhận tệp ảnh dưới 10 MB. Câu nói tối đa 500 ký tự, tên tác giả tối đa 80 ký tự.

## Quyền của extension

- `storage`: lưu câu nói, ghi chú và thời tiết gần nhất.
- `https://api.open-meteo.com/*`: lấy thời tiết.

Ngoài hai quyền trên, extension không xin quyền nào khác và không gửi dữ liệu của bạn đi đâu cả. Chỉ có tọa độ thành phố trong `config.js` được gửi tới Open-Meteo để lấy thời tiết.

## Cấu trúc thư mục

```
public/
├── manifest.json        Khai báo extension (thay trang tab mới)
└── theme-init.js        Đặt theme trước khi React chạy
src/
├── App.jsx              Bố cục hai cột
├── config.js            Thành phố và ngày đặc biệt
├── index.css            Màu sắc, theme, Tailwind
├── components/
│   ├── Header.jsx, LeafLogo.jsx, ThemeToggle.jsx
│   ├── DayCounter.jsx, WeatherBadge.jsx, WeatherIcon.jsx
│   ├── ClockGreeting.jsx
│   ├── ShortcutGrid.jsx, ShortcutItem.jsx
│   ├── EditableCard.jsx   Khung dùng chung: xem, sửa, Lưu, Hủy
│   ├── QuoteCard.jsx, NotesCard.jsx, PhotoField.jsx
│   └── Icons.jsx, fieldStyles.js
├── hooks/               useClock, useTheme, useStoredState, useWeather
├── lib/                 greeting, storage, weather, days, image, url
├── data/shortcuts.js    Danh sách lối tắt
└── assets/icons/        Logo SVG của các lối tắt
```

## Trải nghiệm và trợ năng

- Bố cục hai cột có đường phân cách dọc; màn hình hẹp chuyển thành một cột, lối tắt tự đổi 4, 3 hoặc 2 cột.
- Nút có nhãn truy cập, có viền focus nhìn thấy, dùng được bằng bàn phím. Trong lúc sửa: `Esc` để hủy, `Ctrl+Enter` (hoặc `Cmd+Enter`) để lưu.
- Lỗi lưu được báo ngay trong thẻ và giữ nguyên nội dung đang sửa.
- Thời tiết lỗi hoặc mất mạng: hiện "Chưa có dữ liệu thời tiết" nếu chưa từng có dữ liệu, hoặc giữ bản gần nhất. Không bao giờ hiện số giả.

## Nguồn logo

Logo của các lối tắt lấy từ bộ [Simple Icons](https://simpleicons.org) (giấy phép CC0). Các logo là nhãn hiệu của chủ sở hữu tương ứng, chỉ dùng để nhận diện website.

## Hướng phát triển

Chưa làm trong phiên bản đầu:

- Thêm, sửa, xóa và kéo thả lối tắt (cấu trúc dữ liệu đã sẵn sàng)
- Icon extension (16, 48, 128 px) từ logo chiếc lá
- Lưu sẵn font chữ trong extension
- Ô tìm kiếm trong trang
- Đồng bộ dữ liệu giữa các thiết bị bằng `chrome.storage.sync`
- Hỗ trợ Firefox (cần cấu hình manifest riêng)
