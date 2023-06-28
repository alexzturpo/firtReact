/* eslint-disable no-unsafe-finally */
import axios from "axios"
import { useEffect, useState } from "react"

const useApi =  (vPath) => {
    let API_URL = import.meta.env.VITE_API_URL
    const [resp,setResp]= useState()
    // console.log(`resp antes ${resp}`)
    useEffect(()=>{
        console.log(`CONSULTA API: ${API_URL}${vPath}`)
        axios.get(`${API_URL}${vPath}`)
        .then(response=>{
            setResp(response.data[0])
            console.log('AXIOS RESP',response.data[0])
        })
        .catch(e =>console.log('ERROR AXIOS',e))
        // console.log(`resp ${resp}`)
    },[API_URL, vPath])
    return resp
}
export default useApi