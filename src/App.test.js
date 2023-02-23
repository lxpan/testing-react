import React from 'react';
import { waitFor, screen, render } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import App, { Input } from './App';

test('input value is updated correctly', async () => {
    render(<App />);

    const input = screen.getByRole('textbox');
    await waitFor(() => UserEvent.type(input, 'React'));

    expect(input.value).toBe('React');
});

test('call the callback every time input value is changed', () => {
    // mock the onChange callback function
    const handleChange = jest.fn();
    // render only Input component
    render(<Input handleChange={handleChange} inputValue="" />);

    const input = screen.getByRole('textbox');
    UserEvent.type(input, 'React');

    expect(handleChange).toHaveBeenCalledTimes(5);
});
