import React, { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");

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
    </>
  );
};

export default Home;
