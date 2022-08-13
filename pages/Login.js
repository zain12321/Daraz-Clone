import React from 'react'
import Header from '../components/Header'
import { RiArrowDownSLine
} from 'react-icons/ri'
import Link from 'next/link'
import { FaRegStarHalf } from 'react-icons/fa'
import { GrFacebookOption } from 'react-icons/gr'
import { GrGooglePlus } from 'react-icons/gr'
import Footer from './Footer'

function Login() {
  return (
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
       
               <div className='flex flex-col  ml-64 space-y-7    pt-44 pb-8'>
                           <div className='flex space-x-[330px] items-center'>
                             <h1 className='text-[22px]  text-[#242424]'>Welcome to Daraz! Please login.</h1>
                             <p className='text-[12px]'>New member? 
                             <span className='text-[#1A9CB7] '> Register </span>here.</p>
                           </div>
                           <div className='bg-[#FFFFFF] flex justify-between px-11 py-8 w-[800px] h-[250px]'>
                               <div className='space-y-8'>

                       <div className='text-[#242424] text-[12px] font-normal'>
                               <h2>Phone Number or Email*</h2>
                               <input id="number" search="number" placeholder='Please enter
                               your Phone Number or Email'
                               className=' w-[400px]  px-1 border bg-[#FFFFFF] 
                               py-2 text-[15px] outline-none' required/>
                       </div>
                       <div className='text-[#242424] text-[12px] font-normal'>
                               <h2>Password*</h2>
                               <div className='border flex items-center justify-between '>
                                 <input id="number" search="number" placeholder='Please enter
                               your Password'
                               className=' w-[300px]  px-1 bg-[#FFFFFF] py-2 text-[15px] outline-none placeholder:text-[14px]' 
                               required/>
                               <FaRegStarHalf className='rotate-90 h-5 w-6 text-gray-400 pt-1'/>
                               </div>
                               <p className='flex pl-[310px] py-3 text-[#1A9CB7]'>Forgot Passord ?</p>
                               
                               </div>
                               </div>
                                <div>
                                    <div className='bg-[#F57224] w-72 mt-3 text-center py-3 '><button className='text-[#FFFFFF] 
                                    text-center'>
                                      
                                      <Link href="/Design">
                                 <a>
                                 Login</a></Link>
                                    
                                    </button></div>
                                    <h1 className='text-[#757575] text-[12px] pt-2 font-normal'>
                                      Or, login with</h1>
                                      <div className='bg-[#3B5998] w-72 mt-3 text-center
                                      space-x-5 py-[6px] flex items-center
                                      justify-center'>
                                      <GrFacebookOption className='text-[#FFFFFF] h-6 w-6'/>
                                        <button className='text-[#FFFFFF] 
                                    text-center text-[20px]'>
                                 <Link href="/Design">
                                 <a>
                                 <div className='dropdown-f'>
                                 <button className='dropdownbtn-f'>
                                 Facebook
                                 </button>
                                 <div className='dropdown-content-f
                                  flex items-center 
                                   bg-[#FFFFFF] text-black
                                    border-2 border-black text-[14px] shadow-2xl '>
                             
   <img className='h-8 w-8 ml-20 ' src="https://cdn.usbrandcolors.com/images/logos/facebook-logo.svg" alt=""/>
    <a href="#" className='hover:bg-gray-100 border my-2 mx-3 border-gray-400'>
      Login In with facebook 
    </a>
    
        
                                 </div>
                               </div>
                                 </a></Link>
                                    </button></div>
                                      <div className='bg-[#D34843] w-72 mt-3 text-center
                                      space-x-3 py-[6px] flex items-center
                                      justify-center'>
                                        <GrGooglePlus className='text-[#FFFFFF] h-7 w-7' />
                                        <button className='text-[#FFFFFF] 
                                    text-center text-[18px]'>
                                 <Link href='/Design'>
                                 <a> 
                                 <div className='dropdown-f'>
                                 <button className='dropdownbtn-f'>
                                 Google
                                 </button>
                                 <div className='dropdown-content-f
                                  flex items-center 
                                   bg-[#FFFFFF] text-black
                                    border-2 border-black text-[14px] shadow-2xl '>
                             
   <img className='h-16 w-24 ml-11 py-3' src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt=""/>
    <a href="#" className='hover:bg-gray-100 border my-2 mx-3 border-gray-400'>
      Login In with Google 
    </a>
    
        
                                 </div>
                               </div>
                                 </a></Link>
                                    </button></div>
                                   </div>

                           </div>
               </div>

               <div >
                 <Footer/>
               </div>
    </div>
  )
}

export default Login