import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  async function tododata() {
    const data = await fetch("http://localhost:3000/todos");
    const json = await data.json();
    setTodos(json.todos);
  }
  useEffect(() => {
    tododata();
  }, []);
  const Tododone = async (id) => {
    await fetch("http://localhost:3000/completed", {
      method: "put",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      tododata();
    });
  };

  return (
    <>
      <div className="w-full min-h-screen flex flex-wrap bg-zinc-700  ">
        {" "}
        {todos.map((todo) => {
          return (
            <div
              key={todo?._id}
              className="w-[300px] h-[400px] bg-red-500 p-4 m-8 rounded-lg flex flex-col items-start justify- "
            >
              <h1 className="w-full text-4xl font-bold text-white">
                {todo?.title}
              </h1>
              <p>{todo?.description}</p>
              <button className="w-full" onClick={() => Tododone(todo._id)}>
                {todo?.completed ? "completed" : "mark as completed"}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todos;
