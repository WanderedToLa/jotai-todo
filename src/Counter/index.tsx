import { atom, useAtom } from "jotai";

const countAtom = atom<number>(0); // 원자 단위 atom

//read only
const doubledCountAtom = atom<number>((get) => get(countAtom) * 2); // 값이 변경될 때 반응 하는 값만 읽기 가능

//write only
const multiplyCountAtom = atom(null, (get, set, by: number) =>
  set(countAtom, get(countAtom) * by)
);

//readWrite only 두번째 인자에 값을 업데이트함
const decrementAtom = atom(
  (get) => get(countAtom),
  (get, set, _arg) => set(countAtom, get(countAtom) - 1)
);

const Counter = () => {
  const [count, setCount] = useAtom(countAtom); // primitive type intial value 생성
  const [doubledCount] = useAtom(doubledCountAtom); // read only

  const [deCount, setDeCount] = useAtom(decrementAtom);

  const [, multiply] = useAtom(multiplyCountAtom);

  return (
    <>
      <div>
        <h1>Atom initial Value</h1>
        <div>{count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Plus +1 Count
        </button>
        <p>this is atom double Count</p>
        <div>{doubledCount}</div>
      </div>
      <div>
        <h1>decreament Atom</h1>
        <p>{deCount}</p>
        <button onClick={setDeCount}>decrease</button>
        <h1>Triple Atom - write only</h1>
        <button onClick={() => multiply(3)}>triple</button>
      </div>
    </>
  );
};

export default Counter;
