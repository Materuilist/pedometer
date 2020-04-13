import React from "react";

import cssClasses from "./AddRowForm.module.css";

export default function ({ submitHandler }) {
  return (
    <form
      onSubmit={submitHandler}
      className={cssClasses.AddRowForm}
      method="POST"
      action="/"
    >
      <input
        min={1}
        max={50000}
        required
        name="distance"
        className={cssClasses.FormItem}
        type="number"
        placeholder="Дистанция(в метрах)..."
      />
      <button className={cssClasses.FormItem} type="submit">
        OK
      </button>
    </form>
  );
}
