import { render, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Button from '../../src/lib/components/Button.svelte';

describe('Button.svelte', () => {
    it('renders with default text', () => {
        const { getByText } = render(Button, { props: { label: 'Click me' } });
        expect(getByText('Click me')).toBeTruthy();
    });

    it('fires click event', async () => {
        const { getByText, component } = render(Button, { props: { label: 'Go' } });
        const btn = getByText('Go');
        let clicked = false;

        component.$on('click', () => (clicked = true));
        await fireEvent.click(btn);
        expect(clicked).toBe(true);
    });
});