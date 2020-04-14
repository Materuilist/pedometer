import React from "react";
import { connect } from "react-redux";
import { fetchActivities } from "../../../redux/actions/creators";

import Table from "./Table/Table";
import Graph from "./Graph/Graph";

import cssClasses from "./Pedometer.module.css";

class Pedometer extends React.Component {
  componentDidMount() {
    this.props.fetchActivities();
  }

  render() {
    return (
      <div className={cssClasses.Pedometer}>
        <Table />
        <Graph />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchActivities: () => dispatch(fetchActivities()),
});

export default connect(null, mapDispatchToProps)(Pedometer);
