import { useState } from "react";
import { Todo, PRIORITY } from "../types/todo";
import { useAddTodo, useDeleteTodo, useUpdateTodo } from "./useTodos";

const useTodoInput = ({ todo }: { todo: Todo }) => {
  const { mutate: addTodo } = useAddTodo();
  const { mutate: updateTodo } = useUpdateTodo();
  const { mutate: deleteTodo } = useDeleteTodo();
  const [inputValue, setInputValue] = useState<string>("");
  const [priority, setPriority] = useState<PRIORITY>(
    todo.priority || PRIORITY.LOW
  );
  const [completed, setCompleted] = useState<boolean>(todo.completed || false);

  const handleUpdateTodo = () => {
    if (todo.id === "") return;
    updateTodo({
      id: todo.id,
      title: todo.title,
      completed: completed,
      priority: priority,
      createdAt: todo.createdAt,
    });
  };

  const handleSubmit = () => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;
    addTodo({
      id: "",
      title: inputValue,
      completed: completed,
      priority: priority,
      createdAt: todo.createdAt,
    });
    setInputValue("");
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handlePriorityChange = () => {
    switch (priority) {
      case PRIORITY.LOW:
        setPriority(PRIORITY.MEDIUM);
        handleUpdateTodo();
        break;
      case PRIORITY.MEDIUM:
        setPriority(PRIORITY.HIGH);
        handleUpdateTodo();
        break;
      case PRIORITY.HIGH:
        setPriority(PRIORITY.LOW);
        handleUpdateTodo();
        break;
      default:
        setPriority(PRIORITY.LOW);
        handleUpdateTodo();
        break;
    }
    handleUpdateTodo();
  };

  const handleCompletedChange = (value: boolean) => {
    setCompleted(value);
    handleUpdateTodo();
  };

  const handleDelete = (id: string) => {
    deleteTodo(id);
  };

  return {
    inputValue,
    completed,
    priority,
    handleSubmit,
    handleInputChange,
    handlePriorityChange,
    handleCompletedChange,
    handleDelete,
  };
};

export default useTodoInput;
