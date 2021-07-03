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

import { createElement } from "react";
import { createStore } from "redux";
/*

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// //reducer는 데이터를 modify(수정)하는 함수
// const reducer = () => {};

// //store는 데이터를 저장하는 곳
// //createStore는 reducer를 필수로함
// const store = createStore();

const Add = "Add";
const Minus = "Minus"; //변수로 활용하면 dispatch할때 에러발견 용의(type값)

const countModifier = (count = 0, action) => {
  //countModifier가 reducer
  //현재상태의 application과 함께 불려지는 함수(reducer)
  switch (action.type) {
    case Add:
      return count + 1; //리듀서가 리턴하는것은 application의 state(데이터)가 됨
    case Minus:
      return count - 1; //리듀서가 리턴하는것은 application의 state(데이터)가 됨
    default:
      return count; //리듀서가 리턴하는것은 application의 state(데이터)가 됨
  } //if써도 되고 switch써도됨
};

const countStore = createStore(countModifier); //데이터 저장공간 store

const onChange = () => {
  console.log("subscribe는 스토어의 상태변화를 감지합니다! ㅋㅋ 굳");
  number.innerText = countStore.getState();
  console.log(countStore.getState()); //counterModifier의 return값을 주네
};

countStore.subscribe(onChange); //store의 변화를 감지해 인자값의 함수를 실행
//이걸 onChange를 구독한다 함

const addHandle = () => {
  countStore.dispatch({ type: Add }); //action과 소통하는 방법 "dispatch"
};

const minusHandle = () => {
  countStore.dispatch({ type: Minus });
  //action은 Object여야 하며 그 key이름은 항상 type임 (못바꿈)
};

add.addEventListener("click", addHandle);

minus.addEventListener("click", minusHandle);

*/ //~pure redux : counter

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = "", action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: action.id };
      return [newToDoObj, ...state];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== parseInt(action.id)); //html로 받아오는 id는 string 형태이므로 parseInt
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

const addToDo = (text, date) => {
  //코드쪼개기
  return { type: ADD_TODO, text, id: date };
};

const dispatchAddTodo = (text) => {
  const date = Date.now(); //리듀서에는 이런것을 쓰면 안됨 외부에서 디스패치
  store.dispatch(addToDo(text, date));
};

const deleteToDo = (id) => {
  //코드쪼개기
  return { type: DELETE_TODO, id };
};

const dispatchDeletoToDo = (e) => {
  const id = e.target.parentNode.id; //부모노드의 id속성값
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerText = ""; //store가 바뀔때마다 바로 위 toDos에 repainting하기 때문에
  toDos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "삭제!";
    btn.addEventListener("click", dispatchDeletoToDo);
    li.id = todo.id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  dispatchAddTodo(todo);
};

form.addEventListener("submit", onSubmit);
