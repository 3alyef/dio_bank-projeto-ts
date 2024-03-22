import { globalVar } from '../../global/global-var';
interface loginProps {
    password: string;
    email: string;
}

const URL = 'http://localhost:1967'

export const login = async ({ password, email }: loginProps)=>{
    const dataLogin = {password: password, email: email};
    let status: boolean = false;

    try {
        const response = await fetch(`${URL}/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dataLogin)
        })

        const data = await response.json();
        globalVar.setData(data); // envia os dados da database para a variavel global
  
        status = true;  
        
    } catch(error) {
        console.log(error);
    }

    return status;
   
}  