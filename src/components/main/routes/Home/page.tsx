import { useState } from "react"
import { Registrer } from "../../components/Registrer/page"
export const Home = ()=>{
    const [password, setPassword] = useState<string>('');
    const [user, setUser] = useState<string>('');
    return(
        <div className="Home">
            <Registrer password={password} setPassword={setPassword} setUser={setUser} user={user} userType="login"/>
        </div>
    )
}