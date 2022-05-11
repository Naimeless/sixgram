async function ApiSettings(){
    let response = await fetch ('https://virtserver.swaggerhub.com/math-god/Sixgram.Auth/1.0/api/v1/user/changeavatar')
    let content = await response.json() 
    
    console.log(content)

}

ApiSettings()
