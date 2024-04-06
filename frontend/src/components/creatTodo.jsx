import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const CreatTodo = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [redirect, setRedirect] = useState(false);
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
      setRedirect(true);
      alert("Todo created");
    });
  };

  return redirect ? (
    <Navigate to="/" />
  ) : (
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
