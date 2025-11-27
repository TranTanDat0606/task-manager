import React from "react";
import { DeleteOutlined } from "@ant-design/icons";

const Tasks = () => {
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
              <input type="checkbox" className="w-5 h-5" />
              <span className="font-semibold text-lg">All</span>
            </div>
            <DeleteOutlined style={{ color: "#ff0000", fontSize: "18px" }} />
          </div>
        </div>
        <div className="mb-4 p-5 bg-white rounded-2xl ml-px shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="font-semibold text-lg">All</span>
            </div>
            <DeleteOutlined style={{ color: "#ff0000", fontSize: "18px" }} />
          </div>
        </div>
        <div className="mb-4 p-5 bg-white rounded-2xl ml-px shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="font-semibold text-lg">All</span>
            </div>
            <DeleteOutlined style={{ color: "#ff0000", fontSize: "18px" }} />
          </div>
        </div>
        <div className="mb-4 p-5 bg-white rounded-2xl ml-px shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="font-semibold text-lg">All</span>
            </div>
            <DeleteOutlined style={{ color: "#ff0000", fontSize: "18px" }} />
          </div>
        </div>

        <div className="mb-4 p-5 bg-white rounded-2xl ml-px shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="font-semibold text-lg">All</span>
            </div>
            <DeleteOutlined style={{ color: "#ff0000", fontSize: "18px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
