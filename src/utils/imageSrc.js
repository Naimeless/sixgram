import React, { useState } from "react";

const formData = new FormData();

const ImageSrc = () => {
    const [imageSrcs, setImageSrcs] = useState();

    async function onDropHandler(e) {
        e.preventDefault()
            const file = e.dataTransfer.files[0];
            formData.append('file', file, file.name);
            console.log(formData.getAll('file'));   
            if(e.dataTransfer.files !== 0) {
                const reader = new FileReader();
                reader.onload = (e) => {
                setImageSrcs(e.currentTarget.result);
            }
            reader.readAsDataURL(file);
        }
    }

    return(
        <>
         {imageSrcs ? 
        <>
        <img src={imageSrcs}/>
        </>
        : <div/>}
        </>
    )
};

export default ImageSrc