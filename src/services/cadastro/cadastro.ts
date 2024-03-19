
interface cadastroProps {
    password?: string, 
    email?: string,
    userName?: string
}

const URL = 'http://localhost:1967'


export const cadastro = ({ password, email, userName}: cadastroProps)=>{

    const newUser = { "name":userName, "email": email, "password": password }

    fetch(`${URL}/cadastrar`, {

        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser)

    }).then((resp)=>resp.json()).then((resp)=>resp.json()).then((data)=> console.log(data)).catch((error)=>console.log(`Error: ${error}`))
}