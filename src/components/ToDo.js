import React from "react";
import { connect } from "react-redux";
// import { actionCreators } from "../store(pre)";
import { remove } from "../store";
import { Link } from "react-router-dom";

const ToDo = ({ text, onBtnClick, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>Delete</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  console.log("오운프롭스!", ownProps);
  //id를 dispatch해야하는데 ownProps에 이미 들어있음
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),//createSlice사용
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
