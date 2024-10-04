import { useEffect, useState } from "react";
import Categories from "../component/Categories";
import { BsFileArrowDownFill } from "react-icons/bs";
import Banner from "../component/Banner";


function Home(){
   const [showCategoryList, setShowCategoryList] = useState(true);
   
   return(
       <>
         <div className=" relative flex flex-col sm:flex-row md:flex-row lg:flex px-8 gap-2 ">
            <div onClick={()=>setShowCategoryList(true)} className=" block md:hidden lg:hidden text-2xl  absolute -top-1">
               <BsFileArrowDownFill />
            </div>
         
            { 
              showCategoryList &&  <Categories setShowCategoryList={setShowCategoryList} /> 
            }
            <Banner/>
        </div>
      </>
   )
}

export default Home;