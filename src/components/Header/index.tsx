import { SelectLanguage } from '../SelectLanguage';
import { ToggleDarkMode } from '../ToggleDarkMode';

export function Header() {
  return (
    <header className="w-full h-20 bg-zinc-950 text-white flex items-center justify-center px-4">
      <span className="flex-1 text-center text-4xl font-extrabold">
        My TODOs By Sajermann
      </span>
      <div className="flex gap-4">
        <ToggleDarkMode />
        <SelectLanguage />
      </div>
    </header>
  );
}
