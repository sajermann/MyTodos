import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { DarkModeProvider } from './hooks/useDarkMode';
import { TodosProvider } from './hooks/useTodo';
import './config/i18n';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <TodosProvider>
        <Header />
        <Main />
      </TodosProvider>
    </DarkModeProvider>
  </StrictMode>
);
