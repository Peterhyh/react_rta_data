import { useState } from 'react';

const DataEntry = () => {


    const [handledValue, setHandledValue] = useState('');
    const [incomingValue, setIncomingValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("test");
    }

    return (
        <div>
            <div className='progyny_phones_container'>
                <h5>Progyny Phones</h5>

                <form onSubmit={handleSubmit} className='progyny_data_row'>
                    <label>
                        Handled Calls
                        <input type='text' name='handledValue' value={handledValue} onChange={(e) => { setHandledValue(e.target.value) }} />
                    </label>

                    <label>
                        Incoming Calls
                        <input type='text' name='incomingValue' value={incomingValue} onChange={(e) => { setIncomingValue(e.target.value) }} />
                    </label>

                </form>
                <button type='submit'>Submit</button>

            </div>


        </div>
    );
};

export default DataEntry;