import React from 'react'
import '../app/globals.css'
import banner from '../public/banner.png'
import Image from 'next/image'
interface Props {
    
}

const MainBanner = (props: Props) => {
    return (
        <div className='w-full bg-black flex flex-col md:flex-row md:h-screen justify-center items-center'>
           
            <div className='md:w-2/4 flex flex-col items-center justify-center w-full mt-[20px]'>
                <div className='flex flex-col items-start justify-center p-4'>
                    <p className='text-white text-6xl font-bold'>
                    An agency that<br/>understands<br/><span className='scrible'>branding</span>
                    </p>
                    <p className='text-white  text-[20px] font-medium mt-[60px] '>
                    When it comes to brand, We have a plan.
                    </p>
                    <button className='mt-5 border bg-transparent border-white text-white px-4 py-4 rounded-sm hover:bg-[#8718ef]  hover:text-black hover:border-black transition-all duration-500 '>
                         Get your free proposal
                    </button>
                </div>
            </div>
            <div className='md:w-2/4 flex items-center justify-center w-full h-screen'>
                <Image src={banner} alt='banner'/>
            </div>
        
        </div>
    )
}

export default MainBanner
