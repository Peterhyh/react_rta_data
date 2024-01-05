import { useState } from 'react';

const DataEntry = () => {

    const [word, setWord] = useState();


    return (
        <div>
            <input
                type="text"
                value={word}
                onChange={(e) => setWord(e.target.value)}
            />
            <p>{word}</p>
        </div>
    );
};

export default DataEntry;