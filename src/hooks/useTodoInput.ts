import { useState } from "react";
import { useAddTodo } from "./useTodos";

const useTodoInput = () => {
  const { mutate: addTodo } = useAddTodo();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;
    try {
      await addTodo({ id: "", title: trimmedValue, content: "" });
      setInputValue("");
    } catch {
      // setHasError(true);
    }
  };

  const handleChange = (value: string) => {
    // if (hasError) setHasError(false);
    setInputValue(value);
  };

  return {
    inputValue,
    // hasError,
    handleSubmit,
    handleChange,
  };
};

export default useTodoInput;
