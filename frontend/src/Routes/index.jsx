
import { createBrowserRouter } from "react-router-dom";
import Main from "../components/landingPage/main/Main";
import Login from "../components/Gest/login/Login";
import Gest from "../components/Gest/Gest";
import Register from "../components/Gest/Register/Register";
import Dashbored from "../components/Dashbored/Dashbored";
import Body from "../components/Dashbored/DashboredUi/Body";
import Profile from "../components/Dashbored/profile/profile";
import Add from "../components/Dashbored/Add/Add";
import Update from "../components/Dashbored/Add/Update";
export const  myroute = createBrowserRouter([
   
    {

        element: <Gest />,
        children:[
            {
                path:'/login',
                element:<Login />
            }, 
            {
                path:'/register',
                element : <Register />
            },
            {
                path:'/',
                element: <Main />
            }
        ]
    } ,
    {
          element: <Dashbored />,
        children:[
            {
                path:'/dashbored',
                element:<Body />
            },
            {
                path:'/profile',
                element:<Profile />
            },
            {
                path:'/add',
                element:<Add />
            },
             {
                path:'/update/:id',
                element:<Update />
            }
           
           
        ]
    }
    

],
{
    future: {
        v7_startTransition: true ,
      v7_relativeSplatPath: true
      
    },
  });