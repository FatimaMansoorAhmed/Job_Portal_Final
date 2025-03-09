import { createBrowserRouter } from "react-router-dom";
import Admin from '../Layout/admin'
import Auth from "../Layout/auth";
import Frontend from "../Layout/frontend";


const router = createBrowserRouter([
    Admin,
    Auth,
    Frontend

   
])

export default router;