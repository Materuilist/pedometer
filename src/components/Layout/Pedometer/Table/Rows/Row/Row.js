import React from "react";

import convertDistance from "../../../../../../util/convertDistance";
import convertDate from "../../../../../../util/convertDate";

import cssClasses from "./Row.module.css";

export default function ({ activity }) {
  const { date: dateStr, distance } = activity;
  const { day, displayedDate } = convertDate(new Date(dateStr));

  const displayedDistance = convertDistance(distance);
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
