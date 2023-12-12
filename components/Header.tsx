import React from 'react'
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";


interface Props {
    
}

const HeaderOne = (props: Props) => {
    return (
       <div className='hidden md:flex  bg-zinc-100 p-1'>
         <div className='flex justify-between items-center w-full mx-[80px]'>
            <div className='flex items-center space-x-10'>
                <div className='flex space-x-2 items-center'>
                    <FiPhone width={5} height={5} color='black'/>
                    <h2 className='text-black text-sm font-medium'>
                       +1 (306) 715-4740
                    </h2>
                </div>
                <div className='flex items-center space-x-2'>
                    <MdOutlineMailOutline width={5} height={5}/>
                    <h2 className='text-black text-sm font-medium'>
                       info@capptify.io
                    </h2>
                </div>
            </div>
            <button className='hover:bg-transparent hover:border-black  hover:border-[1.5px] hover:text-black text-[16px] rounded-sm h-[60px] px-4 text-white bg-black transition-all duration-500'>
                Client Information Form
            </button>
         </div>
       </div>
    )
}

export default HeaderOne
