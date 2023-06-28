// import React from 'react'
import ReactDOM from 'react-dom/client'
import Cuadricula from './Cuadricula.jsx' 
import './main.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom' 
import ErrorPage from './ErrorPage.jsx' 
import App from './App.jsx'
import Home from './Home.jsx'
import CriptoPage from './CrytoPage.jsx'
import Perfil from './Perfil.jsx'
import {UserContextProvider} from './context/UserContext.jsx'
import Login from './login.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(  
    <UserContextProvider>
        <BrowserRouter> 
        <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<Home/>} /> 
                <Route path='/perfil' element={<Perfil/>} />
            </Route>
            <Route path='/cryptomonedas' element={<App/>}>
                <Route index element={<Cuadricula/>}/>
                <Route path=':idcryto' element={<CriptoPage/>}/>
            </Route>
            <Route path='login' element={<Login/>}/> 
            <Route path='*' element={<ErrorPage/>} /> 
        </Routes>
        </BrowserRouter>
    </UserContextProvider> 
    
)
