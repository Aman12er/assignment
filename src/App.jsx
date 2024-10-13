// src/App.jsx
import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Haeder from './components/Haeder';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard'; 

  return (
    <>
      {!isDashboard && <Haeder />} 
      <main className='min-h-[calc(100vh-120px)]'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
