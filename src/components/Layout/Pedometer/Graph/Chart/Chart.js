import React from "react";
import convertDate from "../../../../../util/convertDate";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function ({ activities }) {
  const data = activities.map(({ date, distance }) => ({
    name: convertDate(new Date(date)).displayedDate,
    value: +distance,
  }));
  console.log(data);
  return (
    <LineChart
      width={809}
      height={430}
      data={data}
      margin={{ right: 20, left: 20, top:10, bottom:10 }}
    >
      <CartesianGrid style={{border:'1px solid rgba(28, 32, 37, 0.1)'}} />
      <XAxis dataKey="name" padding={{ left: 50, right: 30 }}/>
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#EC174F" />
    </LineChart>
  );
}
