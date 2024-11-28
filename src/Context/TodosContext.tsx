import { createContext } from "react";
import { Todo } from "../types/todo";

type TodoContextType = {
  todos: Todo[] | null;
  addTodo: (content: string) => void;
  deleteTodo: (index: number) => void;
};

const TodosContext = createContext<TodoContextType>({
  todos: null,
  addTodo: () => {},
  deleteTodo: () => {},
});

export default TodosContext;
