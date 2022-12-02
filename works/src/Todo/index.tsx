import { useAtom } from "jotai";
import { contentInputAtom, fetchUrlAtom, titleInputAtom } from "../Atoms";

const Input = () => {
  const [title, setTitle] = useAtom(titleInputAtom);
  const [content, setContent] = useAtom(contentInputAtom);

  const handleSubmitClick = async () => {
    await fetch("http://192.168.0.76:8080/todo", {
      method: "POST",
      body: JSON.stringify({
        id: "wooseok",
        title: title,
        content: content,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  };

  return (
    <div>
      제목
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      내용
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <div>{content}</div>
      <button type="submit" onClick={handleSubmitClick}>
        submit
      </button>
    </div>
  );
};

const TodoList = () => {
  const [json] = useAtom(fetchUrlAtom);

  const handleDeleteClick = async (id: any) => {
    await fetch(`http://192.168.0.76:8080/todo/${id}`, {
      method: "DELETE",
    });
  };

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
            <button>수정하기</button>
            <button
              onClick={() => {
                handleDeleteClick(item.id);
              }}
            >
              remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
