import { useState } from 'react';

const DataEntry = () => {

    const [uploadedImg, setUploadedImg] = useState(null);

    const handleUploadedImage = e => {
        setUploadedImg(e.target.files[0]);
    }



    return (

        <div className='progyny_phones_container'>
            <label htmlFor='uploadImage'>
                Upload Data:
            </label>
            <input id='uploadedImage' type='file' accept='image/*' onChange={handleUploadedImage} />


            {uploadedImg && (
                <div>
                    <img src={URL.createObjectURL(uploadedImg)} alt='user uploaded image' />
                </div>
            )}




        </div>

    );
};

export default DataEntry;