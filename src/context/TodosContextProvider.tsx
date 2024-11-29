import { useEffect, useState } from "react";
import TodosContext from "./TodosContext";
import { Todo } from "../types/todo";

import {
  addTodo as fbAddTodo,
  deleteTodo as fbDeleteTodo,
  fetchTodos as fbFetchTodos,
} from "../services/todoServices";

export default function TodoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = async (title: string) => {
    try {
      const id = "";
      const newTodo = await fbAddTodo({ id, title, content: "" });
      if (newTodo) setTodos([...todos, newTodo]);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteTodo = async (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    try {
      await fbDeleteTodo(id);
      setTodos(newTodos);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchTodos = async () => {
    const todos = await fbFetchTodos();
    if (todos) setTodos(todos);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodosContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}
