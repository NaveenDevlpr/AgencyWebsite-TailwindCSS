import React from 'react'
import { IoMdAddCircle } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";


interface Props {
    
}
interface data{
    name:string,
    num:string,
    description:string
}

const datas:data[]=[
    {
        name:'brand',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
        num:'01'
    },
    {
        name:'build',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
        num:'02'
    },
    {
        name:'launch',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
        num:'03'
    },
    {
        name:'optimize',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ',
        num:'04'
    },
]
const Marketing = (props: Props) => {
    return (
        <div className='md:h-[650px] h-full w-full bg-zinc-100'>
           <div className='w-full flex flex-col items-center justify-center md:h-full md:flex md:flex-row md:items-center md:justify-between md:max-w-6xl md:mx-auto md:space-x-4'>
                <div className='flex flex-col justify-center md:w-1/4 w-1/2 sm:mt-6 md:mt-0'>
                    <h2 className='text-5xl text-black font-semibold mb-4'>
                        We know Marketing
                    </h2>
                    <p className='mt-2 text-black font-medium text-[20px] '>
                        Bringing your brand to life is a journey we shall embark on together.
                    </p>
                    <button className='p-2 mt-8 text-black bg-transparent rounded-sm border border-black'>
                        Get your free proposal
                    </button>
                </div>
                <div className='md:w-1/2 h-full flex items-center justify-center w-full sm:mt-6 md:mt-0'>
                   <ul className='flex flex-col space-y-8 p-6 '>
                    {
                        datas.map((data,i)=>{
                            return(
                                <li key={i}>
                                    <div className='flex space-x-5'>
                                        <div className='bg-black rounded-full w-[40px] h-[40px] flex items-center justify-center p-3 text-white'>
                                            {data.num}
                                        </div>
                                        <div className='flex flex-col'>
                                            <h2 className='text-black text-2xl font-semibold'>{data.name}</h2>
                                            <p className='text-[14px] text-black font-medium'>{data.description}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                   </ul>
                </div>
                <div className='relative bg-black rounded-3xl w-[150px] h-[150px] text-white text-[14px] flex items-center justify-center text-center'>
                    Capptify your Audience
                    <div className='w-[40px] h-[40px] p-2 bg-purple-400 absolute flex items-center justify-center rounded-full -bottom-3' >
                    <IoMdAdd color='white'
                    className='w-[35px] h-[35px] '
                    />
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Marketing
