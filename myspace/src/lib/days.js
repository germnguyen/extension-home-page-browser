// Số ngày từ ngày bắt đầu đến hôm nay (theo lịch của máy, không bị lệch múi giờ).
// Chính ngày bắt đầu tính là 0; qua nửa đêm mới tăng thêm 1.
export function daysSince(isoDate, now = new Date()) {
  const [y, m, d] = isoDate.split("-").map(Number);
  const start = Date.UTC(y, m - 1, d);
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((today - start) / 86400000);
}
