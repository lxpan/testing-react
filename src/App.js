import React, { useState, useEffect } from 'react';

function App() {
    const [ctr, setCtr] = useState(0);
    useEffect(() => {
        setTimeout(() => setCtr(1), 1000);
    }, []);
    return ctr;
}

export default App;
