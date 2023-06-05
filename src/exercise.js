import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

// 액션 타입 정의

const INCREASE = "increase";
const DECREASE = "decrease";
const CHANGE_TEXT = "change_text";
const ADD = "add";

// function increase() {
//   return {
//     type: INCREASE,
//   };
// }

// const increase = () => {
//   return {
//     type: INCREASE,
//   };
// };

const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({ type: CHANGE_TEXT, text });

const addTodo = (item) => ({
  type: ADD,
  item,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

console.log(store.getState());

const listner = () => {
  const state = store.getState();
  console.log(state);
};

const subscribe = store.subscribe(listner);

// store.dispatch(increase());
// store.dispatch(decrease());
// store.dispatch(changeText("안녕"));
// store.dispatch(addTodo("리덕스 공부하자"));
