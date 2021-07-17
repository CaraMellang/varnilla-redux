import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
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
const addToDo = createAction("ADD", (payload) => {
  const date = Date.now();
  return {
    payload: {
      text: payload,
      id: date,
    },
  };
});
const deleteToDo = createAction("DEFETE");

console.log(addToDo(), deleteToDo());

// export const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       console.log(action);
//       return [{ text: action.payload.text, id: action.payload.id }, ...state];
//     //리듀서는 저런 Dete를 안에 함께쓰는것을 권장하지 않음
//     // return [{ text: action.text, id: action.date }, ...state];
//     //리덕스 툴킷 사용시 action은 기본적으로 payload로 보내짐
//     case deleteToDo.type:
//       // return state.filter((todo) => todo.id !== action.id);
//       return state.filter((todo) => todo.id !== action.payload);
//     default:
//       return;
//   }
// };
//아래는 리덕스툴킷

const reducer = createReducer([], {
  //첫 인자는 initialState
  [addToDo]: (state, action) => {
    state.push({ text: action.payload.text, id: action.payload.id });
  },
  [deleteToDo]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload), //filter는 새로운 array를 리턴
  //중괄호 안하면 애로우함수는 리턴값이 있을때 리턴반환(중괄호 이쓰면 return써야함)
});
//기존 리덕스는 새로운state를 만들어 쓰는형식.
//하지만 툴킷은 push로 새로운state를 쓰는게아닌 mutate가 가능ㅎㅁ(push는 리턴값이 없어 리턴하면안댐)
//ㄴ>(immer아래서 작동되어 툴킷이 위의 순수리덕스 방식으로 처리하기때문에 가능)
//툴킷은 mutate뿐만 아니라 위의 순수리덕스처럼 리턴형식으로도 가능

// const store = createStore(reducer);
const store = configureStore({reducer});

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
