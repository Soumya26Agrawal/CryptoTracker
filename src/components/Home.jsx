// import React from 'react'
import { Link } from "react-router-dom"
function Home() {
   
  return (
    <div className="bg-[#320A58] min-h-screen w-full  flex flex-col items-center justify-center gap-10 text-white">
        <h1 className="text-6xl">Welcome to CryptoTracker</h1>
        <div className="flex flex-row gap-9 text-xl">
            <Link to='/signup'  className="border border-white rounded-full pl-3 pr-3 pt-2 pb-2 hover:outline-none hover:bg-white  hover:text-[#3C0A6E]">Sign Up</Link>
            <Link  to='/signin' className="border border-white rounded-full pl-3 pr-3 pt-2 pb-2 hover:outline-none hover:bg-white  hover:text-[#3C0A6E]">Sign In</Link>
        </div>
       
    </div>
  )
}

export default Home

// [#320A58]