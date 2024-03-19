
interface loginProps {
    password: string, 
    email: string
}

const URL = 'http://localhost:1967'

export const login = ({ password, email }: loginProps)=>{
    const dataLogin = {password: password, email: email}
    fetch(`${URL}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dataLogin)
    }).then((resp)=>resp.json()).then().catch((error)=>console.log(`Error: ${error}`))
}  