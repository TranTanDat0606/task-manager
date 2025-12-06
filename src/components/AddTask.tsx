import { Button, Input } from "antd";
import { useTaskContext } from "../contexts/task/TaskContext";
import React from "react";

const AddTask = () => {
  const { dispatch } = useTaskContext();
  const [value, setValue] = React.useState("");

  const handleAdd = () => {
    if (!value.trim()) return;
    dispatch({ type: "ADD_TASK", payload: { name: value } });
    setValue("");
  };

  return (
    <div className="flex items-center gap-3 mt-3 mb-4">
      <Input
        size="large"
        placeholder="Add a new task..."
        className="rounded-xl border-none! shadow-md! bg-gradient-to-r! from-pink-200/60 to-orange-100/40 placeholder:text-slate-500 p-3!"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button
        size="large"
        className="rounded-xl! h-[50px]! border-none! bg-gradient-to-r! from-pink-400! to-purple-500! text-white! shadow-md! px-[33px]!"
        onClick={handleAdd}
      >
        Add
      </Button>
    </div>
  );
};

export default AddTask;
