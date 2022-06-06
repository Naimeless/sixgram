import React from "react";
import getToken from "./getToken";
import getIdUser from "./getIdUser";

const url = `http://192.168.0.122:85/api/v1/user/${userId}/changeavatar`;
const formData = new FormData();
const userId = getIdUser();
const token = getToken();   

async function onClicked(e) {
    e.preventDefault();
        try{
            const response = await fetch(url, {
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

export default onClicked