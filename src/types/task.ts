export type TabsKey = "all" | "active" | "complete";

export interface ITask {
  id: string;
  name: string;
  completed: boolean;
  createdAt: Date;
}

export interface ITabsState {
  tasks: ITask[];
  activeTab: TabsKey;
  search: { active: string; complete: string };
  differen: { active: boolean; complete: boolean };
}

export type TaskAction =
  | { type: "ADD_TASK"; payload: { name: string } }
  | { type: "TOGGLE_TASK"; payload: { id: string } }
  | { type: "DELETE_TASK"; payload: { id: string } }
  | { type: "DELETE_ALL" }
  | { type: "SET_ACTIVE_TAB"; payload: { tab: TabsKey } }
  | { type: "SET_SEARCH"; payload: { keyword: string } }
  | { type: "SET_SEARCH_DIFFEREN"; payload: { searchDifferen: boolean } };
