export const QUERY_KEYS = {
  TODO_LIST: ["todos"] as const,
  TODO_DETAIL: (id: string) => ["todos", id] as const,
};
