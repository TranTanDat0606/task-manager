import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useTaskContext } from "../contexts/task/TaskContext";
import React from "react";

const SearchTask = () => {
  const { dispatch } = useTaskContext();
  const [value, setValue] = React.useState("");

  const handleSearch = () => {
    const keyword = value.trim();

    if (!keyword) {
      dispatch({ type: "SET_SEARCH", payload: { keyword: "" } });
      return;
    }

    dispatch({ type: "SET_SEARCH", payload: { keyword: value } });
    setValue("");
  };

  return (
    <div className="flex items-center gap-3 mt-3 mb-4">
      <Input
        size="large"
        prefix={<SearchOutlined />}
        placeholder=" Search the task.."
        className="rounded-xl border-none! shadow-md! bg-gradient-to-r! from-orange-200/40! to-purple-200/40! placeholder:text-slate-500! p-3!"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button
        size="large"
        className="rounded-xl! h-[50px]! bg-gradient-to-r! from-blue-400 to-purple-500! text-white! shadow-md! px-6!"
        onClick={() => handleSearch()}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchTask;
