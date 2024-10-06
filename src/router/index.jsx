import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
   import App from "../App";
   import Home from "../pages/Home";
   import Login from "../pages/Login";
   import Signup from "../pages/Signup";
   import AdminPanel from "../pages/AdminPanel";
   import AdminHome from "../adminpanel/AdminHome";
   import AdminTest from "../adminpanel/AdminTest";
   import Users from "../adminpanel/Users";
   import Allproducts from "../adminpanel/Allproducts";
   import CategoryProduct from "../pages/CategoryProduct";
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
           path:"category-product/:categoryName",
           element: <CategoryProduct/>
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
             },
             {
              path: 'all-products',
              element : <Allproducts/>
             }
          ]
         }


      ]
    },
    
  ]);


  export default router;