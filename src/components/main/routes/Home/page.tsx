import { useState } from "react"
import { Registrer } from "../../components/Registrer/page"
export const Home = ()=>{
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    return(
        <div className="Home">
            <Registrer password={password} setPassword={setPassword} userType={0} setEmail={setEmail} email={email}/>
        </div>
    )
}