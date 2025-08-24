import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementFun, incrementFun } from "../RTK/CounterSlice";

function Footer() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className="text-black"></h1>
      <div className="dispateched-function flex flex-col items-center gap-4">
        <button className=" bg-gray-100 p-3 rounded-lg shadow-md shadow-gray-300 hover:bg-gray-300 delay-75 transition-all">
          Counter Value: {count}
        </button>
        <div className=" flex gap-10 pt-10">
          <button
            className="bg-green-200 p-3 rounded-lg shadow-md shadow-gray-300 hover:bg-green-300 delay-75 transition-all "
            onClick={() => dispatch(incrementFun())}
          >
            Increment
          </button>
          <button
            className=" bg-red-200 p-3 rounded-lg shadow-md shadow-gray-300 hover:bg-red-300 delay-75 transition-all"
            onClick={() => dispatch(decrementFun())}
          >
            decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;
