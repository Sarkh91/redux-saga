import { useDispatch, useSelector } from "react-redux";
import { RootReducerType } from "../modules";
import { decrease, increase } from "../modules/counter";

const Counter = () => {
  const state = useSelector((state: RootReducerType) => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };

  return (
    <>
      <div>{state}</div>
      <button onClick={handleIncrease}>up</button>
      <button onClick={handleDecrease}>down</button>
    </>
  );
};

export default Counter;
