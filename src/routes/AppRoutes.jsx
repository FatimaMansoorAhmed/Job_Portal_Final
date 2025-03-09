import { createBrowserRouter } from "react-router-dom";
import Admin from '../routes/Admin'
import Auth from "../routes/Auth";
import Frontend from "../routes/Frontend";


const router = createBrowserRouter([
    Admin,
    Auth,
    Frontend

   
])

export default router;