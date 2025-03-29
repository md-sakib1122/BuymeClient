import { useEffect, useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './component/header'
import Footer from './component/Footer'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import contex from './contex'
import summaryApi from './common'
import {productEditModal} from './contex/index'

//REDUC TOLKIT
import { setUserDetails } from './store/user_Details_Slice'
import { useDispatch } from 'react-redux'

function App() {
     const dispatch = useDispatch();
     const [cartCount, setCartCount] = useState();
    const fetchUserDetails = async () => {
       try {
           const response = await fetch(summaryApi.userDetails.url,{
             method: summaryApi.userDetails.method,
             credentials:'include',
             headers:{
               'Content-Type': 'application/json',
             },

           })

           const dataApi = await response.json();

           if(dataApi.success){
             dispatch(setUserDetails(dataApi.data));
            
           }

         } catch (error) {
            console.error('Error fetching user details: ', error)
            // Notify user about the error
         }
    }

    const fetchCartProductCount = async () => {
       
      
      const response = await fetch(summaryApi.fetchAllCartProducts.url,{
        method: summaryApi.fetchAllCartProducts.method,
        credentials:'include',
        headers: {
          'Content-Type': 'application/json',
        }
       } );
       const dataResponse = await response.json();
       if(dataResponse.success){
         const total = dataResponse.data.reduce((sum,el)=>{
            return sum+el.quantity;
          },0)  
          setCartCount(total);
       }
       if(dataResponse.error){
        console.log(dataResponse.message);
       }


    }
 

    useEffect(()=>{
      fetchUserDetails();
      fetchCartProductCount();
    },[])

    const  editModal  = productEditModal();
     return (
        <>
           <contex.Provider value={{ fetchUserDetails, cartCount,editModal ,fetchCartProductCount  }}>
        
               <ToastContainer />
               <div className=' pt-12 h-screen'>
                  <Header/>
                   <div className=' sm: px-4 md:px-0'>
                     <Outlet/>
                   </div>
                      
                  <Footer/>
               </div>
               
           </contex.Provider>
        </>
     )
} 

export default App
