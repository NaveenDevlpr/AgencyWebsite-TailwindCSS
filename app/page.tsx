import Buisness from '@/components/Buisness'
import Footer from '@/components/Footer'
import HeaderOne from '@/components/Header'
import MainBanner from '@/components/MainBanner'
import Marketing from '@/components/Marketing'
import Navbar from '@/components/Navbar'
import Partners from '@/components/Partners'
import { Platforms } from '@/components/Platforms'
import Portfolio from '@/components/Portfolio'
import Ranking from '@/components/Ranking'
import Image from 'next/image'

export default function Home() {
  return (
   <div className='w-full'>
      <HeaderOne/>
      <Navbar/>
      <MainBanner/>
      <Marketing/>
      <Buisness/>
      <Ranking/>
      <Portfolio/>
      <Partners/>
      <Platforms/>
      <Footer/>
   </div>
  )
}
