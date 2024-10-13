import React, { useState } from 'react';
import loginIcons from '../assets/signin.gif';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Login() {
    const[showpassword ,setshowpassword]=useState(false)
   const[data ,setdata]=useState(
    {email:"",
    password:""
   })

   const handleOnchange=(e)=>{
    const {name ,value}=e.target
   
    setdata((prev) =>{
   return{...prev,
    [name]:value}})
   }
   console.log(data.email)

   const handleSubmit= (e)=>{
   e.preventDefault()
   }
   
    

  return (
  <section id="login" className='  z-0'>
    <div className="container mx-auto p-4 ">
        <div className="bg-white py-5  w-full max-w-sm mx-auto shadow-md">

            <div className="w-20 h-20 bg-white rouded-full mx-auto">
                <img className='rounded-full bg-white' src={loginIcons} alt="" srcset="" />
            </div>

            <form action="" className='px-2' onSubmit={handleSubmit} >

                <div className='grid '>
                <label htmlFor="">Email:</label>

                <div className="bg-slate-200">
                <input
                 type="email" 
                 name="email" 
                 value={data.email} 
                 onChange={handleOnchange}
                 placeholder='enter email' className='w-full p-2 h-full outline-none bg-transparent'/>
                </div>

                </div>

                <div className='grid mt-2'>
                <label htmlFor="">Password:</label>
                <div className="bg-slate-200 flex p-2">
                <input type={showpassword?"password":"text"} 
                name="password" 
                value={data.password}
                onChange={handleOnchange}
                placeholder='enter password' className='w-full  h-full outline-none bg-transparent'/>

                <div>
                    <span className='mx-auto' onClick={()=>setshowpassword((preve)=>!preve)}>
                        {showpassword ? <FaEyeSlash />:
                        <FaEye/> }
                       
                        </span>
                </div>
                </div>
                <Link to= {"/Forget-password"} className="block w-fit ml-auto hover:text-green-800 hover:underline">
                Forget password
                </Link>

                </div>

                <div className="grid mt-2"><button className='bg-green-700 text-white px-6 py-2 mt-2   rounded-full hover:bg-green-600'>login</button></div>

            </form>
            <p className='my-4 text-center'>Don't have account ? <Link to={'/Sign-up'} className='hover:text-green-800 hover:underline hover:font-semibold text-green-900'>sign-up</Link></p>

        </div>
    </div>
  </section>
  )
}

export default Login
