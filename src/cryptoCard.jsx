
// import "./cryptoCard.css"

// const CryptoCard = ({name, price_usd}) => {
//     return (
//     <li className="card">
//         <p className="card__name">{name}</p>
//         <p className="card__num">{price_usd}</p>
//     </li> 
//     )
// }
// export default CryptoCard
import { Link } from 'react-router-dom'
import './cryptoCard.css'
// eslint-disable-next-line react/prop-types
const Cripto = ({id, name, price_usd ,symbol,percent_change_1h}) => {
    return (
        <div className='cripto'>
            <h2>{name}</h2>
            <div className="info">
                <p><span className="label">Precio: </span>{parseFloat(price_usd).toFixed(4)}</p>
                <p><span className="label">Codigo: </span>{symbol}</p>
                <p>
                    <span className="label">Variación 1h: </span>
                    <span className={(percent_change_1h)<0 ? 'negativo' : 'positivo'}>{percent_change_1h}%</span>
                </p>
                <Link className='Link' to={`/cryptomonedas/${id}`}>Ver detalles</Link>
            </div>
        </div>
    )
}
export default Cripto