async function ApiAuthorization(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': 'http://192.168.0.122:85'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(response.title || 'INVALID USERNAME OR PASSWORD!');
        }
    
        return await response.json();
    }

  export {ApiAuthorization}