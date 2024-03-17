import React from "react"
const enviar = (e:React.MouseEvent, email:string, password:string)=>{
    e.preventDefault();
    window.alert(`Seu email é: ${email}`)
}

export { enviar }