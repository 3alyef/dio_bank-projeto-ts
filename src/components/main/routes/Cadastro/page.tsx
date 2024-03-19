import { useState } from "react"
import { Registrer } from "../../components/Registrer/page"
export const Cadastro = ()=>{
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');

    return(
        <div className="Home">
            <Registrer password={password} setPassword={setPassword} userType={1} setEmail={setEmail} email={email} name={name} password2={password2} setName={setName} setPassword2={setPassword2}/>
        </div>
    )
}