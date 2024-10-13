import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Forgetpassword from "../pages/Forgetpassword";
import Dashboard from "../pages/dashboard";
import { children } from 'react';
const router=createBrowserRouter([
    {path:"/",
    element:<App/>,
    children :[
        {path:"",
        element:<Login/>
        },
        {path:"login",
            element:<Login/>
        },
        {
            path:"sign-up",
            element:<Signup/>
        },
       { path:"Forget-password",
        element:<Forgetpassword/>
       },
       {
        path:"dashboard",
        element:<Dashboard/>
       }
    ]}
])
export default router