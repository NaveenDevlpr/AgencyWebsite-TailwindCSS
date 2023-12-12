"use client"

import React, { useState } from 'react'
import logo from '../public/Uber.png'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMenu } from "react-icons/md"
import { MdClose } from "react-icons/md";



interface Props {
    
}

export interface NavLink {
    href: string;
    name: string;
  }

const navLinks:NavLink[]=[
    {
        href:'/',
        name:'Home'
    },
    {
        href:'/',
        name:'About'
    },
    {
        href:'/',
        name:'Social'
    },
    {
        href:'/',
        name:'Recent'
    },
    {
        href:'/',
        name:'Tech Stack'
    },
]

const Navbar = (props: Props) => {

    const [open,setOpen]=useState<boolean>(false)

    const handleTabOpen=()=>{
        setOpen(!open)
    }


    return (
        <>
        <div className='max-w-7xl flex items-center  justify-between h-[80px] mx-auto p-4 relative'>
            <div className='flex items-center space-x-8'>
                <Image src={logo} alt='logo' className='w-[100px] h-[65px] '/>
                <div>
                    <ul className='hidden md:flex space-x-8'>
                        {
                            navLinks.map((links,i)=>{
                                return(
                                    <li key={i}
                                    className='text-black font-medium text-[17px] p-2  hover:transition-all duration-500 hover:duration-500 cursor-pointer hover:scale-125'
                                    >{links.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='hidden md:flex items-center space-x-4'>
                <FaInstagram className='w-[25px] h-[25px] cursor-pointer hover:scale-125 hover:transition-all hover:duration-500 duration-500'/>
                <FaLinkedin className='w-[25px] h-[25px] cursor-pointer hover:scale-125 hover:transition-all hover:duration-500 duration-500'/>
            </div>
            <div className='md:hidden flex items-center cursor-pointer'
            onClick={()=>handleTabOpen()}
            >
                {
                    open?
                    <MdClose color='white' className='w-[30px] h-[30px] z-50'/>
                    :
                    <MdMenu className='w-[30px] h-[30px]'/>
                }
                
            </div>
            
        </div>
       {
        open && (
            <div className='md:hidden bg-black h-screen w-[400px] z-40 absolute top-0 right-0 bottom-0'>
                <ul className='flex flex-col items-center justify-center h-screen space-y-8'>
                    {
                        navLinks.map((links,i)=>{
                            return(
                                <li key={i}
                                className='text-white p-2 cursor-pointer'
                                >{links.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
       }
        </>
    )
}

export default Navbar
