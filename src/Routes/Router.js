import { createBrowserRouter } from "react-router-dom";
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
        ]
    }
]);

export default router;