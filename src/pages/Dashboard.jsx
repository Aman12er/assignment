// src/Dashboard.jsx
import React from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      
      <aside className="bg-green-800 text-white w-full md:w-64 space-y-6 py-7 px-2 md:block">
        <div className="text-2xl font-bold text-center">My Dashboard</div>
        <nav className="mt-10">
  <Link to="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700">
    <FaHome className="inline-block mr-2" /> Dashboard
  </Link>
  <Link to="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700">
    <FaUser className="inline-block mr-2" /> Profile
  </Link>
  <Link to="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700">
    <FaCog className="inline-block mr-2" /> Settings
  </Link>
  <Link to="/login" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-green-700">
    <FaSignOutAlt className="inline-block mr-2" /> Logout
  </Link>
</nav>
      </aside>

      
      <main className="flex-1 p-6 overflow-y-auto bg-gray-100">
        <div className="text-2xl font-semibold text-green-900 mb-4">Dashboard</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
          <div className="bg-white shadow-lg rounded-lg p-6">dynamic content</div>
          <div className="bg-white shadow-lg rounded-lg p-6">dynamic content</div>
          <div className="bg-white shadow-lg rounded-lg p-6">dynamic content</div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
