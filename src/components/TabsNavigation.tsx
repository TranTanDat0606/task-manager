import { StarFilled, ThunderboltFilled, CheckSquareFilled } from "@ant-design/icons";
import { useState } from "react";
import AddTask from "./AddTask";
import SearchTask from "./SearchTask";
import { Tabs } from "antd";
import Tasks from "./Tasks";

export default function TaskManager() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    {
      key: "all",
      label: "All",
      icon: <StarFilled className="text-yellow-500" />,
      count: 0,
      gradient: "from-yellow-400 to-orange-500",
      children: <AddTask />,
    },
    {
      key: "active",
      label: "Active",
      icon: <ThunderboltFilled className="text-blue-500" />,
      count: 0,
      gradient: "from-blue-400 to-indigo-500",
      disabled: false,
      children: <SearchTask />,
    },
    {
      key: "complete",
      label: "Complete",
      icon: <CheckSquareFilled className="text-green-500" />,
      count: 0,
      gradient: "from-green-400 to-emerald-500",
      children: <SearchTask />,
    },
  ];

  const tabsWithLabel = tabs.map((t) => ({
    key: t.key,
    children: t.children,
    label: (
      <div
        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold border shadow-sm transition-all duration-500 ${
          activeTab === t.key
            ? `bg-gradient-to-r ${t.gradient} text-white border-transparent`
            : t.disabled
            ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
            : "bg-white border-slate-200 text-slate-600"
        }`}
      >
        {t.icon}
        {t.label} &nbsp; {t.count}
      </div>
    ),
    disabled: t.disabled || false,
  }));

  return (
    <>
      <Tabs
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        items={tabsWithLabel}
        tabBarGutter={16} // khoảng cách giữa tab
      />
      <Tasks />
    </>
  );
}
