import { globalVar } from "../../../../global/global-var";
interface propsE {
    name: string,
    email: string,
    behance: string,
    password: string,
    createdAt: string,
    updatedAt: string,
    id: string

}

export const Behance = ()=>{
    const data: propsE = globalVar.getData()[0]

    return(
        <div className="bg-[#ffff]">
            <div>
                <h1>Dados da Conta</h1>
                <p>{data.id}</p>
                <p>Nome: {data.name}</p>
                <p>Email: {data.email}</p>
                <p>Senha: {data.password}</p>
                <p>Saldo: {data.behance}</p>
                <p>Última Atualização: {data.updatedAt}</p>
                <p>Data de criação: {data.createdAt}</p>
            </div>
        </div>
    )
}