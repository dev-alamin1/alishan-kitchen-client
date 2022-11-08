import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Addfood from "../Components/FoodService/Addfood";
import Foodreview from "../Components/FoodService/Foodreview";
import Homepage from "../Components/Home/Homepage";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<div>Ooops something went wrong</div>,
        children:[
            {
                path:'/',
                element:<Homepage/>
            }
            ,
            {
                path:'/addfood',
                element:<Addfood/>
            }
            ,
            {
                path:'/myreview',
                element: <Foodreview/>
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