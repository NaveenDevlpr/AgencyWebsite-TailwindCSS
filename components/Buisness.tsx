import React from 'react'
import marketing from '../public/marketing.png'
import Image from 'next/image'
interface Props {
    
}

const Buisness = (props: Props) => {
    return (
        <div className='md:h-screen h-full w-full'>
            <div className='w-full flex flex-col items-center justify-center md:h-full md:flex md:flex-row md:items-center md:justify-between md:max-w-6xl md:mx-auto'>
                <div className='w-2/4 h-full flex flex-col justify-center items-start md:p-2 mt-4 md:mt-0'>
                    <h2 className='text-5xl text-black font-semibold'>
                        Google Buisness<br/>Profile, SEO and<br/>Paid Ads
                    </h2>
                    <p className='text-black text-[20px] font-medium leading-8 mt-4'>
                    Connecting you with your customers. More than branding, Capptify will help you find the right clients. We are experts at Search Engine Optimization and Paid Ad Campaigns.
                    </p>

                    <button className='p-3 mt-8 text-black bg-transparent rounded-sm border border-black'>
                        Get your free proposal
                    </button>
                </div>

                <div className='flex-1 md:flex flex-col items-center justify-center  mt-6 md:mt-0 md:w-full md:h-full w-1/2 h-1/2 overflow-hidden'>
                    <Image 
                    className=''
                    src={marketing} alt='marketing'/>
                </div>
            </div>
        </div>
    )
}

export default Buisness
