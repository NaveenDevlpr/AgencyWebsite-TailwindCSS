import React from 'react'
import Image from 'next/image'
import partner from '../public/partner.png'

interface Props {
    
}

export const Platforms = (props: Props) => {
    return (
        <div className='md:h-screen h-screen bg-zinc-100 flex flex-col justify-center items-center w-full overflow-hidden'>
            <div className='flex flex-col items-center justify-center space-y-4'>
                <h2 className='text-purple-500 font-semibold text-xl mb-6'>
                    Partners Capptify works with
                </h2>
                <h2 className='text-black text-5xl font-bold'>
                    Tech Stack We Love
                </h2>
            </div>
           
            <div className='grid md:grid-cols-4 grid-cols-2 md:gap-4 md:w-full md:mx-auto mt-10 w-full gap-4'>
                    <div className='w-full flex items-center justify-center'>
                    <Image  className='md:w-[200px] w-[150px]' src={partner}  alt=''/>
                    </div>

                    <div className='w-full flex items-center justify-center'>
                    <Image  className='md:w-[200px] w-[150px]' src={partner}  alt=''/>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                    <Image  className='md:w-[200px] w-[150px]' src={partner}  alt=''/>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                    <Image  className='md:w-[200px] w-[150px]' src={partner}  alt=''/>
                    </div>

                    <div className=' md:block hidden relative w-full '>
                <h2 className='text-[180px] text-slate-200 font-bold absolute opacity-70 '>
                    CAPPTIFY
                </h2>
             </div>   
            </div>
               
</div>
    )
}
