import { describe, test, expect } from 'vitest';
import { formatDateAndHour } from '.';

describe('Validate formatDateAndHour', () => {
  test('Must result correct Date and Hour Format with parameter correct', () => {
    const fixture = '2021-05-31T12:30:00Z';
    const result = formatDateAndHour(new Date(fixture));
    expect(result).toEqual(
      new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }).format(new Date(fixture))
    );
  });

  test('Must result empty string with parameter incorrect', () => {
    const fixture = '0001-01-01T00:00:00';
    const result = formatDateAndHour(new Date(fixture));
    expect(result).toEqual('');
  });

  test('Must result empty string with parameter incorrect', () => {
    const result = formatDateAndHour(new Date(''));
    expect(result).toEqual('');
  });
});
