import { useState } from "react";
import { useAddTodo } from "./useTodos";

const useTodoInput = () => {
  const { mutate: addTodo, isError } = useAddTodo();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;
    addTodo({ id: "", title: trimmedValue, content: "" });
    setInputValue("");
  };

  const handleChange = (value: string) => {
    setInputValue(value);
  };

  return {
    inputValue,
    isError,
    handleSubmit,
    handleChange,
  };
};

export default useTodoInput;
