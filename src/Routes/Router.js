import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Blog from "../Components/Blog/Blog";
import Error from "../Components/Error/Error";
import Addfood from "../Components/FoodService/Addfood";
import AllFoodService from "../Components/FoodService/AllFoodService";
import EditReview from "../Components/FoodService/EditReview";
import Myreview from "../Components/FoodService/Myreview";
import Homepage from "../Components/Home/Homepage";
import RecipieDescription from "../Components/Home/RecipieDescription";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                loader:()=> fetch(`https://alishan-kitchen.vercel.app/foodservices?limit=${3}`),
                element:<Homepage/>,
               
            }
            ,
            {
                path:'/addfood',
                element:<PrivateRoute><Addfood/></PrivateRoute>
            },
            {
                path:'/showallfood',
                element:<AllFoodService/>
            },
            {
                path:'/recipe/description/:id',
                element:<RecipieDescription/>,
                loader: ({params})=> fetch(`https://alishan-kitchen.vercel.app/services/${params.id}`)
            }
            ,
            {
                path:'/myreview',
                element: <PrivateRoute><Myreview/></PrivateRoute>
            }
            ,
            {
                path:'/edit/review/:id',
                loader:({params})=> fetch(`https://alishan-kitchen.vercel.app/edit/feedback/${params.id}`),
                element:<EditReview/>
            }
            ,
            {
                path:'/blog',
                element:<Blog/>
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