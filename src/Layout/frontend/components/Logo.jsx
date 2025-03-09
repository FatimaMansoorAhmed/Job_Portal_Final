import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/about'); 
            // console.log("working");
        }, 3000);

    }, []); 

    return (
        <>
            <div className="bg-backgroundBlue h-screen py-36 w-full relative">
                <div className="my-[15%] md:my-[5%] mx-auto">
                    <div className=" text-4xl md:text-9xl mx-auto text-white font-bold text-center">TalentMatch</div>
                </div>
            </div>
        </>
    );
}

export default Logo;
