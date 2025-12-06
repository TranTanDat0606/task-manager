import { useState } from "react";

import { StarFilled, ThunderboltFilled, CheckSquareFilled, DeleteFilled } from "@ant-design/icons";
import { message, Popconfirm, Tabs, type PopconfirmProps } from "antd";

import type { TabsKey } from "../types/task";

import { useThemeContext } from "../contexts/theme/ThemeContext";
import { useTaskContext } from "../contexts/task/TaskContext";

import Tasks from "./Tasks";
import AddTask from "./AddTask";
import SearchTask from "./SearchTask";

export default function TaskManager() {
  const { theme } = useThemeContext();
  const { tasks, dispatch } = useTaskContext();
  const [activeTab, setActiveTab] = useState<TabsKey>("all");

  const counts = {
    all: tasks.length,
    active: tasks.filter((t) => !t.completed).length,
    complete: tasks.filter((t) => t.completed).length,
  };

  const confirm: PopconfirmProps["onConfirm"] = () => {
    dispatch({ type: "DELETE_ALL" });
    message.success("All completed tasks deleted");
  };

  const tabs = [
    {
      key: "all",
      label: "All",
      icon: StarFilled,
      iconClass: "text-yellow-500!",
      count: counts.all,
      gradient: "from-yellow-400 to-orange-500",
      children: <AddTask />,
    },
    {
      key: "active",
      label: "Active",
      icon: ThunderboltFilled,
      iconClass: "text-blue-500!",
      count: counts.active,
      gradient: "from-blue-400 to-indigo-500",
      disabled: false,
      children: <SearchTask />,
    },
    {
      key: "complete",
      label: "Complete",
      icon: CheckSquareFilled,
      iconClass: "text-green-500!",
      count: counts.complete,
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
          className={`flex items-center ml-[2px] gap-2 px-4 py-2 rounded-xl font-semibold shadow-sm transition-all duration-500 ${
            activeTab === t.key
              ? `bg-gradient-to-r ${t.gradient} !text-white border-transparent ${(t.iconClass = "!text-white")}`
              : t.disabled
              ? "bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed"
              : "bg-white border-slate-200 text-slate-600"
          } 
          ${theme === "light" ? "bg-white" : "!bg-zinc-900 !text-white"}`}
        >
          <Icon className={activeTab === t.key ? "!text-white" : t.iconClass} />
          {t.label} &nbsp; {t.count}
        </div>
      ),
      disabled: t.disabled || false,
    };
  });

  const handleChangeTabs = (key: TabsKey) => {
    setActiveTab(key);
    dispatch({ type: "SET_ACTIVE_TAB", payload: { tab: key } });
  };

  return (
    <>
      <div className="relative">
        <Tabs
          activeKey={activeTab}
          onChange={(key) => handleChangeTabs(key as TabsKey)}
          items={tabsWithLabel}
          tabBarGutter={16}
        />

        <Popconfirm
          title="Delete all tasks"
          description="Are you sure to delete all tasks?"
          onConfirm={() => confirm()}
          okText="Yes"
          cancelText="No"
        >
          <div className="absolute top-3 right-0 px-4 py-[7px] rounded-xl font-semibold border shadow-sm cursor-pointer text-red-500">
            <DeleteFilled /> delete All
          </div>
        </Popconfirm>
      </div>
      <Tasks />
    </>
  );
}
