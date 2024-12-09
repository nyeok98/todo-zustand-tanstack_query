export enum PRIORITY {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export type Todo = {
  id: string;
  completed: boolean;
  priority: PRIORITY;
  title: string;
  createdAt: Date;
};
