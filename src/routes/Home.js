import React, { useState } from "react";
import { connect } from "react-redux";
// import { actionCreators } from "../store(pre)";
import {add,remove} from "../store"
import ToDo from "../components/ToDo";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setText(value);
  };
  // console.log(Math.floor(Math.random() * 10));

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    addToDo(text);
    console.log(text);
  };

  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{toDos && toDos.map((toDo) => <ToDo {...toDo} key={toDo.id} />)}</ul>
    </>
  );
};
//mapStateToProps(스토어에서 가져오는 State, OwnProps는 해당컴포넌트의 props)
function mapStateToProps(state, OwnProps) {
  return { toDos: state };
  //리턴하면 해당 컴포넌트의 props가 됨
  //왜냐하면 connect는 해당컴포넌트로 보내는 props에 추가될수 있도록 허용하기 때문
}

function mapDispatchToProps(dispatch, ownProps) {
  // console.log(dispatch);
  return {
    // addToDo: (text) => dispatch(actionCreators.addToDo(text)),
    addToDo: (text) => dispatch(add(text)),//createSlice사용
  };
  //리턴함녀 해당 컴포넌트 props로 쓸수있음
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
//redux state로부터 Home 에 props로 전달한다는 것
//dispatch만 할경이 인자는 null로 주면됨
