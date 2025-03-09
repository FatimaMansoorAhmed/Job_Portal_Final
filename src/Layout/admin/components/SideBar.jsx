import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    const navDashboard = [
        {
            title: 'Jobs',
            link: '/admin'
        },
        {
            title: 'Applications',
            link: '/jobApplications'
        },
        {
            title: 'Add Job',
            link: '/addJobForm'
        }
    ]
    return (

        <div className="bg-blue-900 min-h-screen w-1/4 lg:w-2/8 md:pl-20 py-4 mx-auto flex flex-wrap">

            <div className="lg:py-6 -mb-10 lg:w-full text-white lg:text-left text-center">
                <div className="flex flex-col mb-10 lg:items-start items-center">
                    <div className="text-2xl text-white pb-6 font-bold">TalentMatch</div>
                    {navDashboard.map((item, index) => {
                        return (
                            <div key={index} className="flex-grow">
                                <h2 className="text-lg title-font font-medium mb-3"><Link to={item.link} >{item.title}</Link></h2>
                            </div>
                        )
                    })
                    }

                </div>


            </div>

        </div>
    )
}

export default SideBar