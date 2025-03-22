import { createBrowserRouter } from "react-router-dom";
import Admin from "./Admin"
import Auth from "./Auth"
import Frontend from "./Frontend";


const router = createBrowserRouter([
    Admin,
    Auth,
    Frontend

   
])

export default router;