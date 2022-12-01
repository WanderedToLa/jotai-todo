import { atom, useAtom } from "jotai";
import { listofTodoAtom, textInputAtom } from "../Atoms";

const fetchUrlAtom = atom(async () => {
  const response = await fetch("http://192.168.0.76:8080/todo");
  return await response.json();
});

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
  const [json] = useAtom(fetchUrlAtom);

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
        {json.data.map((item: any) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>사용자</h1>
            <p>{item.id}</p>
            <h1>제목</h1>
            <p>{item.title}</p>
            <h1>내용</h1>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
