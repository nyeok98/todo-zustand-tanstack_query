import { createContext } from "react";
import { Todo } from "../types/todo";

type TodoContextType = {
  todos: Todo[] | null;
  addTodo: (title: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  hasError: boolean;
  setHasError: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodosContext = createContext<TodoContextType>({
  todos: null,
  addTodo: async () => {},
  deleteTodo: async () => {},
  hasError: false,
  setHasError: () => {},
});

export default TodosContext;
