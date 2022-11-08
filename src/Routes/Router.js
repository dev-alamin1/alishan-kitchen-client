import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Homepage from "../Components/Home/Homepage";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Homepage/>
            }
            ,
            {
                path:'/register',
                element:<Register/>
            }
            ,
            {
                path:'/login',
                element:<Login/>
            }
        ]
    }
]);

export default router;