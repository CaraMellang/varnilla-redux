import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const ToDo = ({ text, onBtnClick }) => {
  return (
    <li>
      {text} <button onClick={onBtnClick}>Delete</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  console.log("오운프롭스!", ownProps);
  //id를 dispatch해야하는데 ownProps에 이미 들어있음
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
