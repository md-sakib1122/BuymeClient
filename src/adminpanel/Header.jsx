import React, { useState } from 'react'
import {BsFillBellFill, BsPersonCircle, BsSearch, BsJustify} 
from 'react-icons/bs';

function Header({ sidebar, setSidebar }) {
  
  return (
    <div className='col-span-3 flex justify-between items-center px-4 bg-white h-14'>
       <div onClick={()=>setSidebar((sidebar)=>!sidebar)} className=' visible lg:hidden'>
          <BsJustify/>
        </div>
        <div className=' cursor-pointer' >
             <BsSearch/>
        </div>
        <div className=' flex gap-2'>
            <div>
              <BsFillBellFill/>
            </div>
            <div >
              <BsPersonCircle/>
            </div> 
         </div>   
    </div>
  )
}

export default Header