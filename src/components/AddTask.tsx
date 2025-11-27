import { Button, Input } from "antd";

const AddTask = () => {
  return (
    <div className="flex items-center gap-3 mt-3 mb-4">
      <Input
        size="large"
        placeholder="Add a new task..."
        className="rounded-xl border-none! shadow-md! bg-gradient-to-r! from-pink-200/60 to-orange-100/40 placeholder:text-slate-500 p-3!"
      />

      <Button
        size="large"
        className="rounded-xl! h-[50px]! bg-gradient-to-r! from-pink-400! to-purple-500! text-white! shadow-md px-8!"
      >
        Add
      </Button>
    </div>
  );
};

export default AddTask;
