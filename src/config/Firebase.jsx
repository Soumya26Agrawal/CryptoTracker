import { createContext, useContext } from "react";
import PropTypes from 'prop-types';

import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, GoogleAuthProvider,signInWithPopup} from "firebase/auth"

import { initializeApp } from "firebase/app";
import toast from "react-hot-toast";
const firebaseConfig = {
    apiKey: "AIzaSyDalVhtq6CPwSncSQtV1a_ZQS67o75WXJs",
    authDomain: "cryptotracker-c109f.firebaseapp.com",
    projectId: "cryptotracker-c109f",
    storageBucket: "cryptotracker-c109f.firebasestorage.app",
    messagingSenderId: "1043349114582",
    appId: "1:1043349114582:web:592e600d54bd37e7768377"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const FirebaseContext= createContext(null)
  export const auth= getAuth(app)
  const google= new GoogleAuthProvider()

  export const useFirebase = ()=> useContext(FirebaseContext)

export const FirebaseProvider= (props)=>{

    const signupWithEmailAndPassword=async(email,password)=>{
        try{
         await createUserWithEmailAndPassword(auth,email,password)
         toast.success('Successfully registered!');

        }
        catch(err){
            toast.error(err.message);
            // toast.error(err.code);
        }
    }
    const signinWithEmailAndPassword=async(email,password)=>{
        try{
            await signInWithEmailAndPassword(auth,email,password)
            toast.success('Successfully logged!');
   
           }
           catch(err){
               toast.error(err.message);
           }
    }
    const signinWithGoogle=async()=>{
        try{
            await signInWithPopup(auth,google)
            toast.success('Successfully logged');
   
           }
           catch(err){
               toast.error(err.message);
           }
    }
    const signout=async()=>{
        try{
            await signOut(auth)
            toast.success('Successfully signed out!');
   
           }
           catch(err){
               toast.error(err.message);
           }
    }

    // const onauthStateChanged=()=>{
    //     onAuthStateChanged(auth,(user)=>{
    //         if(user){
    //             navigate('/main')
    //             console.log("User in")
    //         }
    //         else{
    //             navigate('/signin')
    //             console.log('User out')
    //         }
    //     })
    // }

     // Correct onAuthStateChanged function
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         navigate("/main");
//         console.log("User in");
//       } else {
//         navigate("/signin");
//         console.log("User out");
//       }
//     });

//     return () => unsubscribe(); // Cleanup listener
//   }, [navigate]);

       return(

       

        <FirebaseContext.Provider value={{signupWithEmailAndPassword, signinWithEmailAndPassword,signout,signinWithGoogle}}>
            {props.children}
        </FirebaseContext.Provider>
       )
}

FirebaseProvider.propTypes = {
    children: PropTypes.node.isRequired, 
            
  };
  