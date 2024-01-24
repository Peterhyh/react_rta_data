import { useState } from 'react';

const DataEntry = () => {

    const [file, setFile] = useState('');

    const tableData = {
        incoming: '',
        handled: '',
    };

    const [data, setData] = useState(tableData);


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(file);
        setData({
            ...data,
            incoming: file,
        });
    }


    return (

        <div className='progyny_phones_container'>
            <h1>Call Log</h1>

            <form onSubmit={handleSubmit} className='progyny_data_row'>

                <label htmlFor='incomingValue'>
                    Upload Data
                </label>
                <input type='file' id='incomingValue' value={file} onChange={(e) => setFile(e.target.value)} />

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
                            <h5>Incoming</h5>
                            <p>{data.incoming}</p>
                            <h5>Handled</h5>
                            <p>{data.handled}</p>
                        </td>
                    </tr>
                </tbody>
            </table>


        </div>

    );
};

export default DataEntry;