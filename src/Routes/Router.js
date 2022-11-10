import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Addfood from "../Components/FoodService/Addfood";
import AllFoodService from "../Components/FoodService/AllFoodService";
import EditReview from "../Components/FoodService/EditReview";
import Foodreview from "../Components/FoodService/Foodreview";
import Myreview from "../Components/FoodService/Myreview";
import Homepage from "../Components/Home/Homepage";
import RecipieDescription from "../Components/Home/RecipieDescription";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<div>Ooops something went wrong</div>,
        children:[
            {
                path:'/',
                loader:()=> fetch(`http://localhost:5000/foodservices?limit=${3}`),
                element:<Homepage/>,
               
            }
            ,
            {
                path:'/addfood',
                element:<PrivateRoute><Addfood/></PrivateRoute>
            },
            {
                path:'/showallfood',
                loader:()=> fetch(`http://localhost:5000/foodservices`),
                element:<AllFoodService/>
            },
            {
                path:'/recipe/description/:id',
                element:<RecipieDescription/>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            }
            ,
            {
                path:'/myreview',
                element: <PrivateRoute><Myreview/></PrivateRoute>
            }
            ,
            {
                path:'/edit/review/:id',
                loader:({params})=> fetch(`http://localhost:5000/edit/feedback/${params.id}`),
                element:<EditReview/>
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