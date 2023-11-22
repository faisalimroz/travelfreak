import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Home/Blog/Blog";
import Blogdetails from "../Pages/Home/Blog/Blogdetail/Blogdetails/Blogdetails";
import Contactus from "../Pages/Home/Contactus/Contactus";
import Package from "../Pages/Home/Package/Package";
import PackageDetails from "../Pages/Home/Package/PackageDetail/PackageDetails/PackageDetails";
import Login from "../Pages/Home/Login/Login";
import Signup from "../Pages/Home/Signup/Signup";
import Payment from "../Pages/Home/Package/Payment/Payment";
import Profile from '../Layout/Profile'
import Mycart from "../Profile/Mycart/Mycart";
import Result from "../Pages/Home/SearchForm/Result/Result";
import Postblog from "../Profile/Postblog/Postblog";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('http://localhost:5000/totaluser'),
        
      },
      {
        path:'/home',
        element:<Home></Home>,
        loader: ()=> fetch('http://localhost:5000/totaluser')
      },
      {
        path:'/results',
        element:<Result></Result>,
       
      },
      {
        path:'/contactus',
        element:<Contactus></Contactus>
    },
      {
        path:'/blog',
        element:<Blog></Blog>,
        loader: ()=> fetch('http://localhost:5000/totalblog')

    },
    {
        path:'/blog/:bid',
        element: <Blogdetails></Blogdetails>
    },
    {
      path:'/package',
      element:<Package></Package>,
      loader: ()=> fetch('http://localhost:5000/totalpackage')
  },
  {
      path:'/package/:pid',
      element: <PackageDetails></PackageDetails>
  },
  {
    path:'/login',
    element:<Login></Login>
},
{
    path:'/signup',
    element:<Signup></Signup>
},
{
  path:'/payment',
  element:<Payment></Payment>
}


      ]
    },
    {
      path: '/profile',
      element:<Profile></Profile> ,
      children: [
        {
          path: 'mycart', // Remove the leading slash
          element: <Mycart></Mycart>
        },
        {
          path: 'postblog', // Remove the leading slash
          element: <Postblog></Postblog>
        }
      ]
    }
    
  ]);
  