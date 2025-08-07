import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import App from "../App";
import Products from "../pages/Products";



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
        ]
    }
]) 
export default Router;