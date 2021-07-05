import React, { useState } from "react";
import { connect } from "react-redux";

const Home = (props,{ToDos}) => {
  const [text, setText] = useState("");

  console.log(props);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {JSON.stringify(ToDos)}
      </ul>
    </>
  );
};
//mapStateToProps(스토어에서 가져오는 State, OwnProps는 해당컴포넌트의 props)
function mapStateToProps(state, OwnProps) {
  return { ToDos: state };
  //리턴하면 해당 컴포넌트의 props가 됨
  //왜냐하면 connect는 해당컴포넌트로 보내는 props에 추가될수 있도록 허용하기 때문
}

export default connect(mapStateToProps)(Home);
//redux state로부터 Home 에 props로 전달한다는 것
