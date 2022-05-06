async function ApiSettings(){
    let response = await fetch ('https://api/v1/user/changeavatar')
    let content = await response.json() 
    
    console.log(content)

}

ApiSettings()
