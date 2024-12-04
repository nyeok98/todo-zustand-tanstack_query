import {
  useQuery,
  UseQueryResult,
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { TODOS_QUERY_KEYS } from "../api/todos/queries";
import { fetchTodos, addTodo, deleteTodo } from "../api/todos/api";
import { Todo } from "../types/todo";

const allTodosQueryKey = { queryKey: TODOS_QUERY_KEYS.all };

export const useTodos = (): UseQueryResult<Todo[], Error> => {
  return useQuery({ ...allTodosQueryKey, queryFn: fetchTodos });
};

export const useAddTodo = (): UseMutationResult<Todo, Error, Todo> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTodo,
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries(allTodosQueryKey);
      const previousTodos = queryClient.getQueryData<Todo[]>(
        TODOS_QUERY_KEYS.all
      );
      if (previousTodos) {
        queryClient.setQueryData<Todo[]>(TODOS_QUERY_KEYS.all, [
          ...previousTodos,
          newTodo,
        ]);
      }

      return { previousTodos };
    },

    onError: (_, __, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(TODOS_QUERY_KEYS.all, context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(allTodosQueryKey);
    },
  });
};

export const useDeleteTodo = (): UseMutationResult<void, Error, string> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onMutate: async (id) => {
      await queryClient.cancelQueries(allTodosQueryKey);
      const previousTodos = queryClient.getQueryData<Todo[]>(
        TODOS_QUERY_KEYS.all
      );
      if (previousTodos) {
        queryClient.setQueryData<Todo[]>(
          TODOS_QUERY_KEYS.all,
          previousTodos.filter((todo) => todo.id !== id)
        );
      }

      return { previousTodos };
    },
    onError: () => {
      queryClient.invalidateQueries(allTodosQueryKey);
    },
    onSettled: () => {
      queryClient.invalidateQueries(allTodosQueryKey);
    },
  });
};
