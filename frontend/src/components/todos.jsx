import React from "react";

const Todos = ({ todos,render }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo?._id}>
            <h1>{todo?.title}</h1>
            <p>{todo?.description}</p>
            <button>
              {todo?.completed ? "completed" : "mark as completed"}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Todos;
