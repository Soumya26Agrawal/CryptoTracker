// import React from 'react'
import { NavLink } from "react-router-dom"
import { useCrypto } from "../config/Crypto"
import { useFirebase } from "../config/Firebase"
function Navbar() {
  const {currency,setCurrency}= useCrypto()
  const {signout} = useFirebase()
  const handleCurrencyChange=(event)=>{
    switch(event.target.value){
      case 'usd': {
        setCurrency({
          type:'usd',
          symbol:'$'
        })
        break
      }
      case 'eur': {
        setCurrency({
          type:'eur',
          symbol:'€'
        })
        break
      }
    }
  }

  const handleLogout=async()=>{
    await signout()
  }
  return (
    <div className="max-h-[10%] w-full grid grid-cols-3 gap-5 text-center bg-[#3C0A6E] text-white pt-6 pb-6">
        <h1 className="text-2xl">CryptoTracker</h1>
      
        <ul className="grid grid-cols-2 text-center w-[100%] ">
        <NavLink
        to="/main"
        className={({ isActive }) =>
          ` ${
            isActive ? "text-[#FFB400]" : "text-[#E0E1DD]"
          } `
        }
      >
        Home
       </NavLink>
        {/* <NavLink
        to="/main"
        className={({ isActive }) =>
          ` ${
            isActive ? "text-[#FFB400]" : "text-[#E0E1DD]"
          } `
        }
      >
        Features
      </NavLink>
        <NavLink
        to="/main"
        className={({ isActive }) =>
          ` ${
            isActive ? "text-[#FFB400]" : "text-[#E0E1DD]"
          } `
        }
      >
        Pricing
      </NavLink>  */}
          
            
            <li onClick={handleLogout} className="cursor-pointer">Logout</li>
           
        </ul>
    

        <div>
            <select onChange={handleCurrencyChange} name="lang" id="" className="border border-white-400 w-[20%] bg-[#3C0A6E]" value={currency.type}>
                {/* <option value="ind">IND</option> */}
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
            </select>
          
        </div>
 

    </div>
  )
}

export default Navbar