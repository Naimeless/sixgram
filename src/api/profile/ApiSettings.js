async function ApiSettings(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': 'http://192.168.0.122:85',
            // 'Access-Control-Allow-Credentials': 'true'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
        });
        return await response.json();
    }
  
  export default ApiSettings


//  http://192.168.0.122:85/api/v1/user/{id}/post
