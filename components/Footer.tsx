import Image from 'next/image'
import React from 'react'
import logo from '../public/Uber.png'
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <div className='md:h-full h-full w-full bg-black'>
            <div className='h-full w-full flex-col md:h-[450px] md:flex-row md:max-w-6xl md:mx-auto flex items-center justify-center'>
                <div className='md:w-1/4 flex flex-col md:items-start items-center justify-center w-full h-full'>
                    <h2 className='md:text-5xl text-[80px] text-white font-bold'>Logo</h2>
                    <div className='flex flex-col items-center space-y-5 mt-5'>
                        <div className='flex space-x-2 items-center'>
                            <FiPhone width={5} height={5} color='white'/>
                            <h2 className='text-white text-sm font-medium'>
                            +1 (306) 715-4740
                            </h2>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <MdOutlineMailOutline width={5} height={5} color='white'/>
                            <h2 className='text-white text-sm font-medium'>
                            info@capptify.io
                            </h2>
                        </div>
                    </div>
                </div>

                <div className='flex flex-1 flex-col justify-center space-y-5 h-full pt-10'>
                    <h2 className='text-white font-semibold text-[18px]'>
                        SignUp for uour Newsletter
                    </h2>

                    <div className='flex items-center justify-between w-full space-x-4'>
                       <div className='w-full'>
                            <input 
                                className='px-4 py-2 outline-none border-0 w-full'
                                type='email' placeholder='Your email here'>

                            </input>
                       </div>
                        <button className='bg-purple-500 px-4 py-2 rounded-sm border-0'>send</button>
                    </div>

                    <h2 className='text-white font-semibold text-3xl'>
                        An Agency that understands branding
                    </h2>
                </div>

                <div className='flex space-x-6 md:w-1/4 justify-center items-center h-full w-full mt-10 md:mt-0'>
                <FaInstagram 
                color='white'
                className='w-[45px] h-[45px] cursor-pointer hover:scale-125 hover:transition-all hover:duration-500 duration-500'/>
                <FaLinkedin 
                color='white'
                className='w-[45px] h-[45px] cursor-pointer hover:scale-125 hover:transition-all hover:duration-500 duration-500'/>
                </div>
            </div>
            <div className="border-b border-gray-400/50 mb-4 w-full mt-10"></div>
            <div className='md:max-w-6xl md:mx-auto flex justify-between items-center px-4 md:px-0'>
               <h2 className='text-gray-100/50 text-[13px] mb-4'>
                 © 2023 capptify . All Rights Reserved.
               </h2>

               <div className='flex items-center space-x-8 mb-4 px-4 md:px-0'>
                    <h2 className='text-gray-100/50 text-[13px]'>
                        Privacy Policy
                    </h2>
                    <h2 className='text-gray-100/50 text-[13px]'>
                            Terms of Services
                    </h2>
               </div>
            </div>
        </div>
    )
}

export default Footer
