import { useAtom } from "jotai";
import { textInputAtom, fetchUrlAtom } from "../Atoms";

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
            <button>test</button>
            <button>remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
