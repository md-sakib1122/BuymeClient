import React from 'react'
import { Link } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LiaUserEditSolid } from "react-icons/lia";
import { GrUserAdmin } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import summaryApi from '../common';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../store/user_Details_Slice';
import role from '../common/role';

 function UserModal({user,setToggoleModal}) {

  const dispatch = useDispatch();
    const logout = async () => {
     
          const response = await fetch(summaryApi.userLogout.url,{
            method: summaryApi.userLogout.method,
            credentials: 'include', 
          });

          const dataApi = await response.json();
          
          if(dataApi.success){
              toast.success(dataApi.message);
             
              dispatch(setUserDetails({}))
              setToggoleModal(false);
          }

          if(dataApi.error){
            console.log(error.message);
          }

    }

  return (    
        <div className=' absolute bg-white w-52 -left-14  top-14  border  p-3 shadow-2xl rounded-md px-4'> {/*  user modal */}
            <div className=' flex gap-x-2 items-center'> 
                {
                  user?.proPic ?( 
                  <div className=' m-0 w-8 h-8 border-yellow-500 flex justify-center items-center border-2 rounded-full '>
                    <img className=' h-8 w-8 cursor-pointer rounded-full object-cover' src={user.proPic} alt="" />
                  </div>  
                 ) : (
                     <div className=' m-0 w-8 h-8 border-yellow-500 flex justify-center items-center border-2 rounded-full '>
                             <FaRegUserCircle />
                     </div>
                     )
                  
                }
               
                <div className=''>
                   <h2 className=' font-bold'>{user?.name}</h2>
                   <h3 className=' -mt-1 text-slate-500'>{user.role}</h3>
                </div>
            </div>
            {
              role.admin == user.role && ( 
              <div className='flex  gap-2 items-center mt-2 hover:bg-slate-200  p-2 cursor-pointer'>
                <GrUserAdmin />
                <Link onClick={()=>setToggoleModal(false)} to={"/admin-panel"}>Admin Panel</Link>
              </div>
              )
            }
           
            <div className='flex  gap-2 items-center  hover:bg-slate-200  p-2 cursor-pointer'>
              <MdOutlineRemoveRedEye />
              <Link to={'/show-profile'}> ShowProfile</Link>
            </div>
            <div className='flex  gap-2 items-center  hover:bg-slate-200  p-2 cursor-pointer'>
              <LiaUserEditSolid />
              <button>Edit Profile</button>
            </div>
            <div className='flex  gap-2 items-center  hover:bg-slate-200  p-2 cursor-pointer'>
              <IoLogOutOutline />
              <button onClick={()=>logout()}>Sign out</button>
            </div>
      </div>
  )
}

export default UserModal