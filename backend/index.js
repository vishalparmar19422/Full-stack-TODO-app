import express from "express";
import { createTodo, updateTodo } from "./types.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import DB_CONNECT from "./utils/dbconnect.js";
import Todo from "./models/todo.model.js";
import cors from "cors";

dotenv.config();
DB_CONNECT();
const app = express();
app.use(cors());

app.use(express.json());

app.post("/todo", async (req, res) => {
  const todoData = req.body;
  const parsedData = createTodo.safeParse(todoData);
  if (!parsedData.success === true) {
    res.status(403).json("your input is incorrect send valid data ");
  }
  try {
    await Todo.create({
      title: todoData.title,
      description: todoData.description,
      completed: false,
    });
    res.json("Todo created");
  } catch (error) {
    console.log(error + "errro while creating todo");
    res.json("errro while creating todo");
  }
});
app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});
  res.json({
    todos: todos,
  });
});
app.put("/completed", async (req, res) => {
  const todoData = req.body;
  const parsedData = createTodo.safeParse(todoData);
  if (!parsedData.success === true) {
    res.status(403).json("your input is incorrect send valid data ");
  }
  await Todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json("Todo marked as done ");
});

app.listen(3000);
