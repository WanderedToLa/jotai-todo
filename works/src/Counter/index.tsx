import { atom, useAtom } from "jotai";
import React from "react";

const countAtom = atom<number>(0);
const doubledCountAtom = atom<number>((get) => get(countAtom) * 2);

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);
  const [doubledCount] = useAtom(doubledCountAtom);
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Plus +1 Count
      </button>
      <p>double Count</p>
      <div>{doubledCount}</div>
    </div>
  );
};

export default Counter;
