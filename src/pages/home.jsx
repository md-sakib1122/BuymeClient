import { useEffect, useState } from "react";
import Categories from "../component/Categories";
import { BsFileArrowDownFill } from "react-icons/bs";
import Banner from "../component/Banner";
import HorizontalCardProduct from "../component/HorizontalCardProduct";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TiGift } from "react-icons/ti";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineSupport } from "react-icons/md";
import VerticalCardProduct from "../component/VerticalCardProduct";

function Home(){
   const [showCategoryList, setShowCategoryList] = useState(false);
   
   return(
       <div className="  "> 
         <div className=" container mx-auto relative flex flex-col sm:flex-row md:flex-row lg:flex  gap-2 ">
            <div onClick={()=>setShowCategoryList(true)} className=" block md:hidden lg:hidden text-2xl  absolute -top-1">
               <BsFileArrowDownFill />
            </div>
         
            { 
              <Categories showCategoryList={showCategoryList} setShowCategoryList={setShowCategoryList} /> 
            }
            <div className=" flex flex-col">
               <Banner/>
                <div className=" pt-2 bg-white flex-1 ">
                   <div className=" px-12 hidden md:flex justify-between bg-slate-200 h-full ">
                       <div className=" h-full flex flex-col justify-center items-center max-w-60">
                          <p className=" mb-3 text-orange-400 text-5xl"><LiaShippingFastSolid /></p>
                          <h3 className=" font-bold ">Free Shiping </h3>
                          <p className=" text-slate-500">Shiping On Orders over $99</p>
                       </div>
                       
                       <div className=" h-full flex flex-col justify-center items-center max-w-60">
                          <p className=" mb-3 text-orange-400 text-5xl"><TiGift /></p>
                          <h3 className=" font-bold ">Special Gift Card</h3>
                          <p className=" text-slate-500">Buy One Get One</p>
                       </div>

                       <div className=" h-full flex flex-col justify-center items-center max-w-60">
                          <p className=" mb-3 text-orange-400 text-5xl"><GiReturnArrow /></p>
                          <h3 className=" font-bold ">Return And Refund</h3>
                          <p className=" text-slate-500">30 Days Money Back Gurantee</p>
                       </div>

                       <div className=" h-full flex flex-col justify-center items-center max-w-60">
                          <p className=" mb-3 text-orange-400 text-5xl"><MdOutlineSupport /></p>
                          <h3 className=" font-bold ">Quality Support</h3>
                          <p className=" text-slate-500">Fast And Secure</p>
                       </div>
                   </div>
                </div>
            </div>
           
        </div>
     
        <HorizontalCardProduct category ={"airpodes"} heading={"New Arrival"} />
        <VerticalCardProduct category ={"camera"} heading={"Top Airphones"} />
        <VerticalCardProduct category={'mobiles' }  heading='Recomended'/>
  
     </div>
   )
}

export default Home;