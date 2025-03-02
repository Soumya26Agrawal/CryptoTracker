// import React from 'react'
import { useForm } from "react-hook-form";
import { useFirebase } from "../config/Firebase";
import { useNavigate } from "react-router-dom";
function SignUp() {
    const { register, handleSubmit, reset,  formState: { isSubmitting } } = useForm();
    const navigate= useNavigate()
    const {signupWithEmailAndPassword,signinWithGoogle} =useFirebase()
    const onSubmit = async(data) => {
        await signupWithEmailAndPassword(data.email,data.password)
        reset()
    }
     const handleGoogleAuth=async()=>{
      await  signinWithGoogle()
     }
  return (
    <div className="bg-[#320A58] min-h-screen w-full flex flex-col justify-center items-center text-white text-center gap-10">
        <h1 className="text-2xl">SignUp To CryptoTracker</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[40%] h-[40vh] flex flex-col text-center justify-evenly items-center border border-white gap-5 rounded-xl p-4">
    
      <input type="email" placeholder="Enter your email"  {...register("email", { required: true })} className="w-full focus:outline-none" />
      
   
      <input type="password" placeholder="Enter your password" {...register("password", { required: true })} className="w-full focus:outline-none" />
     
      
      
      <input disabled={isSubmitting} type="submit" value="SignUp" className=" border border-white w-full rounded-full bg-white text-[#320A58] hover:bg-[#320A58] hover:text-white" />
      <button type="button" onClick={handleGoogleAuth} className=" border border-white w-[50%] rounded-full bg-blue-200 text-[#320A58] hover:bg-[#320A58] hover:text-white">Google</button>
      <p>Already registered. Click here to <span className="text-blue-400 cursor-pointer hover:underline" onClick={()=>navigate('/signin')}>SignIn</span></p>
    </form>
    </div>
  )
}

export default SignUp