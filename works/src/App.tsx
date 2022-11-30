import React from "react";
import "./App.css";
import TodoList from "./Todo";

import { Provider } from "jotai";

const App = () => {
  return (
    <Provider>
      <div className="App">
        <h1>ToDo - Jotai</h1>
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
