/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Header } from '.';
import '../../config/i18n';

describe('Components/Header', () => {
  it(`should render header text`, async () => {
    const { findByText } = render(<Header />);
    expect(await findByText('My TODOs')).not.toBeNull();
  });
});
