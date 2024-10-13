import React from 'react'

import { Link } from 'react-router-dom';

export default function Haeder() {
  return (
    <header className='h-16 shadow-md bg-white m-0 p-0 '>
      <div className=" h-full container mx-auto px-4  br-2 flex items-center justify-between">
        <div className=''>
          <Link to={"dashboard"} className='text-green-700 text-xl font-bold underline hover:text-blue-500' >
          Dashboard</Link>
        </div>
    
    <Link to={"/login"} className="bg-green-700 rounded-l-full rounded-r-full px-4 py-1 mr-2 text-white hover:bg-green-600 ">Login</Link>

        
        </div>
      
    </header>
  )
}
