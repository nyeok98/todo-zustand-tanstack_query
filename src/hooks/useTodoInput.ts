import { useState } from "react";
import useTodo from "../hooks/useTodo";

const useTodoInput = () => {
  const { addTodo, hasError, setHasError } = useTodo();
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
