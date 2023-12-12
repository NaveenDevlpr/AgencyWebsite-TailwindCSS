import React from 'react'
import partner from '../public/partner.png'
import Image from 'next/image'


interface Props {
    
}

const Partners = (props: Props) => {
    return (
        <div className='md:h-[450px] h-screen bg-black flex flex-col w-full'>
                <div className='flex flex-col items-center justify-center w-full h-full space-y-4'>
                    <h2 className='text-purple-500 font-semibold text-xl mb-4'>
                        Capptify Partners
                    </h2>
                    <h2 className='text-white text-5xl font-bold'>
                        Our Trusted Partners
                    </h2>
                 </div>
                   
                    <div className='grid md:grid-cols-4 grid-cols-2 md:gap-4 md:w-full md:mx-auto h-full w-full gap-4'>
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

                            
                        </div>
                
                  
            
        </div>
    )
}

export default Partners
