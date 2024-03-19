import React from 'react';
import { login } from '../../../../services/login/login';
import { cadastro } from '../../../../services/cadastro/cadastro';
interface propsRg {
    userType: number, // 0 === Login; 1 === Cadastro
    name?: string,
    setName?: React.Dispatch<React.SetStateAction<string>> | any,
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    password2?: string,
    setPassword2?: React.Dispatch<React.SetStateAction<string>> | any

}

export const Registrer = ({userType, password, setPassword, email, setEmail, password2, setPassword2, name, setName}: propsRg)=>{

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if( userType === 1 ){
            cadastro({password, email, userName: name })
        } else {
            login({ password, email })
        }
        
    }

    return(
        <>
            <div className='cardRegistrer'>
                <h2>{userType === 1?"Cadastro":"Login"} :</h2>
                <div className='cardForm'>
                    <form onSubmit={handleOnSubmit}>
                        <fieldset>
                            {
                                userType === 1&&(
                                    <div className='UsCamp'>
                                    <label htmlFor="nameUser">Name:</label>
                                    <input type="text" id="nameUser" value={name} onChange={(e)=>setName(e.target.value)}/>
                                    </div>
                                )
                            }
                            <div className='emailUsCamp'>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="emailUser" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="passwordCamp">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            </div>

                            {
                                userType === 1&&(
                                    <div className="passwordCamp">
                                        <label htmlFor="password2">Repeat your password:</label>
                                        <input type="password" id="password" value={password2} onChange={(e)=>setPassword2(e.target.value)}/>
                                    </div>
                                )
                            }
                        </fieldset>

                        <input type='submit' value={userType === 1? 'Criar conta' : 'Login'}/>

                    </form>
                </div>
            </div>        
        </>
    )
}