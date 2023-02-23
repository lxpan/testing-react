import React, { ReactDOM, useDebugValue } from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from './App';

// it('should tick to a new value', () => {
//     jest.useFakeTimers();

//     render(<App />);

//     const div = document.querySelector('div');
//     expect(div.innerHTML).toBe('0');

//     act(() => {
//         jest.runAllTimers();
//     });

//     expect(div.innerHTML).toBe('1');
// });

it('should tick to a new value - real timers', async () => {
    // a helper to use promises with timeouts
    function sleep(period) {
        return new Promise((resolve) => setTimeout(resolve, period));
    }

    render(<App />);

    const div = document.querySelector('div');
    expect(div.innerHTML).toBe('0');

    await act(async () => {
        await sleep(1100);
    });

    expect(div.innerHTML).toBe('1');
});
