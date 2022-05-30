import React, { useState } from "react";
import './UploadImage.css';
import apiImageUpload from "../../../api/profile/apiImageUpload";
import getToken from "../../../utils/getToken";

const url = 'http://192.168.0.122:90/api/v1/task/uploadfile';

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
        await apiImageUpload(url, formData, token)
        .then((data) => {debugger})
    }
   async function onDropHandler(e) {
        e.preventDefault()
        const formData = new FormData();
        const file = e.dataTransfer.files[0];
        // const file = new File(files, {
        //     type: "$binary"
        // });
        formData.append('file', file, file.name);
        imageUpload(formData);
        console.log(formData.getAll('file'));    

        try{
            const response = await fetch(url, {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            console.log("Успешно: ", JSON.stringify(result));
        } catch(error){
            console.error('Ошибка: ', error)
        }

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