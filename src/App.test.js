import React, { ReactDOM, useDebugValue } from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from './App';

it('should display fetched data', async () => {
    // a rather simple mock, you might use something more advanced for your needs
    let resolve;
    global.fetch = () => new Promise((_resolve) => {
        resolve = _resolve;
    });

    act(() => {
        render(<App />);
    });

    const el = document.querySelector('div');

    expect(el.innerHTML).toBe('');

    await act(async () => {
        resolve(42);
    });

    expect(el.innerHTML).toBe('42');
});
