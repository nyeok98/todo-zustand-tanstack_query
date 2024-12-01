import { useState } from "react";
import { useTodoStore } from "../store/todo";

const useTodoInput = () => {
  const { addTodo, hasError, setHasError } = useTodoStore();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;
    try {
      await addTodo(trimmedValue);
      setInputValue("");
    } catch {
      setHasError(true);
    }
  };

  const handleChange = (value: string) => {
    if (hasError) setHasError(false);
    setInputValue(value);
  };

  return {
    inputValue,
    hasError,
    handleSubmit,
    handleChange,
  };
};

export default useTodoInput;
