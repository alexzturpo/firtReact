import { useContext } from "react"
import { UserContext } from "./context/UserContext"

const Perfil = ()=>{
    const usuario = useContext(UserContext)
    return (
        <>
            <h1>Perfil de {usuario.name}!...</h1>
            <h2>informacion de {usuario.time}</h2>
        </>
    )
}
export default Perfil