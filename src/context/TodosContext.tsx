import { createContext } from "react";
import { Todo } from "../types/todo";

type TodosContextType = {
  todos: Todo[] | null;
  addTodo: (title: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  hasError: boolean;
  setHasError: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodosContext = createContext<TodosContextType>({
  todos: null,
  addTodo: async () => {},
  deleteTodo: async () => {},
  hasError: false,
  setHasError: () => {},
});

export default TodosContext;
