import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('/some/url').then(setData);
    }, []);
    return data;
}

export default App;
