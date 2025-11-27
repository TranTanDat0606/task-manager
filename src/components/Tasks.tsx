import React from "react";
import { CheckCircleFilled, DeleteOutlined } from "@ant-design/icons";

const Tasks = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div
      className="max-h-[335px] py-2
       overflow-y-auto
      [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:rounded-full!
      [&::-webkit-scrollbar-track]:bg-gray-100!
      [&::-webkit-scrollbar-thumb]:rounded-full!
      [&::-webkit-scrollbar-thumb]:bg-gray-300!
      dark:[&::-webkit-scrollbar-track]:bg-neutral-700!
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500!"
    >
      <div className="mr-3">
        <div className="mb-4 p-5 bg-white rounded-2xl ml-px shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setChecked(!checked)}
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200
                ${
                  checked
                    ? "bg-white border-green-500 text-green-500"
                    : "bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-green-500"
                }`}
              >
                <CheckCircleFilled
                  style={{ fontSize: "20px" }}
                  className={`transition-opacity duration-200 ${checked ? "opacity-100" : "opacity-0"}`}
                />
              </button>
              <span className="font-semibold text-lg">All</span>
            </div>
            <DeleteOutlined style={{ color: "#ff0000", fontSize: "18px" }} className="cursor-pointer" />
          </div>
        </div>
        <div className="mb-4 p-5 bg-white rounded-2xl ml-px shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setChecked(!checked)}
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200
                ${
                  checked
                    ? "bg-white border-green-500 text-green-500"
                    : "bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-green-500"
                }`}
              >
                <CheckCircleFilled
                  style={{ fontSize: "20px" }}
                  className={`transition-opacity duration-200 ${checked ? "opacity-100" : "opacity-0"}`}
                />
              </button>
              <span className="font-semibold text-lg">All</span>
            </div>
            <DeleteOutlined style={{ color: "#ff0000", fontSize: "18px" }} className="cursor-pointer" />
          </div>
        </div>
        <div className="mb-4 p-5 bg-white rounded-2xl ml-px shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setChecked(!checked)}
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200
                ${
                  checked
                    ? "bg-white border-green-500 text-green-500"
                    : "bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-green-500"
                }`}
              >
                <CheckCircleFilled
                  style={{ fontSize: "20px" }}
                  className={`transition-opacity duration-200 ${checked ? "opacity-100" : "opacity-0"}`}
                />
              </button>
              <span className="font-semibold text-lg">All</span>
            </div>
            <DeleteOutlined style={{ color: "#ff0000", fontSize: "18px" }} className="cursor-pointer" />
          </div>
        </div>
        <div className="mb-4 p-5 bg-white rounded-2xl ml-px shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setChecked(!checked)}
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200
                ${
                  checked
                    ? "bg-white border-green-500 text-green-500"
                    : "bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-green-500"
                }`}
              >
                <CheckCircleFilled
                  style={{ fontSize: "20px" }}
                  className={`transition-opacity duration-200 ${checked ? "opacity-100" : "opacity-0"}`}
                />
              </button>
              <span className="font-semibold text-lg">All</span>
            </div>
            <DeleteOutlined style={{ color: "#ff0000", fontSize: "18px" }} className="cursor-pointer" />
          </div>
        </div>

        <div className="mb-4 p-5 bg-white rounded-2xl ml-px shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setChecked(!checked)}
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-200
                ${
                  checked
                    ? "bg-white border-green-500 text-green-500"
                    : "bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-green-500"
                }`}
              >
                <CheckCircleFilled
                  style={{ fontSize: "20px" }}
                  className={`transition-opacity duration-200 ${checked ? "opacity-100" : "opacity-0"}`}
                />
              </button>
              <span className="font-semibold text-lg">All</span>
            </div>
            <DeleteOutlined style={{ color: "#ff0000", fontSize: "18px" }} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
