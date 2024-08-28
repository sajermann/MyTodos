import { Header } from './components/Header';
import { Main } from './components/Main';
import { DarkModeProvider } from './hooks/useDarkMode';
import { TodosProvider } from './hooks/useTodo';
import './config/i18n';

export function App() {
  return (
    <DarkModeProvider>
      <TodosProvider>
        <Header />
        <Main />
      </TodosProvider>
    </DarkModeProvider>
  );
}
