import axios from 'axios'

const axiosIns1= axios.create({
    baseURL:'https://api.coingecko.com/api/v3/coins/markets',
    headers:{
'x-cg-demo-api-key': 'CG-FDgt4oudzJNCNnLmMWfGKgDA'
    }
})
const axiosIns2= axios.create({
    baseURL:'https://api.coingecko.com/api/v3/coins',
    headers:{
'x-cg-demo-api-key': 'CG-FDgt4oudzJNCNnLmMWfGKgDA'
    }
})
const axiosIns3= axios.create({
    baseURL:'https://api.coingecko.com/api/v3/coins',
    headers:{
'x-cg-demo-api-key': 'CG-FDgt4oudzJNCNnLmMWfGKgDA'
    }
})

export {axiosIns1,axiosIns2,axiosIns3}