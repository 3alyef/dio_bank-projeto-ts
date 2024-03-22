import React from 'react';
import { login } from '../../../../services/login/login';
import { cadastro } from '../../../../services/cadastro/cadastro';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTrueIsLogged, setFalseIsLogged } from '../../../../features/global/isLogged';
interface propsRg {
    userType: number; // 0 === Login; 1 === Cadastro
    name?: string;
    setName?: React.Dispatch<React.SetStateAction<string>> | any;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    password2?: string;
    setPassword2?: React.Dispatch<React.SetStateAction<string>> | any;
    id: string

}

export const Registrer = ({userType, password, setPassword, email, setEmail, password2, setPassword2, name, setName, id}: propsRg)=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const isLogged: boolean = useSelector((state: any) => state.isLogged.value);  // recebe se esta logado ou nao 
    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if( userType === 1 ){
            cadastro({password, email, userName: name });
        } else {
            const isOk: boolean = await login({ password, email });
            if(isOk){
                dispatch(setTrueIsLogged());
                navigate('/behance');
            } else {
                dispatch(setFalseIsLogged());
            }
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
                                    <label htmlFor={`name-${id}`}>Name:</label>
                                    <input type="text" id={`name-${id}`} value={name} onChange={(e)=>setName(e.target.value)}/>
                                    </div>
                                )
                            }
                            <div className='emailUsCamp'>
                                <label htmlFor={`email-${id}`}>Email</label>
                                <input type="email" id={`email-${id}`} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="passwordCamp">
                                <label htmlFor={`password-${id}`}>Password:</label>
                                <input type="password" id={`password-${id}`} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            </div>

                            {
                                userType === 1&&(
                                    <div className="passwordCamp">
                                        <label htmlFor={`password2-${id}`}>Repeat your password:</label>
                                        <input type="password" id={`password2-${id}`} value={password2} onChange={(e)=>setPassword2(e.target.value)}/>
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