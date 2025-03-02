import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import { FirebaseProvider } from './config/Firebase.jsx'
import { BrowserRouter as Router} from "react-router-dom"; 
import { CryptoProvider } from './config/Crypto.jsx';
 // ✅ Import BrowserRouter


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <CryptoProvider>
    <FirebaseProvider>
    <Router>
    <App />
    <Toaster/>
  </Router>
    </FirebaseProvider>
    </CryptoProvider>
   
   
    </StrictMode>
)
