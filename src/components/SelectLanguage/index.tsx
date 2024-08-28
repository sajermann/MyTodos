import { ChangeEvent, useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const LANGUAGES_LIST = [
  { id: 'en', text: 'EN' },
  { id: 'pt-BR', text: 'PT-BR' },
];

export function SelectLanguage() {
  const { changeLanguage, currentLanguage } = useTranslation();
  const [language, setLanguage] = useState(currentLanguage);

  function handleChangeLanguage(e: ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    setLanguage(value);
    changeLanguage(value);
  }

  return (
    <select
      data-testid="selectLanguage"
      className="bg-transparent border border-blue-500 p-4 rounded flex justify-between items-center"
      onChange={handleChangeLanguage}
      defaultValue={language}
    >
      {LANGUAGES_LIST.map(item => (
        <option className="bg-zinc-950" value={item.id} key={item.id}>
          {item.text}
        </option>
      ))}
    </select>
  );
}
