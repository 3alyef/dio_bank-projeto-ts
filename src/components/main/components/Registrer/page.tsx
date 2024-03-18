import React from 'react';
interface propsRg {
    userType: string,
    user?: string,
    setUser: React.Dispatch<React.SetStateAction<string>>,
    password?: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>
}

export const Registrer = ({userType, user, setUser, password, setPassword}: propsRg)=>{
    return(
        <>
            <div>
                <h1>Login</h1>
                <div>
                    <form action="#" method="post">
                        <fieldset>
                            <div className='emailUsCamp'>
                                <label htmlFor="email">Email</label>
                                <input type={userType} id="emailUser" value={user} onChange={(e)=>setUser(e.target.value)}/>
                            </div>
                            <div className="passwordCamp">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                        </fieldset>

                        <input type='submit' value={userType === 'password'? 'Login': 'Criar conta'}/>

                    </form>
                </div>
            </div>        
        </>
    )
}