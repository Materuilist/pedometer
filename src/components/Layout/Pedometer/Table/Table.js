import React from "react";
import _ from "lodash";

import { connect } from "react-redux";
import { fetchActivities, postActivity } from "../../../../redux/actions/creators";

import cssClasses from "./Table.module.css";
import Header from "../../../UI/Header/Header";
import Rows from "./Rows/Rows";
import SortByLabel from "./SortByLabel/SortByLabel";
import Button from "../../../UI/Button/Button";
import Modal from "../../../UI/Modal/Modal";
import AddRowForm from "./AddRowForm/AddRowForm";

class Table extends React.Component {
  state = {
    sorting: {
      date: {
        active: true,
        upstream: true,
      },
      distance: {
        active: false,
        upstream: true,
      },
    },
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchActivities();
  }

  toggleSorting(title) {
    this.setState((prevState) => {
      const newState = _.cloneDeep(prevState);
      newState.sorting[title].active = true;
      if (prevState.sorting[title].active) {
        newState.sorting[title].upstream = !prevState.sorting[title].upstream;
      }
      newState.sorting[title === "date" ? "distance" : "date"].active = false;
      return newState;
    });
  }

  sortActivities() {
    let sortedActivities = _.cloneDeep(this.props.activities);
    sortedActivities.sort((a, b) => {
      const sortBy = this.state.sorting.date.active ? "date" : "distance";
      let diff;
      if (sortBy === "date") {
        diff = Date.parse(a[sortBy]) - Date.parse(b[sortBy]);
      } else {
        diff = a[sortBy] - b[sortBy];
      }
      return this.state.sorting[sortBy].upstream ? diff : diff * -1;
    });
    return sortedActivities;
  }

  postActivity(event){
    event.preventDefault();
    this.props.postActivity(event.target.distance.value);
    event.target.distance.value = null;
    this.toggleModalVisibility();
  }

  toggleModalVisibility() {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  }

  render() {
    const sortedActivities = this.sortActivities();

    return (
      <div className={cssClasses.Table}>
        <Modal
          dismissHandler={this.toggleModalVisibility.bind(this)}
          show={this.state.showModal}
        >
          <AddRowForm submitHandler={this.postActivity.bind(this)}/>
        </Modal>
        <Header>
          <div className={cssClasses.HeaderContent}>
            <SortByLabel
              title="Дата"
              upstream={this.state.sorting.date.upstream}
              active={this.state.sorting.date.active}
              clickHandler={this.toggleSorting.bind(this, "date")}
            />
            <SortByLabel
              title="Дистанция"
              upstream={this.state.sorting.distance.upstream}
              active={this.state.sorting.distance.active}
              clickHandler={this.toggleSorting.bind(this, "distance")}
            />
          </div>
        </Header>
        <Rows activities={sortedActivities} />
        <Button
          clickHandler={this.toggleModalVisibility.bind(this)}
          label="Добавить запись"
          extraStyling={{
            fontSize: "18px",
            lineHeight: "23px",
            height: "60px",
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  activities: state.activities.data,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchActivities: () => dispatch(fetchActivities()),
  postActivity: (distance)=>dispatch(postActivity(distance))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
