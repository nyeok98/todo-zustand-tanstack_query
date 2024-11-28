import { useState } from "react";
import TodosContext from "./TodosContext";
import { Todo } from "../types/todo";

export default function TodoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (content: string) => {
    const newTodo = { content };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}
