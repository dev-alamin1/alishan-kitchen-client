import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Addfood from "../Components/FoodService/Addfood";
import AllFoodService from "../Components/FoodService/AllFoodService";
import Foodreview from "../Components/FoodService/Foodreview";
import Homepage from "../Components/Home/Homepage";
import RecipieDescription from "../Components/Home/RecipieDescription";
import Main from "../Layout/Main";

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
                element:<Addfood/>
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