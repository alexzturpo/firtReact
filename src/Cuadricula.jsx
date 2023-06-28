
// import CryptoCard from "./cryptoCard" 
import { useEffect, useState } from "react";
import Cripto from "./cryptoCard"; 
import './Cuadricula.css'  
import axios from "axios";

const Cuadricula = ()=> {
  
  const [vCriptos, setVcriptos] = useState([]);
  // const VITE_API_URL = 'https://api.coinlore.net/api/'
  let API_URL = import.meta.env.VITE_API_URL 
  useEffect(() => {
    // fetchData(API_URL);
    axios.get(`${API_URL}tickers/`)
    .then(response => {
      console.log(`data Axios: ${response.data.data}`)
      setVcriptos(response.data.data)
    .catch(e => console.log('error',e))
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const vCriptos = useApi('tickers/')
  
  return (
    <div className="app-container"> 
    {
      (vCriptos) && (
        <div>
        <h1>Lista de criptos!</h1>
        <div className="cripto-container">
          {vCriptos.map(({ id, name, price_usd,symbol,percent_change_1h}) => (
            // <li key={id} >Nombre: {name} Precio: {price_usd}</li>
            // <CryptoCard key={id} name={name} price_usd={price_usd} />
            <Cripto key={id} id={id} name={name} price_usd={price_usd} symbol={symbol} percent_change_1h={percent_change_1h}/>
          ))}
        </div>
        </div>

      )
    }
    </div>
  );
}

export default Cuadricula;
