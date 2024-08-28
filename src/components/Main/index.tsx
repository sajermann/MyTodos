import { useState } from 'react';
import { formatDateAndHour } from '../../utils/formatDate';
import { useTodo } from '../../hooks/useTodo';
import { useTranslation } from '../../hooks/useTranslation';

export function Main() {
  const [todoString, setTodoString] = useState('');
  const { todos, removeTodo, toggleCompleted, createTodo } = useTodo();
  const { translate } = useTranslation();

  return (
    <main className="w-full p-4">
      <div className="max-w-2xl m-auto flex flex-col gap-4">
        <form
          className="flex gap-4 justify-center"
          onSubmit={e => {
            e.preventDefault();
            createTodo(todoString);
            setTodoString('');
          }}
        >
          <input
            required
            placeholder={translate('TODOS_TITLE')}
            className="bg-transparent rounded-md p-4 border border-blue-500"
            type="text"
            value={todoString}
            onChange={e => setTodoString(e.target.value)}
          />
          <button
            className="bg-blue-500 rounded-md p-4 text-white"
            type="submit"
          >
            {translate('ADD')}
          </button>
        </form>

        <div className="flex flex-col gap-4 bg-zinc-950 text-white p-4 rounded-lg">
          <span className="text-2xl font-bold text-center ">Todos</span>
          {todos.map((todo, i) => (
            <div
              className="flex gap-4 items-center"
              key={`${todo.createdAt}-${todo.title}`}
            >
              <input
                checked={todo.completed}
                type="checkbox"
                className="w-7 h-7"
                onChange={() => toggleCompleted(i)}
              />
              <span
                className={`flex-1 text-ellipsis overflow-hidden ${
                  todo.completed ? 'italic line-through' : ''
                }`}
              >
                {todo.title}
              </span>
              <div className="flex gap-4 items-center">
                <span className="text-sm text-gray-500">
                  {formatDateAndHour(new Date(todo.updatedAt))}
                </span>
                <span className="">
                  <button
                    onClick={() => removeTodo(i)}
                    className="bg-red-500 text-white rounded-md p-4"
                    type="button"
                  >
                    {translate('DELETE')}
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
