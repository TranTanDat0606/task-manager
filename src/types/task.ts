export type TabsKey = "all" | "active" | "completed";

export interface ITask {
  id: string;
  name: string;
  completed: boolean;
  createdAt: Date;
}

export interface ITabsState {
  tabs: ITask[];
  activeTab: TabsKey;
  search: string;
}
