import { createContext } from "react";
import { Todo } from "../types/todo";

type TodoContextType = {
  todos: Todo[] | null;
  addTodo: (title: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
};

const TodosContext = createContext<TodoContextType>({
  todos: null,
  addTodo: async () => {},
  deleteTodo: async () => {},
});

export default TodosContext;
