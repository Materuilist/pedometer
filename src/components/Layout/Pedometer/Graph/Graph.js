import React from "react";
import { connect } from "react-redux";

import Footer from "../../../UI/Header/Header";

import cssClasses from "./Graph.module.css";

function Graph({ activities }) {
  return (
    <div className={cssClasses.Graph}>
      <Footer></Footer>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  activities: state.activities.data,
});

export default connect(mapStateToProps)(Graph);
