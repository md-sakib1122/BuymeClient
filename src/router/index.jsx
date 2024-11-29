import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
   import App from "../App";
   import Login from "../pages/Login.jsx";
   import Signup from "../pages/Signup.jsx";
   import Home from "../pages/Home.jsx";
   import AdminPanel from "../pages/AdminPanel.jsx";
   import AdminHome from "../adminpanel/AdminHome.jsx";
   import AdminTest from "../adminpanel/AdminTest.jsx";
   import Users from "../adminpanel/Users.jsx";
   import Allproducts from "../adminpanel/Allproducts.jsx";
   import CategoryProduct from "../pages/CategoryProduct.jsx";
   import ProductDetails from "../pages/ProductDetails.jsx";
   import ProductCart from "../pages/ProductCart.jsx";
   import SearchProduct from "../pages/SearchProduct.jsx";
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
           path:"product-details/:productId",
           element: <ProductDetails/>
         },
         {
          path:'search',
          element: <SearchProduct/>
         },
         {
           path:"product-cart",
           element: <ProductCart/>
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