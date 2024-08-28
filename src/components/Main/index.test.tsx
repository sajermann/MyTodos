/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Main } from '.';
import '../../config/i18n';
import { TodosProvider } from '../../hooks/useTodo';

describe('Components/Main', () => {
  it(`should test crud`, async () => {
    const { findByText, findByPlaceholderText, container } = render(
      <TodosProvider>
        <Main />
      </TodosProvider>
    );
    const input = await findByPlaceholderText(`Todo's Title`);
    const submit = await findByText(`Add`);
    fireEvent.change(input, { target: { value: `Test Todo` } });
    fireEvent.click(submit);
    expect(findByText(`Test Todo`)).not.toBeNull();

    const checkbox = container.querySelector('[type="checkbox"]');
    expect(checkbox).not.toBeNull();
    fireEvent.click(checkbox!);
    const textThrough = container.querySelector('.line-through');
    expect(textThrough).not.toBeNull();

    const deleteButton = await findByText(`Delete`);
    fireEvent.click(deleteButton);
    const textThrough2 = container.querySelector('.line-through');
    expect(textThrough2).toBeNull();
  });
});
