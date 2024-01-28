import { useState, useEffect } from 'react';
import { createWorker } from 'tesseract.js';

const DataEntry = () => {

    const [uploadedImg, setUploadedImg] = useState(null);
    const [textResult, setTextResult] = useState('');

    const handleUploadedImage = e => {
        setUploadedImg(e.target.files[0]);
    }



    const convertImageToText = async () => {
        const worker = await createWorker("eng");
        const ret = await worker.recognize(uploadedImg);
        const data = ret.data.text
        console.log(data);
        setTextResult(data);
        await worker.terminate();
    }

    useEffect(() => {
        convertImageToText();
    }, [uploadedImg])


    return (

        <div className='progyny_phones_container'>
            <label htmlFor='uploadImage'>
                Data Chart:
            </label>
            <input id='uploadedImage' type='file' accept='image/*' onChange={handleUploadedImage} />

            {textResult && (
                <div>
                    <p>{textResult}</p>
                </div>
            )}




        </div>

    );
};

export default DataEntry;