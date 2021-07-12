import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

const ToDo = ({ text, onBtnClick,id }) => {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onBtnClick}>Delete</button>
      </Link>
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
