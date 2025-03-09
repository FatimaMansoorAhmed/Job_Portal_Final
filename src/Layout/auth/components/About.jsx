import React from 'react'
import Header from './Header'
import Footer from '../../frontend/components/Footer'
import About from '../../frontend/components/About'

const AboutHome = () => {
    return (
       <>
       <Header/>
        {/* <div className='container mx-auto flex justify-center'>
            About
        </div> */}
        <About/>
        <Footer/>
       
       </>
    )
}

export default AboutHome