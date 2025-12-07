import React from "react";
import { reducer } from "../../reducers/taskReducer";
import type { ITabsState, ITask, TaskAction } from "../../types/task";

const STORAGE_KEY = "task-manager-v1";

const loadInitialState = (): ITabsState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (raw) {
      const parsed = JSON.parse(raw) as ITabsState;

      return {
        ...parsed,
        tasks: parsed.tasks.map((t) => ({ ...t, createdAt: new Date(t.createdAt) })),

        filters: {
          active: {
            search: parsed.filters?.active?.search ?? "",
            differen: parsed.filters?.active?.differen ?? false,
          },
          complete: {
            search: parsed.filters?.complete?.search ?? "",
            differen: parsed.filters?.complete?.differen ?? false,
          },
        },
      };
    }
  } catch (err) {
    console.error("Failed to load state:", err);
  }

  return {
    tasks: [],
    activeTab: "all",
    filters: {
      active: { search: "", differen: false },
      complete: { search: "", differen: false },
    },
  };
};

interface TaskContextValue extends ITabsState {
  dispatch: React.ActionDispatch<[action: TaskAction]>;
  visibleTasks: ITask[];
}

const TaskContext = React.createContext<TaskContextValue | null>(null);

export const TaskContextProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = React.useReducer(reducer, undefined, loadInitialState);

  // Save to localStorage
  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // Compute visible tasks
  const visibleTasks = React.useMemo(() => {
    if (state.activeTab === "all") return state.tasks;

    const { search, differen } = state.filters[state.activeTab];
    const kw = search.trim().toLowerCase();

    return state.tasks.filter((t) => {
      const matchSearch = kw ? t.name.toLowerCase().includes(kw) : true;

      const matchTab = state.activeTab === "complete" ? t.completed : !t.completed;

      const matchDifferen = differen ? t.name.length % 2 === 0 : true; // ví dụ rule

      return matchSearch && matchTab && matchDifferen;
    });
  }, [state.tasks, state.activeTab, state.filters]);

  const value: TaskContextValue = { ...state, dispatch, visibleTasks };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  const ctx = React.useContext(TaskContext);
  if (!ctx) throw new Error("useTodoContext must be used inside TodoContextProvider");
  return ctx;
};
