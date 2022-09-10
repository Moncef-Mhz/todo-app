import React, { useState } from "react";
import Todolist from "./components/Todolist";
import Form from "./components/form";

import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [userinput, setUserInput] = useState("");

  const changehandler = (e) => {
    setUserInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (userinput.length < 3) {
      alert("you must at least type 3 letter");
    } else {
      let Todo = [...todo];
      Todo = [
        ...todo,
        { name: userinput, completed: false, id: todo.length + 1 },
      ];
      setTodo(Todo);
      setUserInput("");
    }
  };

  const clickhandler = (id) => {
    let completedTodo = todo.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodo(completedTodo);
  };

  const deleteHnadler = (id) => {
    const remove = [...todo].filter((Todo) => Todo.id !== id);
    setTodo(remove);
  };
  console.log(todo);

  return (
    <div className="App">
      <div className="todo-list">
        <h1 className="todo-text">Todo list</h1>
        <Form submit={submitHandler} value={userinput} change={changehandler} />
        <Todolist data={todo} remove={deleteHnadler} click={clickhandler} />
      </div>
    </div>
  );
}

export default App;
