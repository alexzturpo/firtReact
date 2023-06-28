import { createContext, useEffect, useState } from "react";
const UserContext= createContext()
// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
    const [usuario,setUsuario] = useState({})
    useEffect(() => { 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setUsuario  ({
            name:'Alexzander',
            time: new Date().toLocaleTimeString()
        })
    },[])
    return(
        <UserContext.Provider value={usuario}>
            { children }
        </UserContext.Provider> 
    )
}
export {UserContext,UserContextProvider}