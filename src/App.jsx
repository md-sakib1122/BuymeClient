import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './component/header'
import Footer from './component/Footer'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import contex from './contex'
import summaryApi from './common'

//REDUC TOLKIT
import { setUserDetails } from './store/user_Details_Slice'
import { useDispatch } from 'react-redux'

function App() {
     const dispatch = useDispatch();

    const fetchUserDetails = async () => {
       try {
           const response = await fetch(summaryApi.userDetails.url,{
             method: summaryApi.userDetails.method,
             credentials:'include',
             headers:{
               'Content-Type': 'application/json',
             },

           })

           const data = await response.json();

           if(data.success){
             dispatch(setUserDetails(data));
             
           }

           console.log('User Details: ', data) 


         } catch (error) {
            console.error('Error fetching user details: ', error)
            // Notify user about the error
         }
    }

    useEffect(()=>{
      fetchUserDetails();
    },[])

    
     return (
        <>
           <contex.Provider value={{ fetchUserDetails }}>
        
               <ToastContainer />
               <div className=' pt-16'>
                  <Header/>
                        <Outlet/>
                  <Footer/>
               </div>
               
           </contex.Provider>
        </>
     )
} 

export default App
