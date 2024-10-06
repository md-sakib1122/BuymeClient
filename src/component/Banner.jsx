import banner1 from '../assest/banner/banner1.png';
import banner2 from '../assest/banner/banner2.png';
import banner3 from '../assest/banner/img1.webp';
import banner3_mobile from '../assest/banner/img1_mobile.jpg';
import banner4 from '../assest/banner/img2.webp';
import banner4_mobile from '../assest/banner/img2_mobile.webp';
import banner5 from '../assest/banner/img3.jpg';
import banner5_mobile from '../assest/banner/img3_mobile.jpg';
import banner6 from '../assest/banner/img4.jpg';
import banner6_mobile from '../assest/banner/img4_mobile.jpg';
import banner7 from '../assest/banner/img5.webp';
import banner7_mobile from '../assest/banner/img5_mobile.png';
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

import { useEffect, useState } from "react";

import React from 'react'

function Banner() {

    const [changeBanner, setChangeBanner] = useState(0);
    const desktopImages = [
       banner7,
       banner4,
       banner2,
       banner5,
       banner6,
    ];
 
    const mobileImages = [
       banner4_mobile,
       banner3_mobile,
       banner5_mobile,
       banner6_mobile,
       banner7_mobile,
    ];
 
    useEffect(()=>{
     const interval = setInterval(() => {
           setChangeBanner((prv)=>(prv+1)); 
          setChangeBanner((prv)=>(prv % 5)); 
        },3000)
 
        return ()=> clearInterval(interval);
    },[])

    const nextSlide = () => {
        setChangeBanner((prv)=>(prv+1)); 
        setChangeBanner((prv)=>(prv % 5));
    }

    const previousSlide = () => {
        setChangeBanner((prv)=>(prv-1)); 
        setChangeBanner((prv)=>(prv < 0)? 4 : prv);
    }

 
  return (
    <div className='relative h-64 mt-6 lg:mt-3 md:mt-3 bg-red-500'>
      <div onClick={nextSlide} className=' transition-all hover:bg-orange-400 hover:text-white cursor-pointer text-xl bg-white shadow-lg p-2 rounded-full left-1 absolute z-10 top-1/2 -translate-y-1/2'>
         <FaAngleLeft />
      </div>
      <div  className=" hidden lg:flex md:flex   bg-red-400 flex-grow h-64  overflow-hidden ">
          {
          desktopImages.map((img, ind)=>{
              return (
                  <div style={{transform: `translateX(-${changeBanner*100}%) `}} key={ind} className=" transition-transform  ease-in-out duration-500 min-w-full h-full  bg-green-300">
                  <img className=" w-full h-full" src={img} alt="" />
                  </div>
              )
          })
          }
       </div>
       <div  className=" flex lg:hidden md:hidden  bg-red-400 flex-grow h-64  overflow-hidden ">
          {
          mobileImages.map((img, ind)=>{
              return (
                  <div style={{transform: `translateX(-${changeBanner*100}%)`}} key={ind} className=" transition-all min-w-full h-full  bg-green-300">
                  <img className=" w-full h-full" src={img} alt="" />
                  </div>
              )
          })
          }
       </div>
       <div onClick={previousSlide} className= ' transition-all hover:bg-orange-400 hover:text-white cursor-pointer text-xl bg-white shadow-lg p-2 rounded-full right-1 absolute z-10 top-1/2 -translate-y-1/2'>
          <FaChevronRight />
       </div>
        
    </div>
  )
}

export default Banner;