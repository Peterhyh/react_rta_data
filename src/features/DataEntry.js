import { useState } from 'react';

const DataEntry = () => {

    const [handledValue, setHandledValue] = useState('');
    const [incomingValue, setIncomingValue] = useState('');

    const tableData = {
        incoming: '',
        handled: '',
    };

    const [data, setData] = useState(tableData);


    const handleSubmit = (e) => {
        e.preventDefault();


        setData({
            ...data,
            incoming: incomingValue,
            handled: handledValue
        });
    }


    return (

        <div className='progyny_phones_container'>
            <h5>Calls</h5>

            <form onSubmit={handleSubmit} className='progyny_data_row'>

                <label htmlFor='incomingValue'>
                    Incoming Calls
                </label>
                <input type='text' id='incomingValue' value={incomingValue} onChange={(e) => setIncomingValue(e.target.value)} />

                <label htmlFor='handledValue'>
                    Handled Calls
                </label>
                <input type='text' id='handledValue' value={handledValue} onChange={(e) => setHandledValue(e.target.value)} />

                <button type='submit'>Submit</button>
            </form>
            <table className='call_table_container'>
                <tr>
                    <th>Call Logs</th>
                </tr>
                <tr>
                    <td>
                        <h5>Incoming</h5>
                        <p>{data.incoming}</p>
                        <h5>Handled</h5>
                        <p>{data.handled}</p>
                    </td>
                </tr>
            </table>


        </div>

    );
};

export default DataEntry;