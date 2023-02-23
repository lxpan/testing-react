import React, { useState } from 'react';

export function Input(props) {
    const { handleChange, inputValue } = props;
    return <input onChange={handleChange} value={inputValue} />;
}

function App() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <Input handleChange={handleChange} inputValue={inputValue} />
        </div>
    );
}

export default App;
