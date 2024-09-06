import React, { useState } from 'react'
import signup  from '../assest/signup.png';
import { Link } from 'react-router-dom';

function Login() {
   const [val, setVal] = useState({
     email: '',
     password: '',
   });

   const handleCHange =(e)=>{
     const {name, value} =e.target;
     setVal((val)=>{
       return { ...val, [name]:value }
   });
 
   }

   const handleSubmit= (e)=>{
    e.preventDefault();
    console.log(val)
 }

  return (
      <div className=' sm:px-[66px] px-3 w-full h-full my-4'>

         <div className=' h-full w-full flex sm:justify-between items-center '>
             <div className='h-full w-1/2 bg-red-400 sm:block hidden '>
                 <img className=" lg:block sm:hidden  h-full w-full " src={signup} alt="" />
             </div>

              <form onSubmit={handleSubmit} className=' '>
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