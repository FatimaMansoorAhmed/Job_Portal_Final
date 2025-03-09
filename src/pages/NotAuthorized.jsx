import React from "react";
import { Link } from "react-router-dom";

const NotAuthorized = () => {
    return (
        <div className="min-h-screen text-center mt-10">
            <h1 className="text-3xl font-bold text-red-600">Access Denied</h1>
            <p className="text-gray-600 mt-2">You do not have permission to view this page.</p>
            <Link to="/jobs" className="mt-4 inline-block px-4 py-2 bg-buttonPrimary text-white rounded">
                Go back to Home
            </Link>
        </div>
    );
};

export default NotAuthorized;
