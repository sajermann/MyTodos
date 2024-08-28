import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { TTodo } from '../../types/todo';

const IDENTIFIER = '@my-todos:todos';

type TodosContextType = {
  todos: TTodo[];
  createTodo: (title: string) => void;
  toggleCompleted: (data: number) => void;
  removeTodo: (data: number) => void;
};

const todosContextDefaultValues: TodosContextType = {} as TodosContextType;

const TodosContext = createContext<TodosContextType>(todosContextDefaultValues);

export function useTodo() {
  return useContext(TodosContext);
}

type Props = {
  children: ReactNode;
};

export function TodosProvider({ children }: Props) {
  const [todos, setTodos] = useState<TTodo[]>([]);

  function saveTodosLocalStorage(dataToSave: TTodo[]) {
    localStorage.setItem(IDENTIFIER, JSON.stringify(dataToSave));
  }

  function loadTodosLocalStorage() {
    const result = localStorage.getItem(IDENTIFIER);
    if (result) {
      setTodos(JSON.parse(result));
    }
  }

  function toggleCompleted(indexTodo: number) {
    const data = [...todos];
    data[indexTodo].completed = !data[indexTodo].completed;
    data[indexTodo].updatedAt = new Date().toISOString();
    setTodos(data);
    saveTodosLocalStorage(data);
  }

  function createTodo(titleTodo: string) {
    setTodos(prev => {
      const data = [
        ...prev,
        {
          completed: false,
          title: titleTodo,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];
      saveTodosLocalStorage(data);
      return data;
    });
  }

  function removeTodo(indexTodo: number) {
    const data = [...todos];
    data.splice(indexTodo, 1);
    setTodos(data);
    saveTodosLocalStorage(data);
  }

  useEffect(() => {
    loadTodosLocalStorage();
  }, []);

  const memoizedValue = useMemo(
    () => ({
      todos,
      toggleCompleted,
      removeTodo,
      createTodo,
    }),
    [todos]
  );

  return (
    <TodosContext.Provider value={memoizedValue}>
      {children}
    </TodosContext.Provider>
  );
}
