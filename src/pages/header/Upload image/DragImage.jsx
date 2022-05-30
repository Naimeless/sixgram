import React, { useState } from "react";
import axios from "axios";
import './UploadImage.css';
import apiImageUpload from "../../../api/profile/apiImageUpload";
import getToken from "../../../utils/getToken";

const url = 'http://192.168.0.122:90/api/v1/task/uploadfile';

const DragImage = () => {
    const [drag, setDrag] = useState(false);
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState();

    const token = getToken();

    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }

    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    async function imageUpload (formData) {
        await apiImageUpload(url, formData, token)
        .then((data) => {debugger})
    }
    const saveFile = (e) => {
        e.preventDefault();
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

        const uploadFile = async (e) => {
            console.log(file);
            const formData = new FormData();
            formData.append('formFile', file);
            formData.append('fileName', fileName);
            imageUpload(formData);

            try{
                const res = await axios(url, formData);
                console.log(res);
            } catch(ex){
                console.error(ex)
            }
        }

    return(
        <div className='app'>
           <input type="file" onChange={saveFile}></input>
           <input type="button" value="upload" onClick={uploadFile}></input>
        </div>
    )
};

export default DragImage