import React from 'react';
import { act } from 'react-dom/test-utils';

function App() {
    const [counter, setCounter] = React.useState(0);

    const increment = () => {
        act(() => {
            setCounter((prevCounter) => prevCounter + 1);
        });
    };

    const decrement = () => {
        act(() => {
            setCounter((prevCounter) => prevCounter - 1);
        });
    };

    return (
        <div>
            <h2 data-testid="counter">{counter}</h2>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default App;
