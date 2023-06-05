import React from "react";

export default function Counter({
  number,
  diff,
  onIncrease,
  onDecrease,
  onSetDiff,
}) {
  // const { number, diff } = useSelector((state) => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff,
  // }));

  // const dispatch = useDispatch();
  // const onIncrease = dispatch(increase());
  // const onDecrease = dispatch(decrease());
  // const onSetDiff = (diff) => dispatch(setDiff(diff));

  const onChange = (e) => {
    onSetDiff(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}
