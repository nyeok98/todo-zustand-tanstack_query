export enum PRIORITY {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

export type Todo = {
  id: string;
  completed: boolean;
  priority: PRIORITY;
  title: string;
  createdAt: Date;
};
