import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>count: {count}</p>
      <div>
        <button
          onClick={() => {
           
            dispatch(increment());
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          reset
        </button>
        <button
          onClick={() => {
          
            dispatch(decrement());
          }}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
