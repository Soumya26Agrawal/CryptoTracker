// import React from 'react'

import Main from "../components/Main"
import Navbar from "../components/Navbar"

function FullMain() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar/>
      <Main/>
    </div>
  )
}

export default FullMain