import React from "react";
import "../../App.css";
import TodoListC from "../Todo/TodoListC";
import "../Todo/Todo.css";
import Footer from "../Footer/Footer";

function TodoList() {
  return (
    <div>
      <div className="todo-app">
        <TodoListC />
      </div>
      <Footer />
    </div>
  );
}
export default TodoList;
