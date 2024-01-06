import { useState } from 'react';

const DataEntry = () => {


    const [handledValue, setHandledValue] = useState('');
    const [incomingValue, setIncomingValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handledValue');
    }

    return (

        <div className='progyny_phones_container'>
            <h5>Progyny Phones</h5>

            <form onSubmit={handleSubmit} className='progyny_data_row'>
                <label htmlFor='handledValue'>
                    Handled Calls
                </label>
                <input type='text' id='handledValue' value={handledValue} onChange={(e) => setHandledValue(e.target.value)} />


                <label htmlFor='incomingValue'>
                    Incoming Calls
                </label>
                <input type='text' id='incomingValue' value={incomingValue} onChange={(e) => setIncomingValue(e.target.value)} />

                <button type='submit'>Submit</button>
            </form>


        </div>

    );
};

export default DataEntry;