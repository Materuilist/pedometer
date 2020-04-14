import React from "react";
import { connect } from "react-redux";

import convertDistance from "../../../../util/convertDistance";

import Footer from "../../../UI/Header/Header";

import cssClasses from "./Graph.module.css";
import Chart from "./Chart/Chart";

function Graph({ activities }) {
  function prepareFooterData() {
    if (activities.length === 0) return;
    const min = convertDistance(
      activities.reduce(
        (minDistance, { distance }) =>
          +distance < minDistance ? +distance : minDistance,
        50001
      )
    );
    const max = convertDistance(
      activities.reduce(
        (maxDistance, { distance }) =>
          +distance > maxDistance ? +distance : maxDistance,
        0
      )
    );
    const MILISECONDS_IN_WEEK = 604800000;
    const currentDate = Date.now();
    const sumLastWeek = convertDistance(
      activities
        .filter(
          ({ date }) => currentDate - Date.parse(date) <= MILISECONDS_IN_WEEK
        )
        .reduce((sum, { distance }) => sum + +distance, 0)
    );
    return {
      min,
      max,
      sumLastWeek,
    };
  }

  const footerData = prepareFooterData() || { min: 0, max: 0, sumLastWeek: 0 };

  return (
    <div className={cssClasses.Graph}>
      <p>Суммарная активность</p>
      <Chart activities={activities} />
      <Footer contentStyling={{ fontSize: "18px", width: "809px" }}>
        <div className={cssClasses.Footer}>
          <div>
            <div>Минимум: {footerData.min}</div>
            <div>Максимум: {footerData.max}</div>
          </div>
          <div>
            <p>Суммарно за 7 дней:</p>
            <p>{footerData.sumLastWeek}</p>
          </div>
        </div>
      </Footer>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  activities: state.activities.data,
});

export default connect(mapStateToProps)(Graph);
