import { Home } from "./Home/page";
import { Cadastro } from "./Cadastro/page";
import { Behance } from "./Behance/page";
import { Route, Routes, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
export const RoutesView = ()=>{
    const isLogged: boolean = useSelector((state: any) => state.isLogged.value)  // recebe se esta logado ou nao 
    return(  
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/behance" element={(isLogged === true) ? <Behance/> : <Navigate to="/"/>}/> {/* Se o usuario nao estiver logado automaticamente ele será redirecionado para / */}
            <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>     
    )
}