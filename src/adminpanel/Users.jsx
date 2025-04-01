import React, { useEffect, useState } from 'react'
import summaryApi from '../common'
import { MdModeEditOutline } from "react-icons/md";
import EdituserModal from './EdituserModal';
function Users() {
    const [allUsers, setAllusers] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editUser, setEditUser ] = useState({});
    const fetchUsers = async () =>{
        const response = await fetch(summaryApi.allUsers.url,{
            credentials:'include',
            method:summaryApi.allUsers.method
        })

       const users = await response.json()
       setAllusers(users.data);
       console.log('ALL USERS DATA',users.data);
    }

    const handleUser = (user) => {
        setIsEditModalOpen(true);
        setEditUser(user);
    }
       
   useEffect(()=>{

       fetchUsers()}
    ,[]);


     function readableDate(dateString) {
        const date = new Date(dateString);

        // Convert to a readable date format
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const readableDate = date.toLocaleDateString('en-US', options);
        return readableDate;
     }


  return (
    <div className=' h-[calc(100vh-90px)] overflow-y-scroll  flex flex-col bg-white p-6  col-span-3 w-full  relative'>
        {
         isEditModalOpen? <EdituserModal 
                             setIsEditModalOpen={ setIsEditModalOpen } 
                             editUser ={editUser} 
                             fetchUsers = {fetchUsers}
                         /> :""
        }  
        <div className='grid  grid-cols-12'>
            <div className='border h-9 flex justify-center items-center bg-black text-white'>Sr.</div>
            <div className='col-span-3 border h-9 flex justify-center items-center  bg-black text-white'>Name</div>
            <div className='col-span-4 border h-9 flex justify-center items-center  bg-black text-white' >Email</div>
            <div className='border h-9 flex justify-center items-center  bg-black text-white'>Role</div>
            <div className='border h-9 col-span-2 flex justify-center items-center  bg-black text-white'>Created Date</div>
            <div className='border h-9 flex justify-center items-center  bg-black text-white'>Action</div>
        </div>
        {
           allUsers.length>0 ? (allUsers.map((user,ind)=>{
              return(
                <div key={ind} className='grid  grid-cols-12'>
                    <div className='border text-sm lg:text-[1rem] h-9 flex justify-center items-center'>{ind+1}</div>
                    <div className='col-span-3 text-sm lg:text-[1rem] border h-9 flex justify-center items-center'>{user.name}</div>
                    <div className='col-span-4 border h-9 flex text-sm lg:text-[1rem] justify-center items-center'>{user.email}</div>
                    <div className='border text-sm lg:text-[1rem] h-9 flex justify-center items-center'>{user.role}</div>
                    <div className='border text-sm lg:text-[1rem] h-9 col-span-2 flex justify-center items-center'>{ readableDate(user.createdAt)}</div>
                    <div className='border h-9 flex justify-center items-center'>
                        <button onClick={()=>handleUser(user)}  className='p-1 hover:bg-black hover:text-white bg-slate-200 rounded-full'> <MdModeEditOutline /> </button>
                    </div>
                </div>
              )
            })
          ):""
        }
    
</div>

  )
}

export default Users