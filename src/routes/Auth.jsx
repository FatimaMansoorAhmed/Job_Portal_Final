import AuthLayout from "../Layout/auth/AuthLayout";
import About from "../Layout/auth/components/About";
import SignIn from "../Layout/auth/components/SignIn";
import Logo from "../Layout/frontend/components/Logo";

const Auth = {
    element: <AuthLayout/>,
    children: [
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/",
            element: <Logo/>
        },
        {
            path: "/auth",
            element: <SignIn/>
        }
    ]

}

export default Auth;