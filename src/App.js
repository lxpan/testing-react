import React, { useState, useEffect } from 'react';

function App() {
    const [counter, setCounter] = useState(0);
    return <button onClick={() => setCounter((x) => x + 1)}>{counter}</button>;
}

export default App;
