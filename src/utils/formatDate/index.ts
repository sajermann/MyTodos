export function formatDateAndHour(date: Date): string {
  try {
    if (date.toISOString().indexOf('0001-01-01') === 0) {
      return '';
    }
    const result = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }).format(new Date(date));
    return result;
  } catch {
    return '';
  }
}
