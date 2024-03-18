import React from "react"
import { Link } from "react-router-dom"

export const Header = ()=>{
    

    return(
        <header className="flex flex-col items-center">
            <h1>Dio Bank</h1>
            <nav>
                <div className="link">
                    <Link to="/">Home</Link>
                </div>
                <div className="link">
                    <Link to="/behance">Behance</Link>
                </div>
                <div className="link">
                    <Link to="/cadastro">Cadastro</Link>
                </div>
            </nav>
        </header>
    )
}