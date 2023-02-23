import React, { ReactDOM, useDebugValue } from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from './App';

it('should increment a counter', () => {
    render(<App />);
    // we attach the element to document.body to ensure events work

    const button = screen.getByRole('button');

    act(() => {
        for (let i = 0; i < 3; i++) {
            userEvent.click(button);
        }
    });

    expect(button.innerHTML).toBe('3');
});
