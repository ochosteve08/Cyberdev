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
    <div className="flex flex-col justify-center items-center gap-4">
      <p>count: {count}</p>
      <input
      className="outline outline-slate-300 rounded-md"
        type="text"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />
      <div className="flex flex-col space-y-6">
        <button
          className="p-2 bg-green-400 rounded-xl text-md "
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
