import React, { useState } from 'react'
import signup  from '../assest/signup.png';
import { Link, useNavigate } from 'react-router-dom';
import summaryApi from '../common';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import contex from '../contex';
function Login() {
   const [val, setVal] = useState({
     email: '',
     password: '',
   });

   const navigate = useNavigate();

   const handleCHange =(e)=>{
     const {name, value} =e.target;
     setVal((val)=>{
       return { ...val, [name]:value }
   });
 
   }

    const {fetchUserDetails, fetchCartProductCount} = useContext(contex);

   const handleSubmit= async (e)=>{
    e.preventDefault();
    const dataApi = await fetch(summaryApi.login.url,{
      credentials:'include',
      method: summaryApi.login.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(val)
    });

    const data = await dataApi.json();

    if(data.success) {
      toast.success(data.message);
      fetchUserDetails();
      fetchCartProductCount();
      navigate('/');
    }
    if(data.error) {
      toast.error(data.message);
    }
 }

  return (
      <div className=' sm:px-[66px] px-3 w-full h-full my-4'>

         <div className=' h-full w-full flex sm:justify-between lg:items-center '>
             <div className='h-full w-1/2  hidden  md:hidden lg:block '>
                 <img className=" lg:block sm:hidden  h-full w-full " src={signup} alt="" />
             </div>

              <form onSubmit={handleSubmit} className='md:w-full lg:w-auto'>
                 <h1 className=' text-2xl mb-1 sm:text-4xl font-bold sm:mb-3'>Login In And Explore more</h1>
                 <h3 className=' text-xl mb-[40px]'>Enter Your Details Below</h3>
                 <input onChange={handleCHange} value={val.email} name='email' className=' border-b-2 w-full py-2 outline-none' type="text" placeholder='Enter your Email address' />
                 <input onChange={handleCHange} name='password' value={val.password} className=' border-b-2 w-full my-[40px] py-2 outline-none' type="text" placeholder='Enter your password' />
                 <div className=' flex justify-between '>
                    <button className=' px-[48px] bg-red-600 py-1 rounded-lg cursor-pointer text-white'>Login</button>
                     <p className=' text-red-600 font-bold cursor-pointer'>Forger password?</p>
                 </div>
                 <p className=' py-4'>Don't Have Account? <Link to = {"/signup"} className=' text-red-600 font-bold'>Sign up</Link></p>
              </form>
         </div>
          
      </div>
  )
}

export default Login