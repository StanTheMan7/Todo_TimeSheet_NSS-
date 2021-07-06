import React from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";
import Box from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <span className="title">Todo Time Sheet</span>
      <TodoApp />
      <Box />
    </div>
  );
}

export default App;
