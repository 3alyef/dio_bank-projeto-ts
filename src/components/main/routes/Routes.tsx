import { Home } from "./Home/page";
import { Cadastro } from "./Cadastro/page";
import { Behance } from "./behance/page";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export const RoutesView = ()=>{


    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/behance" element={<Behance/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
            </Routes>
        </Router>
    )
}