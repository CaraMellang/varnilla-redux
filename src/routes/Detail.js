import React from "react";
import { connect } from "react-redux";
// import { useParams } from "react-router-dom";

const Detail = ({ toDos }) => {
  // const id = useParams(); 리덕스 대신 useParams 써도 됨
  // console.log(id);
  console.log(toDos);
  return (
    <div>
      <h1>elxpdlf</h1>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  console.log(id);
  return { toDos: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
