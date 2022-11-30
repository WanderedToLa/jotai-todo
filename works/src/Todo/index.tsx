import { atom, useAtom } from "jotai";
import { useEffect } from "react";

interface todoItemList {
  id: string;
  title: string;
  content: string;
}

const textInputAtom = atom("");
const listofTodoAtom = atom<any>({});

const Input = () => {
  const [text, setText] = useAtom(textInputAtom);
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <div>{text}</div>
    </div>
  );
};

const TodoList = () => {
  const [list, setList] = useAtom(listofTodoAtom);

  useEffect(() => {
    fetch("http://192.168.0.76:8080/todo")
      .then((res) => res.json())
      .then(setList);
  }, [setList]);

  const arr: any = Object.values(list)[1];

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input />
        <button type="submit">submit</button>
      </div>
      <div>
        {/* {arr.map(({ item }: any) => (
          <div key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.content}</div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default TodoList;
