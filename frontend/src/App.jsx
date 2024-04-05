import { useEffect, useState } from "react";
import "./App.css";
import CreatTodo from "./components/creatTodo";
import Todos from "./components/todos";

function App() {
  const [todos, setTodos] = useState([]);
  async function tododata() {
    const data = await fetch("http://localhost:3000/todos");
    const json = await data.json();
    setTodos(json.todos);
  }
  useEffect(() => {
    tododata();
  }, [todos]);

  return (
    <>
      <div>
        <CreatTodo />
        <Todos todos={todos} />
      </div>
    </>
  );
}

export default App;
