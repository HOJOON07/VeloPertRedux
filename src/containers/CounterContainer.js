import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

export default function CounterContainer() {
  //useSelector는 리덕스의 스토어를 조회하는 함수
  //state의 값은 store.getState()함수를 호출했을 때 나타나는 결과물과 동일하다.

  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  //useDispatch는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 훅이다.
  const dispatch = useDispatch();
  const onIncrease = dispatch(increase());
  const onDecrease = dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff)); //액션 생성 함수에서 setDiff에 diff받는다.

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    ></Counter>
  );
}
