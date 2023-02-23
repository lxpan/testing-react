import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState(null);
    async function somethingAsync() {
        // this time we use the await syntax
        const response = await fetch('/some/url');
        setData(response);
    }
    useEffect(() => {
        somethingAsync();
    }, []);
    return data;
}
export default App;
