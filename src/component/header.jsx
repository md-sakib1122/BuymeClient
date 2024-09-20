import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import logo from '../assest/logo.jpg';
import { useSelector, useDispatch } from 'react-redux'
import UserModal from './userModal';

function header() {

    const user = useSelector(state=>state.user.user);
    console.log("contex user",user)
    const [toggoleModal, setToggoleModal] = useState(false);
  return (
     <header className=' h-16 border-b px-4 fixed z-50  w-full bg-white top-0'>
           <div className=' container mx-auto flex justify-between items-center h-full'>
                <div>
                  <Link to={"/"}>
                      <img className=' w-16' src={logo} alt="" />
                  </Link>  
                </div>
                
                <div className=' hidden lg:flex  gap-9 justify-between h-full items-center ml-auto lg:ml-0 '>
                    <Link to = {"/"} className=' hidden lg:inline-block hover:border-b-2'>Home</Link>
                
                    <button className=' hover:border-b-2'>contact</button>
                
                    <button className='hover:border-b-2'>About</button>

                    <div className=' h-[38px] w-[400px]  bg-slate-100 lg:flex items-center pr-[12px] justify-between hidden'>
                        <input type="text" className=' h-full pl-[20px] w-full text-sm outline-none bg-slate-100 ' placeholder='what are you looking for?' />
                        <button className='text-2xl '><IoIosSearch /></button>
                    </div>
                </div>
                <div className='flex gap-[24px] items-center ml-4 '>
                    {
                       user?.proPic ? ( 
                    <div className=' relative'>
                        <div onClick={()=>setToggoleModal((toggoleModal)=>!toggoleModal)} className=' border-yellow-500 flex justify-center items-center border-2 rounded-full '>
                            <img className=' h-8 w-8 cursor-pointer rounded-full object-cover' src={user.proPic} alt="" />
                        </div> 
                        {
                         toggoleModal? <UserModal user={user} /> : " "  //user modal setUp
                        }
                    </div>
                    ):(<Link to = {"/login"}  className=' hover:border-b-2'>Login</Link>)
                    }
                    
                    <span className=' text-3xl'>
                        <CiHeart />
                    </span>
                    <span className=' text-3xl'>
                        <IoCartOutline />
                    </span>
                </div>
                
           </div>
     </header>  

  )
}

export default header;