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
        setHandledValue('');
        setIncomingValue('');

        setData({
            ...data,
            incoming: incomingValue,
            handled: handledValue
        });
    }


    return (

        <div className='progyny_phones_container'>
            <h1>Calls</h1>

            <form onSubmit={handleSubmit} className='progyny_data_row'>

                <label htmlFor='incomingValue'>
                    Incoming Calls
                </label>
                <input type='text' id='incomingValue' value={incomingValue} onChange={(e) => setIncomingValue(e.target.value)} />

                <label htmlFor='handledValue'>
                    Handled Calls
                </label>
                <input type='text' id='handledValue' value={handledValue} onChange={(e) => setHandledValue(e.target.value)} />

                <button type='submit'>Save</button>
            </form>
            <table className='call_table_container'>
                <thead>
                    <tr>
                        <th>Call Logs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h4>Incoming</h4>
                            <p>{data.incoming}</p>
                            <h4>Handled</h4>
                            <p>{data.handled}</p>
                        </td>
                    </tr>
                </tbody>
            </table>


        </div>

    );
};

export default DataEntry;