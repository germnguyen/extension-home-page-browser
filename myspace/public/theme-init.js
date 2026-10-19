// Đặt theme trước khi React chạy để không bị nháy sáng/tối.
// Manifest V3 cấm script inline nên phải để ở file riêng.
(function () {
  var theme = "dark";
  try {
    var saved = localStorage.getItem("myspace:theme");
    if (saved === "light" || saved === "dark") theme = saved;
  } catch (e) {}
  document.documentElement.setAttribute("data-theme", theme);
})();
