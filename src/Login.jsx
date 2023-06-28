import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const navegation = useNavigate()
    const [user,setUser] = useState({
        email: '',
        password:''
    })
    const mySubmit = (e) => {
        e.preventDefault()
        console.log('mySubmit',user)
        axios.post('https://reqres.in/api/login',user)
        .then(Response => {
            console.log('Respondes API Login:',Response)
            localStorage.setItem("tokenLogin",Response.data.token)
            navegation("/")
        })
        .catch(e => console.log(e.response.data))
    }
    if (localStorage.getItem('tokenLogin')) return <Navigate to={'/'}/>
  return (
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <form onSubmit={mySubmit}>
        <div className="field">
          <label htmlFor="email">Correo Electrónico</label>
          <input required type="email" name="email" onChange={ e => {
            setUser({
                ...user,
                email:e.target.value
            })
          }} />
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input required type="password" name="password" onChange={ e => {
            setUser({
                ...user,
                password:e.target.value
            })
          }} />
        </div>
        <div className="submit">
          <input type="submit" value="Ingresar" className="link" />
        </div>
      </form>
    </div>
  );
};
export default Login;
