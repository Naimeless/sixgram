import React, { useState } from "react";
import './UploadImage.css';
import apiImageUpload from "../../../api/profile/apiImageUpload";
import getToken from "../../../utils/getToken";

const DragImage = () => {
    const [drag, setDrag] = useState(false);
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
        await apiImageUpload('http://192.168.0.122:91/api/v1/post', formData, token)
        .then((data) => {debugger})
    }
   async function onDropHandler(e) {
        e.preventDefault()
        let file = e.dataTransfer.files[0];
        const formData = new FormData();
        // const file = new File(files, {
        //     type: "$binary"
        // });
        formData.append('image', file, file.name);

        // const response = await fetch(`http://192.168.0.122:91/api/v1/post`, {
        //     method: 'POST',
        //     body: formData
        // }).text();

        // console.log("Ответ сервера: " + response);
  
        // return response;
        imageUpload(formData)
    }

    return(
        <div className='app'>
            {drag
                ?<div
                    className='drop-area'
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                    onDrop={e => onDropHandler(e)}
                >Отпустите файлы, чтобы загрузить их</div>
                :<div style={{padding: '4rem'}}
                    onDragStart={e => dragStartHandler(e)}
                    onDragLeave={e => dragLeaveHandler(e)}
                    onDragOver={e => dragStartHandler(e)}
                >Перетащите файлы, чтобы загрузить их</div>
            }
        </div>
    )
}

export default DragImage