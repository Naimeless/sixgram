async function ApiSettings(){
    let response = await fetch ('http://192.168.0.122:85/api/v1/user/changeavatar')
    let content = await response.json() 
    
    console.log(content)

}

ApiSettings()
