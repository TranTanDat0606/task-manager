import React from "react";
import { WarningOutlined } from "@ant-design/icons";
import { useTaskContext } from "../../contexts/task/TaskContext";
import { useThemeContext } from "../../contexts/theme/ThemeContext";

const EmptyTask = () => {
  const { theme } = useThemeContext();
  const { activeTab, filters } = useTaskContext();

  const baseClass = `text-center py-12 ${theme === "light" ? "text-gray-400" : "text-gray-600"}`;

  if (activeTab === "all") {
    return <p className={baseClass}>No tasks yet. Add one above! 👆</p>;
  }

  const isDifferent = filters[activeTab]?.differen === true;

  if (isDifferent) {
    return (
      <p className={baseClass}>
        No have Task, Please double click button search again. <WarningOutlined style={{ color: "#ff000091" }} />
      </p>
    );
  }

  return (
    <p className={baseClass}>
      No tasks yet. <WarningOutlined style={{ color: "#ff000091" }} />
    </p>
  );
};

export default EmptyTask;
