import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className="bg-backgroundBlue body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        {/* <img className='h-[50px] w-[50px]' src={"logo.png"} alt="logo" /> */}
                        <div className="text-white text-2xl font-bold">TalentMatch</div>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 m-1 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to={"/auth"}>Sign In</Link>
                        </button>
                    </nav>

                </div>
            </header>
        </>

    )
}

export default Header