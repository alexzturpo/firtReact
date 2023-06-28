import { Link } from "react-router-dom"

const Home = ()=>{
    return (
        <>
            <h1>Hola, bienvenido a CrytoLandia</h1>
            <p>Conoce las 100 criptos más usadas</p>
            <Link to='/cryptomonedas'>Ver Cryptos</Link>
        </>
    )
}
export default Home