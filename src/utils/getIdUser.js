import React from 'react';
import getToken from './getToken';

const getIdUser = () => {
    const token = getToken();
    async function getResponse() {
        let response = await fetch(`http://192.168.0.122:85/api/v1/user/${token}`);
        let content = await response.JSON()
        console.log(content)
    }
    return(
        <></>
    )
}

export default getIdUser