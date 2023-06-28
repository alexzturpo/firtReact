import { Navigate, Outlet } from "react-router-dom"
import Menu from "./Menu"

const App = ()=>{
    if (!localStorage.getItem('tokenLogin')) return <Navigate to={'/login'}/>
    return(
        <>
            <Menu/>
            <Outlet/>
        </>
    )
}
export default App