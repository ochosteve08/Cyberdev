import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");

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
        <input
          type="text"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button
          onClick={() => {
            dispatch(incrementByAmount(Number(amount)));
          }}
        >
          increment by amount
        </button>
        <button
          onClick={() => {
            dispatch(decrementByAmount(Number(amount)));
          }}
        >
          decrement by amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
