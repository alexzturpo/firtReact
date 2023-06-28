// import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './CryptoPage.css'
import useApi from "./useApi"
const CriptoPage = ()=>{
    const params = useParams() 
    let detalleRes = useApi(`ticker/?id=${params.idcryto}`)

    detalleRes && console.log(`respuesta DETALLE: ${detalleRes}`)
    const detalle = detalleRes
    console.log(`respuesta DETALLE: ${detalle}`)
    return(
        <div className="content">
            {detalle && (
                <div className="content-moneda">
                    <div className="headercrypto">
                        <h2>{detalle.name}</h2>
                        <h2>({detalle.symbol})</h2> 
                    </div>
                    <div className="change">
                        <p>1h: {detalle.percent_change_1h}%</p>
                        <p>24h: {detalle.percent_change_24h}%</p>
                        <p>7d: {detalle.percent_change_7d}%</p> 
                    </div>
                    <div className="precio">
                        <p>Presio BTC: {detalle.price_btc}</p>
                        <p>Presio USD: {detalle.price_usd}</p> 
                    </div>
                </div> 

            )}
        </div>
    )
}
export default CriptoPage