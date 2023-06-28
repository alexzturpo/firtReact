import {NavLink, useNavigate} from "react-router-dom" 
import './Menu.css' 
import { UserContext } from "./context/UserContext"
import { useContext } from "react"
const Menu = ()=>{ 
    const usuario = useContext(UserContext)
    const navigation = useNavigate()
    return (
        <header> 
            <a href="/" className='logo'>Logo</a> 

            <nav className="main-menu">
                <ul>
                    <li><NavLink to='/'>Inicio</NavLink></li>
                    <li><NavLink to='/perfil'>{usuario.name}</NavLink></li>
                    <li><a onClick={()=>{
                        localStorage.removeItem('tokenLogin')
                        navigation("/login")
                    }}>Cerrar Sesion</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Menu