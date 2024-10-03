import React, { useState } from 'react'
import signup  from '../assest/signup.png';
import { Link, useNavigate } from 'react-router-dom';
import summaryApi from '../common';
import { toast } from 'react-toastify';
import { ImUser } from "react-icons/im";
import uploadImage from '../helpers/uploadImage';

function Signup() {
   const [val, setVal] = useState({
     email: '',
     password: '',
     name: '',
     conformPassword: '',
     proPic:'',
   });

   const [proPic, setProPic] = useState("");

   const handleProPic = async (e) => {   // handle profile picture  
      const cloudinaryImageFile = await uploadImage(e.target.files[0]);
      
       setVal((val)=>{
         return {...val, proPic: cloudinaryImageFile.url }
       });

    
   }

   const navigate = useNavigate();

   //passsword match checking
   const [match, setMatch] = useState(false);

   const handleCHange =(e)=>{
     const {name, value} =e.target;
     setVal((val)=>{
       return { ...val, [name]:value }
   });
 
   }

   const handleSubmit= async (e)=>{
     e.preventDefault();
     if(val.password === val.conformPassword){  
           const payload = {
              password: val.password,
              email: val.email,
              name: val.name,
              proPic: val.proPic
           }
          try{
          const dataAPi = await fetch(summaryApi.signUp.url,{
            method:summaryApi.signUp.method ,
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          })

          const data = await dataAPi.json();
            console.log(data);
            if(data.success){
               toast.success(data.message); 
                navigate('/login');
            }
           
          if(data.error)
             throw new Error(data.message);
        
              
        }
        catch(err){
          toast.error(err.message);
        }
    }
    else {
      setMatch(true);
    }
    
    console.log(val);
   
   }

  return (
      <div className=' sm:px-[66px] px-3 w-full h-full my-4'>

         <div className=' h-full w-full flex sm:justify-between lg:items-center '>
             <div className='h-full w-1/2  hidden  md:hidden lg:block mx-10'>
                 <img className=" lg:block sm:hidden  h-full w-full " src={signup} alt="" />
             </div>

              <form  onSubmit={handleSubmit} className=' md:w-full lg:w-auto '>
                 
                 <div className='flex justify-center w-full mb-1 '>
                       <div className=' flex items-center justify-center relative w-14 h-14 text-6xl text-white bg-slate-400 rounded-full cursor-pointer '>
                          <input onChange={handleProPic}  className=' absolute opacity-0 w-full h-full ' type="file" />
                         {
                          val.proPic.length > 0 ? ( <img src={val.proPic} alt="Profile" className="w-full h-full rounded-full object-cover" />)
                          : <ImUser />
                         } 
                       </div>
                 </div>
                 <h1 className='text-xl  mb-1 sm:text-2xl font-bold sm:mb-3'>Signup And Explore more</h1>
                 <input onChange={handleCHange} value={val.name} name='name' className=' mb-[10px] border-b-2 w-full py-2 outline-none' type="text" placeholder='Enter your name' />
                 <input onChange={handleCHange} value={val.email} name='email' className=' border-b-2 w-full py-2 outline-none' type="text" placeholder='Enter your Email address' />
                 <input onChange={handleCHange} name='password' value={val.password} className=' border-b-2 w-full my-[10px] py-2 outline-none' type="text" placeholder='Enter your password' />
                 <input onChange={handleCHange} name='conformPassword' value={val.conformPassword} className=' border-b-2 w-full my-[10px] py-2 outline-none' type="text" placeholder='conform Password' />
                 {match && <p className='text-red-600 mb-1'>*Passwords do not match*</p>}
                 <div className=' flex justify-between '>
                    <button className=' px-[48px] bg-red-600 py-1 rounded-lg cursor-pointer text-white'>Sign Up</button>
                     <p className=' text-red-600 font-bold cursor-pointer'>Forger password?</p>
                 </div>
                  
                 <p className=' py-4'>Already Have An Account? <Link to = {"/login"} className=' text-red-600 font-bold'>Login</Link></p>
              </form>
         </div>
          
      </div>
  )
}

export default Signup