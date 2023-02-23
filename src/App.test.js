import React from 'react';
import { waitFor, screen, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import UserEvent from '@testing-library/user-event';
import App from './App';
import Input from './App';

test('input value is updated correctly', async () => {
    render(<App />);

    const input = screen.getByRole('textbox');

    await waitFor(() => UserEvent.type(input, 'Foobar Jones'));

    expect(input.value).toBe('Foobar Jones');
});

test('call the callback every time input value is changed', async () => {
    // mock the onChange callback function
    const handleChange = jest.fn();

    // render only Input component
    render(<Input handleChange={handleChange} inputValue="" />);

    const input = screen.getByRole('textbox');

    await waitFor(() => UserEvent.type(input, 'React'));

    await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(5));
});
