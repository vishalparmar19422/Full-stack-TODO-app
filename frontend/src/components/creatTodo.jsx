import React, { useState } from "react";

const CreatTodo = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const createTodo = async () => {
    const data = await fetch("http://localhost:3000/todo", {
      method: "post",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      alert("Todo created");
    });
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="Tile"
      />
      <input
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        type="text"
        placeholder="description"
      />
      <button onClick={createTodo}>Create Todo</button>
    </div>
  );
};

export default CreatTodo;
