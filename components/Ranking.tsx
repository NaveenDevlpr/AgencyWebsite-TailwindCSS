import Image from 'next/image'
import React from 'react'
import ranking from '../public/ranking.png'

interface Props {
    
}

const Ranking = (props: Props) => {
    return (
        <div className='md:h-screen h-screen w-full bg-black overflow-hidden'>
            <div className='flex flex-col md:max-w-5xl mx-auto items-center md[hidden]:justify-between h-full'>
                <h2 className='text-2xl font-semibold text-purple-600 mt-4'>
                    GMB & SEO
                </h2>
                <h2 className='text-4xl text-white font-bold mt-8'>
                    Clients Ranking #1 on GMB
                </h2>
               <div className='flex items-center justify-center w-full h-3/4 md:mt-0 p-8'>
                    <Image 
                    className='w-full h-full'
                    src={ranking} alt=''/>
               </div>
            </div>
        </div>
    )
}

export default Ranking
