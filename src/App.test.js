// App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// describe('App component', () => {
//     it('renders correct heading', () => {
//         const { getByRole } = render(<App />);
//         // expect(getByRole('heading').textContent).toMatch(/our first test/i);
//         expect(getByRole('heading', { name: 'Our First Test' }));
//     });
// });

describe('App component', () => {
    // snapshot testing is to make sure the UI doesn't change unexpectedly
    it('renders magnificent monkeys', () => {
        /* since screen does not have the container property,
        we'll destructure render to obtain container for this test */
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    });

    it('renders radical rhinos after button click', () => {
        render(<App />);
        const button = screen.getByRole('button', { name: 'Click Me' });

        userEvent.click(button);

        expect(screen.getByRole('heading').textContent).toMatch(/radical rhinos/i);
    });
});
