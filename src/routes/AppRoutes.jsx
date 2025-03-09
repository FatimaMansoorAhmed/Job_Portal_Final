import { createBrowserRouter } from "react-router-dom";
import Admin from "./admin";
import Auth from "./auth";
import Frontend from "./frontend";


const router = createBrowserRouter([
    Admin,
    Auth,
    Frontend

   
])

export default router;