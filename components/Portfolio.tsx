import React from 'react'
import Image from 'next/image'
import portfolio from '../public/portfolio.jpg'

interface Props {
    
}

const Portfolio = (props: Props) => {
    return (
        <div className='md:h-[700px] w-full'>
            <div className='max-w-6xl mx-auto flex flex-col items-center justify-center h-full space-y-8'>
                <h2 className='text-purple-500 font-semibold text-xl mt-6 md:mt-0'>
                    Platform Capptify Works with
                </h2>
                <h2 className='text-black md:text-6xl text-4xl font-bold mb-4'>
                    Some of our Recent Work
                </h2>
                <div className='flex md:flex-row w-full items-center md:space-y-0 space-y-10 md:space-x-6 flex-col'>
                    <Image className='w-[400px] h-[280px]' src={portfolio} alt=''/>
                    <Image className='w-[400px] h-[280px]' src={portfolio} alt=''/>
                    <Image className='w-[400px] h-[280px]' src={portfolio} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
