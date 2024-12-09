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

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handlePriorityChange = () => {
    switch (priority) {
      case PRIORITY.LOW:
        setPriority(PRIORITY.MEDIUM);
        break;
      case PRIORITY.MEDIUM:
        setPriority(PRIORITY.HIGH);
        break;
      case PRIORITY.HIGH:
        setPriority(PRIORITY.LOW);
        break;
      default:
        setPriority(PRIORITY.LOW);
        break;
    }
  };

  const handleCompletedChange = (value: boolean) => {
    setCompleted(value);
  };

  return {
    inputValue,
    completed,
    priority,
    isError,
    handleSubmit,
    handleInputChange,
    handlePriorityChange,
    handleCompletedChange,
  };
};

export default useTodoInput;
