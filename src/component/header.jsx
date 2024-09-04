import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function header() {


  return (
     <header className=' h-16 border-b'>
           <div className=' container mx-auto flex justify-between items-center h-full'>
                <div>
                    <h1 className=' '>BuyMe</h1>
                </div>
                
                <div className=' flex lg:w-[367px] justify-between h-full items-center ml-auto lg:ml-0 '>
                    <button className=' hidden lg:inline-block hover:border-b-2'>Home</button>
                
                    <button className='hidden lg:inline-block hover:border-b-2'>contact</button>
                
                    <button className='hidden lg:inline-block hover:border-b-2'>About</button>
                
                    <button className=' hover:border-b-2'>Signup</button>
                </div>
                <div className='flex gap-[24px] items-center'>
                    <div className='   h-[38px] w-[243px]  bg-slate-100 lg:flex items-center pr-[12px] justify-between hidden'>
                        <input type="text" className=' h-full pl-[20px] w-full text-sm outline-none bg-slate-100 ' placeholder='what are you looking for?' />
                        <button className='text-xl'><IoIosSearch /></button>
                    </div>
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