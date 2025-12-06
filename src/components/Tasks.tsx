import { message } from "antd";
import { CheckCircleFilled, DeleteOutlined } from "@ant-design/icons";

import { useThemeContext } from "../contexts/theme/ThemeContext";
import { useTaskContext } from "../contexts/task/TaskContext";

const Tasks = () => {
  const { theme } = useThemeContext();
  const { visibleTasks, dispatch } = useTaskContext();

  if (visibleTasks.length === 0)
    return (
      <p className={`text-center py-12  ${theme === "light" ? "text-gray-400" : "text-gray-600"}`}>
        No tasks yet. Add one above! 👆
      </p>
    );

  return (
    <div
      className={`
    max-h-[335px] py-2 overflow-y-auto
    [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:rounded-full!
    [&::-webkit-scrollbar-thumb]:rounded-full!
    ${
      theme === "light"
        ? `
          [&::-webkit-scrollbar-track]:bg-gray-100!
          [&::-webkit-scrollbar-thumb]:bg-gray-300!
        `
        : `
          [&::-webkit-scrollbar-track]:bg-white!
          [&::-webkit-scrollbar-thumb]:bg-neutral-400!
        `
    }
  `}
    >
      <div className="mr-3">
        <ul>
          {visibleTasks.map((task) => (
            <li key={task.id}>
              <div
                className={`mb-4 p-5 rounded-2xl ml-px 
                             ${
                               theme === "light"
                                 ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
                                 : "bg-zinc-600 text-white shadow-[0_4px_20px_rgba(255,255,255,0.7)]"
                             }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => dispatch({ type: "TOGGLE_TASK", payload: { id: task.id } })}
                      className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200
                              ${
                                task.completed
                                  ? "bg-white border-[5px] border-green-500 text-green-500"
                                  : "bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-green-500"
                              }`}
                    >
                      <CheckCircleFilled
                        style={{ fontSize: "20px" }}
                        className={`transition-opacity  duration-200 ${task.completed ? "opacity-100" : "opacity-0"}`}
                      />
                    </button>

                    <span className="font-semibold text-lg">{task.name}</span>
                  </div>

                  <DeleteOutlined
                    style={{ color: "#ff0000", fontSize: "18px" }}
                    className="cursor-pointer"
                    onClick={() => {
                      dispatch({ type: "DELETE_TASK", payload: { id: task.id } });
                      message.success("Delete task done");
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
