// 5 mốc: 5-11 sáng, 11-13 trưa, 13-18 chiều, 18-22 tối, còn lại khuya
export function getGreeting(hour) {
  if (hour >= 5 && hour < 11)
    return { hello: "Chào buổi sáng,", wish: "Chúc bạn một ngày tốt lành!" };
  if (hour >= 11 && hour < 13)
    return { hello: "Chào buổi trưa,", wish: "Nhớ nghỉ ngơi và ăn trưa nhé!" };
  if (hour >= 13 && hour < 18)
    return { hello: "Chào buổi chiều,", wish: "Chúc bạn một buổi chiều hiệu quả!" };
  if (hour >= 18 && hour < 22)
    return { hello: "Chào buổi tối,", wish: "Chúc bạn một buổi tối thư thái!" };
  return { hello: "Đã khuya rồi,", wish: "Nhớ nghỉ ngơi sớm nhé!" };
}
