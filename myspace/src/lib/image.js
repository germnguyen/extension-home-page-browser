// Cắt vuông ở giữa, thu nhỏ còn 256x256 rồi nén JPEG (~20-40 KB) để lưu gọn trong bộ nhớ extension.
export async function fileToAvatar(file, size = 256) {
  if (!file.type.startsWith("image/")) throw new Error("not-image");
  if (file.size > 10 * 1024 * 1024) throw new Error("too-large");
  const bmp = await createImageBitmap(file);
  const s = Math.min(bmp.width, bmp.height);
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, size, size);
  ctx.drawImage(bmp, (bmp.width - s) / 2, (bmp.height - s) / 2, s, s, 0, 0, size, size);
  bmp.close?.();
  return canvas.toDataURL("image/jpeg", 0.85);
}
