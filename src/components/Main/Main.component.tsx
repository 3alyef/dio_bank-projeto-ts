import { enviar } from "../../functions/Enviar.function";
import Card from "../sub_components/Card.component";
import { useState } from "react";
const Main = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return(
        <main className="main">
            <div className="centralize">
                <Card func={enviar} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
            </div>
        </main>
    )
}

export { Main };