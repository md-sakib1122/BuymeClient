import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../assest/logo.jpg';
import { useSelector } from 'react-redux';
import UserModal from './userModal';

function Header() {
    const user = useSelector(state => state.user.user);
    const [toggoleModal, setToggoleModal] = useState(false);

    return (
        <header className=' h-12 border-b  bg-white fixed z-50 w-full  top-0'>
            <div className=' px-8 mx-auto w-full bg-white flex justify-between items-center h-full'>
                <div>
                    <Link to={"/"}>
                        <img className='w-16' src={logo} alt="" />
                    </Link>
                </div>
                
                <div className='hidden lg:flex gap-9 justify-between h-full items-center ml-auto lg:ml-0'>
                    <Link to={"/"} className='hidden  font-serif lg:inline-block hover:border-b-2 hover:border-orange-400 py-3 hover:text-orange-400'>Home</Link>
                    <button className=' font-serif  hover:border-b-2 hover:border-orange-400 py-3 hover:text-orange-400'>Contact</button>
                    <button className=' font-serif hover:border-b-2 hover:border-orange-400 py-3 hover:text-orange-400'>About</button>

                    <div className=' border border-orange-400 rounded-r-lg h-[34px] w-[400px] bg-white lg:flex items-center justify-between hidden'>
                        <input type="text" className='h-full pl-[20px] w-full text-sm outline-none bg-white' placeholder='What are you looking for?' />
                        <button className='text-2xl bg-orange-400 h-full w-12 text-center text-white pl-2 rounded-r-md'><IoIosSearch /></button>
                    </div>
                </div>

                <div className='flex gap-[24px] items-center ml-4 relative'>
                    {Object.entries(user).length > 0 ? (
                        <div className='relative'>
                            {user?.proPic ? (
                                <div onClick={() => setToggoleModal(prev => !prev)} className='border-yellow-500 flex justify-center items-center border-2 rounded-full'>
                                    <img className='h-8 w-8 cursor-pointer rounded-full object-cover' src={user.proPic} alt="" />
                                </div>
                            ) : (
                                <div onClick={() => setToggoleModal(prev => !prev)} className='cursor-pointer text-3xl border-yellow-500 flex justify-center items-center border-2 rounded-full'>
                                    <FaRegUserCircle />
                                </div>
                            )}
                            {toggoleModal && <UserModal user={user} setToggoleModal={setToggoleModal}/>} {/* User modal setup */}
                        </div>
                    ) : (
                        <Link to={"/login"} className=' font-serif py-3 hover:border-b-2 border-orange-400'>Login</Link>
                    )}
                    
                    <span className='text-3xl text-orange-400 hover:'>
                        <CiHeart />
                    </span>
                    <span className='text-3xl text-orange-400 relative'>
                      <IoCartOutline />
                       <p className=' absolute text-xs px-1 -top-1 -right-1 text-white  bg-orange-400 rounded-full'>0</p>
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Header;
