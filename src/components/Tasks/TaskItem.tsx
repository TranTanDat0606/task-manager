import { DeleteOutlined, CheckCircleFilled } from "@ant-design/icons";
import { message } from "antd";
import { SortableItem } from "../Dnd-kit/SortableItem";

import { useThemeContext } from "../../contexts/theme/ThemeContext";
import { useTaskContext } from "../../contexts/task/TaskContext";
import type { ITask } from "../../types/task";

const TaskItem = ({ task }: { task: ITask }) => {
  const { theme } = useThemeContext();
  const { dispatch } = useTaskContext();

  return (
    <SortableItem id={task.id}>
      <li>
        <div
          className={`p-5 mb-3 rounded-2xl
            ${
              theme === "light"
                ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
                : "bg-zinc-600 text-white shadow-[0_4px_20px_rgba(255,255,255,0.7)]"
            }
          `}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onPointerDown={(e) => e.stopPropagation()}
                onClick={() => dispatch({ type: "TOGGLE_TASK", payload: { id: task.id } })}
                className={`w-5 h-5 rounded-full flex items-center justify-center
                  ${
                    task.completed
                      ? "bg-white border-[5px] border-green-500 text-green-500"
                      : "bg-transparent border-2 border-gray-300 dark:border-gray-600"
                  }
                `}
              >
                <CheckCircleFilled
                  style={{ fontSize: 20 }}
                  className={`${task.completed ? "opacity-100" : "opacity-0"}`}
                />
              </button>

              <span className="font-semibold text-lg relative">
                {task.name}
                {task.completed && (
                  <span
                    className={`absolute left-0 right-0 top-[55%] h-[2px] px-2 ml-[-3px] ${
                      theme === "light" ? "bg-black" : "bg-white"
                    }`}
                  ></span>
                )}
              </span>
            </div>

            <DeleteOutlined
              style={{ color: "red", fontSize: 18 }}
              onPointerDown={(e) => e.stopPropagation()}
              className="cursor-pointer"
              onClick={() => {
                dispatch({ type: "DELETE_TASK", payload: { id: task.id } });
                message.success("Delete task done");
              }}
            />
          </div>
        </div>
      </li>
    </SortableItem>
  );
};

export default TaskItem;
