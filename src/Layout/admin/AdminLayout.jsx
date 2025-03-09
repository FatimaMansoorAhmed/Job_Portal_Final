import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Footer from '../frontend/components/Footer';


const AdminLayout = () => {
  return (
    <>
      
        <Header />
        <div className="bg-biegeBackground p-10 overflow-hidden">
          <Outlet />
          <ToastContainer />
        </div>
        <Footer/>
    
    </>
  )
}

export default AdminLayout