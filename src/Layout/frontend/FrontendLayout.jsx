import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';


const FrontendLayout = () => {
  return (
   <>
    <Header/>
    <Outlet/>
    <Footer/>
    <ToastContainer/>
   </>
  )
}

export default FrontendLayout