import React from "react";

import type { ITabsState, ITask, TaskAction } from "../../types/task";

import { reducer } from "../../reducers/taskReducer";

const STORAGE_KEY = "task-manager-v1";

const loadInitialState = (): ITabsState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as ITabsState;
      return {
        ...parsed,
        tasks: parsed.tasks.map((t) => ({ ...t, createdAt: new Date(t.createdAt) })),
      };
    }
  } catch (err) {
    console.error("Failed to load state:", err);
  }

  return { tasks: [], activeTab: "all", search: "" };
};

interface TaskContextValue extends ITabsState {
  dispatch: React.ActionDispatch<[action: TaskAction]>;
  visibleTasks: ITask[];
}

const TaskContext = React.createContext<TaskContextValue | null>(null);

export const TaskContextProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = React.useReducer(reducer, undefined, loadInitialState);

  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // visibleTasks render UI phụ thuộc vào tab + search
  const visibleTasks = React.useMemo(() => {
    const kw = state.search.trim().toLowerCase();

    return state.tasks.filter((t) => {
      const matchSearch = kw ? t.name.toLowerCase().includes(kw) : true;

      if (state.activeTab === "complete") return t.completed && matchSearch;

      if (state.activeTab === "active") return !t.completed && matchSearch;

      return matchSearch;
    });
  }, [state.tasks, state.activeTab, state.search]);

  const value: TaskContextValue = { ...state, dispatch, visibleTasks };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const ctx = React.useContext(TaskContext);
  if (!ctx) throw new Error("useTodoContext must be used inside TodoContextProvider");
  return ctx;
};
