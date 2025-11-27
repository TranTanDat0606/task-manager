import { StarFilled, ThunderboltFilled, CheckSquareFilled, DeleteFilled } from "@ant-design/icons";
import { useState } from "react";
import AddTask from "./AddTask";
import SearchTask from "./SearchTask";
import { Popconfirm, Tabs } from "antd";
import Tasks from "./Tasks";

export default function TaskManager() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    {
      key: "all",
      label: "All",
      icon: StarFilled,
      iconClass: "text-yellow-500!",
      count: 0,
      gradient: "from-yellow-400 to-orange-500",
      children: <AddTask />,
    },
    {
      key: "active",
      label: "Active",
      icon: ThunderboltFilled,
      iconClass: "text-blue-500!",
      count: 0,
      gradient: "from-blue-400 to-indigo-500",
      disabled: false,
      children: <SearchTask />,
    },
    {
      key: "complete",
      label: "Complete",
      icon: CheckSquareFilled,
      iconClass: "text-green-500!",
      count: 0,
      gradient: "from-green-400 to-emerald-500",
      children: <SearchTask />,
    },
  ];

  const tabsWithLabel = tabs.map((t) => {
    const Icon = t.icon;

    return {
      key: t.key,
      children: t.children,
      label: (
        <div
          className={`flex items-center ml-[2px] gap-2 px-4 py-2 rounded-xl font-semibold border shadow-sm transition-all duration-500 ${
            activeTab === t.key
              ? `bg-gradient-to-r ${t.gradient} !text-white border-transparent ${(t.iconClass = "!text-white")}`
              : t.disabled
              ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
              : "bg-white border-slate-200 text-slate-600"
          }`}
        >
          <Icon className={activeTab === t.key ? "!text-white" : t.iconClass} />
          {t.label} &nbsp; {t.count}
        </div>
      ),
      disabled: t.disabled || false,
    };
  });

  return (
    <>
      <div className="relative">
        <Tabs activeKey={activeTab} onChange={(key) => setActiveTab(key)} items={tabsWithLabel} tabBarGutter={16} />

        <Popconfirm
          title="Delete all tasks"
          description="Are you sure to delete all tasks?"
          okText="Yes"
          cancelText="No"
        >
          <div
            className="absolute top-3 right-2 px-4 py-[7px] rounded-xl font-semibold border shadow-sm cursor-pointer text-red-500"
            onClick={() => {}}
          >
            <DeleteFilled /> delete All
          </div>
        </Popconfirm>
      </div>
      <Tasks />
    </>
  );
}
