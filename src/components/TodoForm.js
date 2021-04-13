import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random()*10000),
        text: input
    })

    setInput('');
  };

  const handleChange = e => {
    setInput(e.target.value)
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add task here"
        value={input}
        className="type"
        name="text"
        onChange={handleChange}
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
}
export default TodoForm