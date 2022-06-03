async function userApi(url = '', token) {
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': 'http://192.168.0.122:85',
            'Authorization': 'Bearer ' + token
            // 'Access-Control-Allow-Credentials': 'true'
        },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error('error load posts')
            }
            return await response.json();
        }
  
export default userApi