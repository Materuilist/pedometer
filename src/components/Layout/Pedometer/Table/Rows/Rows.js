import React from "react";
import Row from "./Row/Row";

import cssClasses from './Rows.module.css';

export default function ({ activities }) {
  return (
    <div className={cssClasses.Rows}>
      {activities.map((activity) => (
        <Row activity={activity} key={activity.id}/>
      ))}
    </div>
  );
}
