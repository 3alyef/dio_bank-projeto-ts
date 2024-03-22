import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
export const Header = ()=>{
    const isLogged: boolean = useSelector((state: any) => state.isLogged.value);  // recebe se esta logado ou nao 

    return(
        <header className="flex flex-col items-center">
            <h1>Dio Bank</h1>
            <nav> 
                <Link to="/"><p className="link">Home</p></Link>
                {isLogged && (<Link to="/behance"><p className="link">Behance</p></Link>)}
                <Link to="/cadastro"><p className="link">Cadastro</p></Link>
                
            </nav>
        </header>
    )
}