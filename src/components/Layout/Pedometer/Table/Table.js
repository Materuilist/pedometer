import React from "react";

import { connect } from "react-redux";
import { fetchActivities } from "../../../../redux/actions/creators";

import cssClasses from "./Table.module.css";

class Table extends React.Component {
  componentDidMount() {
    this.props.fetchActivities();
  }

  render() {
    return <div className={cssClasses.Table}>Table</div>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  activities: state.activities.data,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchActivities: () => dispatch(fetchActivities()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
