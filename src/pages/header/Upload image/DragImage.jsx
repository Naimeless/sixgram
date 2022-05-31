import React, { useState } from "react";
import './UploadImage.css';
import { Button } from "react-bootstrap";
import apiImageUpload from "../../../api/profile/apiImageUpload";
import getToken from "../../../utils/getToken";

const url = 'http://192.168.0.122:91/api/v1/post';

const DragImage = () => {
    const [drag, setDrag] = useState(false);
    const token = getToken();
    const [imageSrc, setImageSrc] = useState();

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

    async function onDropHandler(e) {
        e.preventDefault()
            const formData = new FormData();
            const file = e.dataTransfer.files[0];
            formData.append('file', file, file.name);
            console.log(formData.getAll('file'));   
            if(e.dataTransfer.files !== 0) {
                const reader = new FileReader();
                reader.onload = (e) => {
                setImageSrc(e.currentTarget.result);
            }
            reader.readAsDataURL(file);
        }

            try{
                const response = await fetch(url, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                const result = await response.json();
                console.log("Успешно: ", JSON.stringify(result));
            } catch(error){
                console.error('Ошибка: ', error)
            }
        }

    return(
        <div className='app'>
        <Button variant="primary" style={{marginTop: "18px"}}>Send</Button>
        {drag
            ?<div
                className='drop-area'
                onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e => dragStartHandler(e)}
                onDrop={e => onDropHandler(e)}
            >Release files to download them</div>
            :<div style={{padding: '4rem'}}
                onDragStart={e => dragStartHandler(e)}
                onDragLeave={e => dragLeaveHandler(e)}
                onDragOver={e => dragStartHandler(e)}
            >Drag and drop files to upload them
            </div>
        }
        {imageSrc && <img src={imageSrc} className="imageSrc"/>}
    </div>
    )
};

export default DragImage