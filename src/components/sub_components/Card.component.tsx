import React from 'react';

interface CardProps {
    func: any;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export default function Card(props:CardProps){
    return(
        <>
            <div className="container">
                <form action="#" method="post">
                    <fieldset>
                        <div>
                            <label htmlFor="email">
                                Email:
                            </label>
                            <input type="email" id='email' value={props.email} onChange={(e)=>props.setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="password">
                                Senha:
                            </label>
                            <input type="password" id='password'/>
                        </div>
                    </fieldset>
                    <input type="submit" value="Entrar" onChange={(e)=>props.func(e, props.email, props.password)}/>
                </form>
            </div>
        </>
    )
}