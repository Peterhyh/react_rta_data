import { useState } from 'react';

const DataEntry = () => {

    const [word, setWord] = useState();

    const handleTextChange = (value) => {
        setWord(value);
    };


    return (
        <div>
            <input
                type="text"
                value={word}
                onChange={handleTextChange}
            />
            <p>{word}</p>
        </div>
    );
};

export default DataEntry;