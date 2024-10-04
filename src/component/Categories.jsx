import React, { useEffect } from 'react'
import { SlEarphones } from "react-icons/sl";
import productCategory from '../helpers/productCategory';
import { FaCamera } from "react-icons/fa";
import { TbDeviceAirpods } from "react-icons/tb";
import { MdMobileScreenShare } from "react-icons/md";
import { PiMouseMiddleClickLight } from "react-icons/pi";
import { FiPrinter } from "react-icons/fi";
import { GiProcessor } from "react-icons/gi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

function Categories({setShowCategoryList}) {
 
   

  return ( 
    <div className=' z-20 bg-white absolute lg:static lg:mt-3 md:mt-6 md:static w-52 shadow-xl'>
        <div className=' flex items-center gap-2 font-bold h-9 bg-orange-400 w-52 px-4'>
             <div className='hidden lg:block md:block h-4  w-4 bg-black'></div>
            <div className=' block lg:hidden md:hidden' onClick={()=>setShowCategoryList(false)} > <BsFillArrowUpSquareFill /></div>
            <h1>CATEGORIES</h1>
        </div>
        {
          productCategory.map(item => (
            <div className='flex items-center gap-3 px-4 w-full border-b py-1 cursor-pointer hover:bg-orange-200' key={item.id}>
                <span className='font-bold'>
                  {item.icon}
                </span>
               <h2>{item.label}</h2>
            </div>
           ))
         }
    </div>
  )
}

export default Categories