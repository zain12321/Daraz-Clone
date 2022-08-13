import React from 'react'
import Header from '../components/Header'
import { RiArrowDownSLine
} from 'react-icons/ri'
import Link from 'next/link'
import { FaRegStarHalf } from 'react-icons/fa'
import { GrFacebookOption } from 'react-icons/gr'
import { GrGooglePlus } from 'react-icons/gr'
import Footer from './Footer'
import Signinpage from './Signinpage'

function Signup() {
  return (
    <div>

    <div>
    <Header/>

    </div>
     

    <div>
     <div className='bg-gray-100'>
        <div className=' fixed top-0 flex flex-col shadow-sm'>
          <Link href="/"><a><Header/></a></Link>
    

       <div className='flex items-center pl-40 text-[#242424] py-3 space-x-4 bg-[#FFFFFF]'>
         <ul>
       <li className='hover:text-[#F57224] hover:underline '>

        <div className='dropdowns-card'> 
                 <button className='dropdownbtns-card text-[#242424]'>
                Categories
                  
                 </button>
<div class="dropdown-contents-card bg-[#FFFFFF] text-black border-2 border-black text-[14px] shadow-2xl">
    <a href="#" className='hover:bg-gray-100 '>Electronic </a>
    <a href="#" className='hover:bg-gray-100'>Ewlocyranics  </a>
    <a href="#" className='hover:bg-gray-100'>New Model  Cars </a>
 
    <a href="#" className='hover:bg-gray-100 '>Electronic </a>
    <a href="#" className='hover:bg-gray-100'>Ewlocyranics  </a>
    <a href="#" className='hover:bg-gray-100'>New Model  Cars </a>
    <a href="#" className='hover:bg-gray-100 py-4'>Mobile Phones </a>

  </div>

                </div></li>
                </ul>
        <RiArrowDownSLine className='hover:rotate-180 h-5 w-5 text-[#242424]'/>
       </div>
        </div>



        <div className='flex flex-col  ml-64 space-y-7    pt-24 pb-8'>
          <Signinpage/>
               </div>

               <div >
                 <Footer/>
               </div>
                   </div>
              </div>
             </div>
  )
}

export default Signup