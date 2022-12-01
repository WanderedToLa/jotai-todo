import { useAtom } from "jotai";
import { contentInputAtom, fetchUrlAtom, titleInputAtom } from "../Atoms";

const Input = () => {
  const [title, setTitle] = useAtom(titleInputAtom);
  const [content, setContent] = useAtom(contentInputAtom);
  // const [setPostId] = useAtom(postID);

  const handleClick = async () => {
    const response = await fetch("http://192.168.0.76:8080/todo", {
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

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();

    console.log("result is: ", JSON.stringify(result, null, 4));
  };

  return (
    <div>
      제목
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      내용
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <div>{content}</div>
      <button type="submit" onClick={handleClick}>
        submit
      </button>
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
