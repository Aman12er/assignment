import React, { useState } from 'react';
import signupIcons from '../assets/signin.gif';  
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Imagetobase64 from '../helpers/Imagetobase64'


function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmshowPassword, confirmsetShowPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilepic:""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup form submission logic here
  };
  const handleuploadpic=async(e)=>{
    const { name} = e.target;

    const file=e.target.files[0]
    const imagepic=await Imagetobase64(file)
    console.log(imagepic)
    setData((prev) => ({
      ...prev,
      profilepic: imagepic
    }));
  }

  return (
    <section id="signup" className='z-0'>
      <div className="container mx-auto p-4 ">
        <div className="bg-white py-4 w-full max-w-sm mx-auto shadow-md">

          <div className="w-24 h-24 bg-white rounded-full mx-auto relative overflow-hidden">
            <img className='rounded-full bg-white' src={data.profilepic || signupIcons} name="profilepic" alt="signup icon" />
           
            <form action="">
             <label >

            <div className=' text-xs bg-slate-200 text-center absolute bottom-0 py-4 bg-opacity-80 w-full cursor-pointer'>
                upload photo</div>
           <input type="file" className='hidden' onChange={handleuploadpic}/>
            </label>
            </form>
          
          </div>
         

          <form action="" className='px-2 pt-6 mt-6' onSubmit={handleSubmit}>
            <div className='grid'>
              <label htmlFor="name">User Name:</label>
              <div className="bg-slate-200">
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  placeholder='Enter name'
                  className='w-full p-2 h-full outline-none bg-transparent'
                />
              </div>
            </div>

            <div className='grid mt-2'>
              <label htmlFor="email">Email:</label>
              <div className="bg-slate-200">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  placeholder='Enter email'
                  className='w-full p-2 h-full outline-none bg-transparent'
                />
              </div>
            </div>

            <div className='grid mt-2'>
              <label htmlFor="password">Password:</label>
              <div className="bg-slate-200 flex p-2">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  placeholder='Enter password'
                  className='w-full h-full outline-none bg-transparent'
                />
                <span className='mx-auto' onClick={() => setShowPassword((prev) => !prev)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className='grid mt-2'>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <div className="bg-slate-200 flex p-2">
                <input
                  type={confirmshowPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  placeholder='Confirm password'
                  className='w-full h-full outline-none bg-transparent'
                />
                <span className='mx-auto' onClick={() => confirmsetShowPassword((prev) => !prev)}>
                  {confirmshowPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div className="grid mt-2">
              <button className='bg-green-700 text-white px-6 py-2 mt-2 rounded-full hover:bg-green-600'>
                Sign Up
              </button>
            </div>
          </form>

          <p className='my-4 text-center'>
            Already have an account?{' '}
            <Link to={'/Login'} className='hover:text-green-800 hover:underline hover:font-semibold text-green-900'>
              Log In
            </Link>
          </p>

        </div>
      </div>
    </section>
  );
}

export default Signup;

