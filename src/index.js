// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// //reducer는 데이터를 modify(수정)하는 함수
// const reducer = () => {};

// //store는 데이터를 저장하는 곳
// //createStore는 reducer를 필수로함
// const store = createStore();

const countModifier = (count = 0, action) => {
  if (action.type === "Add") {
    return count + 1;
  }
  if (action.type === "rr") {
    return count + 20;
  }
  return count;
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "Add" }); //action과 소통하는 방법 "dispatch"
countStore.dispatch({ type: "rr" }); //action과 소통하는 방법 "dispatch"

console.log(countStore.getState()); //return값을 주네
