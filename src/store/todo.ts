import { create } from "zustand";
import { Todo } from "../types/todo";

import {
  addTodo as fbAddTodo,
  deleteTodo as fbDeleteTodo,
  fetchTodos as fbFetchTodos,
} from "../api/todos/api";

type TodoStore = {
  todos: Todo[];
  hasError: boolean;
  addTodo: (todo: Todo) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
  fetchTodos: () => Promise<void>;
  setHasError: (flag: boolean) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  hasError: false,

  addTodo: async (todo: Todo) => {
    try {
      const newTodo = await fbAddTodo(todo);
      if (newTodo) {
        set((state) => ({ todos: [...state.todos, newTodo] }));
      }
    } catch {
      set(() => ({ hasError: true }));
    }
  },

  deleteTodo: async (id: string) => {
    try {
      await fbDeleteTodo(id);
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      }));
    } catch {
      set(() => ({ hasError: true }));
    }
  },

  fetchTodos: async () => {
    try {
      const todos = await fbFetchTodos();
      if (todos) {
        set(() => ({ todos }));
      }
    } catch {
      set(() => ({ hasError: true }));
    }
  },

  setHasError: (flag: boolean) => {
    set(() => ({ hasError: flag }));
  },
}));
