import React from "react";
import "./App.css";
import TodoList from "./Todo";

const App = () => {
  return (
    <div className="App">
      <h1>ToDo - Jotai</h1>
      <TodoList />
    </div>
  );
};

export default App;
