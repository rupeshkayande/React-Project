import { createBrowserRouter } from "react-router-dom";
import MainDash from "../Layout/MainDash";
import HomeComp from "../Components/HomeComp";
import AboutComp from "../Components/AboutComp";
import ContactComp from "../Components/ContactComp";
import ProductComp from "../Components/ProductComp";

const router=createBrowserRouter([
    {path:"",element:<MainDash/>,children:[
        {path:"",element:<HomeComp/>},
        {path:"AboutComp",element:<AboutComp/>},
        {path:"ContactComp",element:<ContactComp/>},
        {path:"ProductComp",element:<ProductComp/>},
    ]}
]);
export default router;