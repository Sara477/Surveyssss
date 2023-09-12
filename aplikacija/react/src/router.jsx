import App from "./App";
import Signup from "./views/Signup";
import Surveys from "./views/Surveys";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";

import { createBrowserRouter } from "react-router-dom";

const router= createBrowserRouter([
    
{
    path:'/',
    element:<Dashboard/>
},
{
    path:'/surveys',
    element:<Surveys/>
},
{
    path:'/login',
    element:<Login/>
},
{
    path:'/signup',
    element:<Signup/>
}

])

export default router