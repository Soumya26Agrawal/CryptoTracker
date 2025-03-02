// import React from 'react'
import Home from './components/Home'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import FullMain from './pages/FullMain'
import { auth } from './config/Firebase'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import FullCoin from './pages/FullCoin';
// import { useNavigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom'

// const router = createBrowserRouter(
//   [
//     {
//       path:"/",
//       element:<Home/>
//     },
//     {
//       path:"/signup",
//       element:<SignUp/>
//     },
//     {
//       path:"/signin",
//       element:<SignIn/>
//     },
//     {
//       path:"/main",
//       element:
//      <FullMain/>
//     },
 
//   ]
// )

function App() {
const navigate= useNavigate()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/main");
        // <Navigate to='/main'/>
        console.log("User in");
      } else {
        navigate("/");
        // <Navigate to='/signin'/>
        console.log("User out");
      }
    });

    return () => unsubscribe(); // Cleanup
  }, [auth]);
        
  return (
    // <RouterProvider router={router}/>
 
    // <div>
       // <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/main" element={<FullMain />} />
    <Route path="/coin/:id" element={<FullCoin />} />
  </Routes>
  //  <Footer/> 
  //  </div> 

  )
  
}

export default App