// import React from 'react'
import { Chart } from "react-google-charts";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useCrypto } from "../config/Crypto";
function LineChart({data}) {
    const [graphData,setGraphData]=useState([])
    const {currency}=useCrypto()
    const options = {
        title: "Historical Trend",
        hAxis: { title: "Date" },
        vAxis: { title: `Price in ${currency.type} (${currency.symbol})`},
        legend: "none",
      };
      useEffect(()=>{
        if(data?.prices){
            let dataCopy=[["Date","Price"]]
            data.prices.forEach((ele) => {
                dataCopy.push([new Date(ele[0]).toLocaleDateString(),ele[1]])
            });

            setGraphData(dataCopy)
        }
      },[data])
  return (
    <div>
         <Chart
      chartType="LineChart"
      width="100%"
      height="50vh"
      data={graphData}
      options={options}
    />
    </div>
  )
}
LineChart.propTypes = {
    data: PropTypes.object.isRequired, 
    // days:PropTypes.number.isRequired
            
  };
  
export default LineChart