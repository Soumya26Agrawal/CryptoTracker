// import React from 'react'

import { useParams } from "react-router-dom"

import {   useEffect, useState } from "react"
import { axiosIns2, axiosIns3 } from "../config/axios"
import { useCrypto } from "../config/Crypto"
import LineChart from "./LineChart"

function Coin() {
    const {currency}=useCrypto()
    const {id}= useParams()
    const [coinData,setCoinData]=useState(null)
    const [days,setDays]= useState(10)
    const [coinHistoricalData,setCoinHistoricalData]=useState(null)
    
    const handleDayChange=(e)=>{
        setDays(e.target.value)
    }
    const getACoinData= async (id)=>{
        const res=await axiosIns2.get(`/${id}`)

        setCoinData(res.data)
       
    }
    const getACoinHistoricalData= async (id)=>{
        const res=await axiosIns3.get(`/${id}/market_chart?vs_currency=${currency.type}&days=${days}&interval=daily`)

        setCoinHistoricalData(res.data)
       
    }
    useEffect(()=>{
      getACoinData(id)
      
    },[]) 
    useEffect(()=>{
      getACoinHistoricalData(id)
      
    },[days,currency]) 

    if(coinData){
  
  return (
 
    <div className="flex-1 bg-[#320A58] text-white flex flex-col " >
       <div className="flex flex-row w-full h-[30vh] mt-10 gap-10 p-5 justify-evenly items-center">
        <img className="w-[10%] h-[60%]" src={coinData.image.large} alt="" />
        <p className="text-2xl">{coinData.name} ({coinData.symbol})</p>
   
        <p>{coinData.description.en.slice(0,800)}... </p>
    
       </div >
       <div className="flex-1 flex flex-col items-center gap-5">
        <h1 className="text-blue-100 text-xl">Select no. of days of historical data you require:</h1>
        <div className="flex flex-row mb-10">
        <input  type="range" min={5} max={25} name="" id="" onChange={handleDayChange} value={days} />
        <span className=" font-semibold ml-5">{days} Days</span>
        </div>
        </div>
    <LineChart data={coinHistoricalData} days={days}/>
       
    </div>
  )

}
return (
<><h1>wait...</h1>
<div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
</>
)
}

export default Coin