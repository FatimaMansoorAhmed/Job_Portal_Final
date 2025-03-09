// import React from 'react'
// import AdminLayout from '../Layout/admin/AdminLayout'
// import AddJobForm from '../Layout/admin/components/AddJobForm'
// import Applications from '../Layout/admin/components/Applications'
// import Jobs from '../Layout/frontend/components/Jobs'

// const Admin = {
//     element: <AdminLayout/>,
//     children: [
//         {
//             path: "/admin",
//             element: <Jobs/>
//         },
//         {
//             path: "/jobApplications/:jobId",
//             element: <Applications/>
//         },
//         {
//             path: "/addJobForm",
//             element: <AddJobForm/>
//         }

//     ]
// }

// export default Admin

import React from "react";
import AdminLayout from "../Layout/admin/AdminLayout";
import AddJobForm from "../Layout/admin/components/AddJobForm";
import Applications from "../Layout/admin/components/Applications";
import Jobs from "../Layout/frontend/components/Jobs";
import AdminProtectedRoute from "./AdminProtectedRoute"; // Import the AdminProtectedRoute component
import NotAuthorized from "../pages/NotAuthorized";

const Admin = {
    element: <AdminLayout />,
    children: [
        {
            path: "/not-authorized",
            element: <NotAuthorized />
        },
        {
            path: "/admin",
            element: (
                <AdminProtectedRoute>
                    <Jobs />
                </AdminProtectedRoute>
            ),
        },
        {
            path: "/jobApplications",
            element: (
                <AdminProtectedRoute>
                    <Applications />
                </AdminProtectedRoute>
            ),
        },
        {
            path: "/addJobForm",
            element: (
                <AdminProtectedRoute>
                    <AddJobForm />
                </AdminProtectedRoute>
            ),
        },
    ],
};

export default Admin;
