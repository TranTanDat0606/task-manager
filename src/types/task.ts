export type TabsKey = "all" | "active" | "complete";

export interface ITask {
  id: string;
  name: string;
  completed: boolean;
  createdAt: Date;
}

export interface ITabFilter {
  search: string;
  differen: boolean;
}

export interface ITabsState {
  tasks: ITask[];
  activeTab: TabsKey;
  filters: {
    active: ITabFilter;
    complete: ITabFilter;
  };
}

export type TaskAction =
  | { type: "ADD_TASK"; payload: { name: string } }
  | { type: "TOGGLE_TASK"; payload: { id: string } }
  | { type: "DELETE_TASK"; payload: { id: string } }
  | { type: "DELETE_ALL" }
  | { type: "SET_ACTIVE_TAB"; payload: { tab: TabsKey } }
  | { type: "SET_SEARCH"; payload: { tab: "active" | "complete"; keyword: string; differen: boolean } };
