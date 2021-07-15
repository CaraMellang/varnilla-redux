import { createAction } from "@reduxjs/toolkit";
import { createStore } from "redux";

// const ADD = "ADD";
// const DELETE = "DELETE";
// const addToDo = (text) => {
//   //action creator
//   const date = Date.now();
//   return {
//     type: ADD,
//     date,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     // id: parseInt(id),
//     id,
//   };
// };
//아래는 툴킷으로 한것
const addToDo = createAction("ADD");
const deleteToDo = createAction("DEFETE");

console.log(addToDo(), deleteToDo());

export const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      console.log(action);
      return [{ text: action.payload, id: Date.now() }, ...state];
    //리듀서는 저런 Dete를 안에 함께쓰는것을 권장하지 않음
    // return [{ text: action.text, id: action.date }, ...state];
    //리덕스 툴킷 사용시 action은 기본적으로 payload로 보내짐
    case deleteToDo.type:
      // return state.filter((todo) => todo.id !== action.id);
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
