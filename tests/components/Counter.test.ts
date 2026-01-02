import { render, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Counter from '../../src/lib/components/Counter.svelte';

describe('Counter.svelte', () => {
  it('renders initial count', () => {
    const { getByText } = render(Counter, { props: { start: 5 } });
    expect(getByText('Count: 5')).toBeTruthy();
  });

  it('increments and decrements correctly', async () => {
    const { getByText } = render(Counter, { props: { start: 0 } });

    const incrementBtn = getByText('+');
    const decrementBtn = getByText('-');

    await fireEvent.click(incrementBtn);
    expect(getByText('Count: 1')).toBeTruthy();

    await fireEvent.click(decrementBtn);
    expect(getByText('Count: 0')).toBeTruthy();
  });
});
