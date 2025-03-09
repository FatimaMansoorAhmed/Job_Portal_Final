import { signOut } from 'firebase/auth';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../firebase/firestoreConfig';
import { toast } from 'react-toastify';

const Header = () => {
    const navigate = useNavigate()

    const handleSignOut = ()=>{
        try {
            signOut(auth)
            navigate("/auth")
            
        } catch (error) {
            toast.error("TRY AGIN", { position: "top-center" })
            
        }
    }

    return (
        <>
            <header className="bg-backgroundBlue body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <div className="text-2xl text-white font-bold">TalentMatch</div>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap text-white items-center text-base justify-center">
                        <Link to={"/admin"} className="mr-5 hover:text-gray-900">Jobs</Link>
                        <Link to={"/jobApplications"} className="mr-5 hover:text-gray-900">Applications</Link>
                        <Link to={"/addJobForm"} className="mr-5 hover:text-gray-900">add Job</Link>
                    </nav>
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 m-1 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={handleSignOut} >Log Out</button>

                </div>
            </header>
        </>

    )
}

export default Header