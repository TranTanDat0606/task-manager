import { useThemeContext } from "../../contexts/theme/ThemeContext";
import { useTaskContext } from "../../contexts/task/TaskContext";
import TaskItem from "./TaskItem";
import EmptyTask from "./EmptyTask";

const TaskList = () => {
  const { theme } = useThemeContext();
  const { visibleTasks } = useTaskContext();

  return (
    <div
      className={`max-h-[340px] py-2 overflow-y-auto 
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full!
        [&::-webkit-scrollbar-thumb]:rounded-full!
        ${
          theme === "light"
            ? "[&::-webkit-scrollbar-track]:bg-gray-100! [&::-webkit-scrollbar-thumb]:bg-gray-300!"
            : "[&::-webkit-scrollbar-track]:bg-white! [&::-webkit-scrollbar-thumb]:bg-neutral-400!"
        }
      `}
    >
      <ul className="mr-3">
        {visibleTasks.length === 0 ? <EmptyTask /> : visibleTasks.map((task) => <TaskItem key={task.id} task={task} />)}
      </ul>
    </div>
  );
};

export default TaskList;
