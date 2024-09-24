import React, { useContext, useState } from 'react'
import ROLE     from '../common/role'
import { ImCross } from "react-icons/im";
import role from '../common/role';
import summaryApi from '../common';

function EdituserModal({setIsEditModalOpen, editUser, fetchUsers}) {
   
   const [userrole, setUserRole] = useState(role.admin); 

   const handleChange = (e)=>{
     setUserRole(e.target.value);
   }
   
   const handleEditUser = async ()=>{
       const updatedUser = {
           ...editUser,
          role:userrole
       }
        

       const  response  = await fetch(summaryApi.updateUserRole.url,{
        method: summaryApi.updateUserRole.method,
        credentials:'include',
        headers :{'Content-Type': 'application/json'},
        body: JSON.stringify(updatedUser)
       });

       const dataEResponse = await response.json();
       if(dataEResponse.success){
          setIsEditModalOpen(false);
          await fetchUsers();
       }
     
       console.log('user role update....',dataEResponse.message);


   }


  return (
    <div className=' absolute  top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 flex justify-center  items-center '>
         <div className=' bg-white p-6 w-80 relative'>
             <div onClick={()=>setIsEditModalOpen(false)} className=' absolute top-2  cursor-pointer right-2'>
               <ImCross />
             </div>

             <h1 className=' font-bold mb-3'>Change User Role</h1>
             <p>Name: Sakib islam</p>
             <p>Email : mdaskib5566@gmail.com</p>
             <div className=' flex justify-between mt-3'>
                <div>Role :</div>
                <select onChange={handleChange}  className=' cursor-pointer outline-none border p-1' name="" id="">
                    {
                        Object.values(ROLE).map((el,ind) => {
                           return <option key={ind} value={el}>{el}</option>
                        })
                    }
                </select>
             </div>
             <div className='flex justify-center items-center mt-3'>
               <button onClick={handleEditUser} className=' px-2 py-1 bg-yellow-400 rounded-full text-black  hover:bg-yellow-600'>Change Role</button>
             </div>   
         </div>
    </div>
  )
}

export default EdituserModal;