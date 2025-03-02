import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {  axiosIns1, axiosIns2 } from "./axios";

const CryptoContext= createContext(null)

export const useCrypto=()=> useContext(CryptoContext)

export const CryptoProvider= (props)=>{

const [currency,setCurrency]= useState({
    type:'usd',
    symbol:'$'
})

const [allCoins,setAllCoins]=useState([])
// const [coin,setCoin]=useState({})



    const getAllCoins= async ()=>{
        const res=await axiosIns1.get(`?vs_currency=${currency.type}`)

        setAllCoins(res.data)
    }
    const getACoinData= async (id)=>{
        const res=await axiosIns2.get(`/${id}`)

        return res.data
       
    }
//    const getACoinData =async(id)=>{
//         const res=await axiosIns2.get(`/${id}`)
//         setCoin(res.data)
//     }

    useEffect(()=>{
getAllCoins()
    },[currency])
    return (
       < CryptoContext.Provider value={{currency,setCurrency,allCoins,getACoinData}}>
       {props.children}
       </CryptoContext.Provider>
    )
}

CryptoProvider.propTypes = {
    children: PropTypes.node.isRequired, 
            
  };
  