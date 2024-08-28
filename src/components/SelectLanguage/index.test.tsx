/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { useTranslation } from '../../hooks/useTranslation';
import { SelectLanguage } from '.';
import '../../config/i18n';

function Mock() {
  const { translate } = useTranslation();
  return (
    <>
      <span>{translate('ADD')}</span>
      <SelectLanguage />
    </>
  );
}

describe('Components/SelectLanguage', () => {
  it(`should change language`, async () => {
    const { getByTestId, debug, findByText } = render(<Mock />);
    const select = getByTestId('selectLanguage') as HTMLSelectElement;
    await fireEvent.change(select, { target: { value: 'pt-BR' } });
    expect(await findByText('Adicionar')).not.toBeNull();
    await fireEvent.change(select, { target: { value: 'en' } });
    expect(await findByText('Add')).not.toBeNull();
    debug();
  });
});
