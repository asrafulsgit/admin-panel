import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import App from "../App";
import Products from "../pages/Products";
import Vendor from "../pages/Vendor";



const Router = createBrowserRouter([
    {
        path : '/',
        Component : App,
        children :[
            { 
               index : true,
               Component : Home ,
            },
            { 
               path : 'products',
               Component : Products ,
            },
            { 
               path : 'vendors',
               Component : Vendor,
            },
        ]
    }
]) 
export default Router;