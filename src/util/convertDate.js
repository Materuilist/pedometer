export default function (date) {
  var days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Честверг",
    "Пятница",
    "Суббота",
  ];
  const day = days[date.getDay()];
  //дд.мм.гггг
  let dd = date.getDate();
  if (dd < 10) dd = "0" + dd;
  let mm = date.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;
  const yy = date.getFullYear();
  const displayedDate =
    dd.toString() + "." + mm.toString() + "." + yy.toString();
  return { day, displayedDate };
}
