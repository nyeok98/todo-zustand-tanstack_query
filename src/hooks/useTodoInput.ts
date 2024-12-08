import { useState } from "react";
import { useAddTodo } from "./useTodos";
import { PRIORITY } from "../types/todo";

const useTodoInput = () => {
  const { mutate: addTodo, isError } = useAddTodo();
  const [inputValue, setInputValue] = useState<string>("");
  const [priority, setPriority] = useState<PRIORITY>(PRIORITY.LOW);
  const [completed, setCompleted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;
    addTodo({
      id: "",
      title: trimmedValue,
      completed: completed,
      priority: priority,
      createdAt: new Date(),
    });
    setInputValue("");
  };

  const handleChange = (value: string) => {
    setInputValue(value);
  };

  const handlePriorityChange = (value: PRIORITY) => {
    setPriority(value);
  };

  const handleCompletedChange = (value: boolean) => {
    setCompleted(value);
  };

  return {
    inputValue,
    isError,
    handleSubmit,
    handleChange,
    handlePriorityChange,
    handleCompletedChange,
  };
};

export default useTodoInput;
