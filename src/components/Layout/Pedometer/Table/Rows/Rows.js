import React from "react";
import Row from "./Row/Row";

export default function ({ activities }) {
  return (
    <div>
      {activities.map((activity) => (
        <Row activity={activity} key={activity.id}/>
      ))}
    </div>
  );
}
