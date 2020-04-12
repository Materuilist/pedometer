import React from "react";

import cssClasses from "./Row.module.css";

export default function ({ activity }) {
  const { date: dateStr, distance } = activity;
  const date = new Date(dateStr);
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

  //N километров M метров
  const km = Math.floor(distance / 1000);
  const m = distance % 1000;;
  let displayedDistance;
  if(km > 0){
    displayedDistance = km + ' километров ' + m + ' метров';
  }else{
    displayedDistance = m + ' метров';
  }
  return (
    <div className={cssClasses.Row}>
      <div className={cssClasses.Date}>
        <div>
          <div>{day}</div>
          <div>{displayedDate}</div>
        </div>
      </div>
      <div>{displayedDistance}</div>
    </div>
  );
}
