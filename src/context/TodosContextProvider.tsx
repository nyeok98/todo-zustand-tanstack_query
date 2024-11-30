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
  const [hasError, setHasError] = useState<boolean>(false);

  const addTodo = async (title: string) => {
    try {
      const id = "";
      const newTodo = await fbAddTodo({ id, title, content: "" });
      if (newTodo) setTodos([...todos, newTodo]);
    } catch (e) {
      setHasError(true);
    }
  };

  const deleteTodo = async (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    try {
      await fbDeleteTodo(id);
      setTodos(newTodos);
    } catch (e) {
      setHasError(true);
    }
  };

  const fetchTodos = async () => {
    try {
      const todos = await fbFetchTodos();
      if (todos) setTodos(todos);
    } catch {
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, deleteTodo, hasError, setHasError }}
    >
      {children}
    </TodosContext.Provider>
  );
}
