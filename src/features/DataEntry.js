import { useState } from 'react';

const DataEntry = () => {


    const [formData, setFormData] = useState({
        handledValue: '',
        incomingValue: ''
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <div className='progyny_phones_container'>
                <h5>Progyny Phones</h5>

                <form onSubmit={handleSubmit} className='progyny_data_row'>
                    <label>
                        Handled Calls
                        <input type='text' name='handledValue' value={formData.handledValue} onChange={(e) => setFormData({
                            ...formData,
                            [e.target.name]: e.target.value
                        })} />
                    </label>

                    <label>
                        Incoming Calls
                        <input type='text' name='incomingValue' value={formData.incomingValue} onChange={(e) => setFormData({
                            ...formData,
                            [e.target.name]: e.target.value
                        })} />
                    </label>
                    <button type='submit'>Submit</button>
                </form>

            </div>


        </div>
    );
};

export default DataEntry;