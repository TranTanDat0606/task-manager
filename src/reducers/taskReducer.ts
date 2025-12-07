import type { ITabsState, ITask, TaskAction } from "../types/task";
import { v4 as uuidv4 } from "uuid";

export const reducer = (state: ITabsState, action: TaskAction): ITabsState => {
  switch (action.type) {
    case "ADD_TASK": {
      const newTask: ITask = {
        id: uuidv4(),
        name: action.payload.name.trim(),
        completed: false,
        createdAt: new Date(),
      };
      return { ...state, tasks: [...state.tasks, newTask] };
    }
    case "TOGGLE_TASK": {
      return {
        ...state,
        tasks: state.tasks.map((t) => (t.id === action.payload.id ? { ...t, completed: !t.completed } : t)),
      };
    }
    case "DELETE_TASK": {
      return { ...state, tasks: state.tasks.filter((t) => t.id !== action.payload.id) };
    }
    case "DELETE_ALL": {
      return {
        ...state,
        tasks: [],
        search: { active: "", complete: "" },
        differen: { active: false, complete: false },
      };
    }
    case "SET_ACTIVE_TAB": {
      return { ...state, activeTab: action.payload.tab };
    }
    case "SET_SEARCH": {
      return {
        ...state,
        search: {
          ...state.search,
          [state.activeTab]: action.payload.keyword,
        },
      };
    }

    case "SET_SEARCH_DIFFEREN": {
      return {
        ...state,
        differen: {
          ...state.differen,
          [state.activeTab]: action.payload.searchDifferen,
        },
      };
    }

    default:
      return state;
  }
};
