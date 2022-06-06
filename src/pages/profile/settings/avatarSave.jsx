import React from "react";
import ApiAvatar from "../../../api/profile/ApiAvatar";
import getToken from "../../../utils/getToken";
import getIdUser from "../../../utils/getIdUser";

const avatarSave = () => {
    const userId = getIdUser()
    const urlUser = `http://192.168.0.122:85/api/v1/user/${userId}/changeavatar`;
    const formData = new FormData();
    const token = getToken();

    async function imageUpload (formData) {
        await ApiAvatar(urlUser, formData, token)
        .then((data) => {debugger})
    }

    async function avatar(e) {
        e.preventDefault()
            const file = e.dataTransfer.files[0];
            formData.append('file', file, file.name);
            console.log(formData.getAll('file'));   
        }

        async function onClicked(e) {
            e.preventDefault();
                try{
                    const response = await fetch(urlUser, {
                        method: 'PATCH',
                        body: formData,
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    });
                    const result = await response.json();
                    console.log("Успешно: ", JSON.stringify(result));} 
                    
                catch(error){
                console.error('Ошибка: ', error)
            }
        }
    }

export default avatarSave