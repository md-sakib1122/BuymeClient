import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
   import App from "../App";
   import Home from "../pages/home";
   import Login from "../pages/Login";
   import Signup from "../pages/Signup";
   import AdminPanel from "../pages/AdminPanel";
   import AdminHome from "../adminpanel/AdminHome";
   import AdminTest from "../adminpanel/AdminTest";
   import Users from "../adminpanel/Users";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
         {
            path:"",
            element: <Home/>
         },
         {
           path:"login",
           element: <Login/>
         },
         {
           path:"signup",
           element: <Signup/>
         },

         {
          path:'admin-panel',
          element:<AdminPanel/>,
          children: [
             {
              path:'',
              element: <AdminHome/>
             },
             {
              path:'test',
              element: <AdminTest/>
             },
             {
              path:'users',
              element: <Users/>
             }
          ]
         }


      ]
    },
    
  ]);


  export default router;