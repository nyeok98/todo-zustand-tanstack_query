import {
  useQuery,
  UseQueryResult,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { QUERY_KEYS } from "../api/todos/queries";
import { fetchTodos, addTodo, deleteTodo } from "../api/todos/api";
import { Todo } from "../types/todo";

const todoListQueryKey = { queryKey: QUERY_KEYS.TODO_LIST };

export const useFetchTodos = (): UseQueryResult<Todo[], Error> => {
  return useQuery({ ...todoListQueryKey, queryFn: fetchTodos });
};

export const useAddTodo = (): UseMutationResult<Todo, Error, Todo> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTodo,
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries(todoListQueryKey);
      const previousTodos = queryClient.getQueryData<Todo[]>(
        QUERY_KEYS.TODO_LIST
      );
      if (previousTodos) {
        queryClient.setQueryData<Todo[]>(QUERY_KEYS.TODO_LIST, [
          ...previousTodos,
          newTodo,
        ]);
      }

      return { previousTodos };
    },

    onError: (_, __, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(QUERY_KEYS.TODO_LIST, context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(todoListQueryKey);
    },
  });
};

export const useDeleteTodo = (): UseMutationResult<void, Error, string> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onMutate: async (id) => {
      await queryClient.cancelQueries(todoListQueryKey);
      const previousTodos = queryClient.getQueryData<Todo[]>(
        QUERY_KEYS.TODO_LIST
      );
      if (previousTodos) {
        queryClient.setQueryData<Todo[]>(
          QUERY_KEYS.TODO_LIST,
          previousTodos.filter((todo) => todo.id !== id)
        );
      }

      return { previousTodos };
    },
    onError: () => {
      queryClient.invalidateQueries(todoListQueryKey);
    },
    onSettled: () => {
      queryClient.invalidateQueries(todoListQueryKey);
    },
  });
};
