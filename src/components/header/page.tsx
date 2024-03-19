import React from "react"
import { Link } from "react-router-dom"

export const Header = ()=>{
    

    return(
        <header className="flex flex-col items-center">
            <h1>Dio Bank</h1>
            <nav> 
                <Link to="/"><p className="link">Home</p></Link>
                <Link to="/behance"><p className="link">Behance</p></Link>
                <Link to="/cadastro"><p className="link">Cadastro</p></Link>
                
            </nav>
        </header>
    )
}