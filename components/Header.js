import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgShoppingCart } from 'react-icons/cg'
import { MdKeyboardArrowRight
   } from 'react-icons/md'
   import Link from 'next/link'
function Header() {
  return (
   
    <header className='flex flex-col'>

      <div className=''>
      <ul className='hidden md:flex justify-center items-center
       text-[12px] text-[hsl(0,0%,13%)] cursor-pointer font-medium space-x-1 lg:space-x-8 pl-1
        xl:pl-56 bg-green-100 py-[2px]  '>
        <li className='hover:text-[#F57224] hover:underline text-[#F57224]'>
        <div className='dropdowns '> 
                 <button className='dropdownbtns hover:underline '>
                   SAVE MORE ON APPS
                 </button>
<div class="dropdown-contents bg-[#FFFFFF] text-black border-2 border-black text-[14px] shadow-2xl">
    <a href="#" className='hover:bg-gray-100 '>Electronic Accessories</a>
    <a href="#" className='hover:bg-gray-100'>Ewlocyranics machinery </a>
    <a href="#" className='hover:bg-gray-100'>New Model  Cars </a>
    <a href="#" className='hover:bg-gray-100'>Best Watchs</a>
    <a href="#" className='hover:bg-gray-100'>Cricket Bat</a>
    <a href="#" className='hover:bg-gray-100'>House interirior</a>
    <a href="#" className='hover:bg-gray-100'>New cloths</a>
    <a href="#" className='hover:bg-gray-100'>Tv and Home</a>
    <a href="#" className='hover:bg-gray-100'>Cricket Bat</a>
    <a href="#" className='hover:bg-gray-100'>House interirior</a>
    <a href="#" className='hover:bg-gray-100'>New cloths</a>
 
    <a href="#" className='hover:bg-gray-100 py-4'>Mobile Phones </a>

  </div>

                </div></li>




                <li className='hover:text-[#F57224] hover:underline '>
        <div className='dropdowns'> 
                 <button className='dropdownbtns hover:underline '>
                  DARAZ AFFILIATE PROGRAM
                 </button>
<div class="dropdown-contents bg-[#FFFFFF] text-black border-2 border-black text-[14px] shadow-2xl">
    <a href="#" className='hover:bg-gray-100 '>Best shoes</a>
    <a href="#" className='hover:bg-gray-100'>New Model Laptop </a>
    <a href="#" className='hover:bg-gray-100'>New Model  Cars </a>
    <a href="#" className='hover:bg-gray-100'>Best Home Services</a>
    <a href="#" className='hover:bg-gray-100'>Contact number</a>
    <a href="#" className='hover:bg-gray-100'>Own Buisseness</a>
    <a href="#" className='hover:bg-gray-100'>New cloths</a>
        
    <a href="#" className='hover:bg-gray-100'>Tv and Home</a>
    <a href="#" className='hover:bg-gray-100'>Cricket Bat</a>
    <a href="#" className='hover:bg-gray-100'>House interirior</a>
    <a href="#" className='hover:bg-gray-100'>New cloths</a>
 
    <a href="#" className='hover:bg-gray-100 py-4'>Mobile Phones </a>

  </div>

                </div></li>






                <li className='hover:text-[#F57224] hover:underline '>
        <div className='dropdowns'> 
                 <button className='dropdownbtns hover:underline '>
                   SALE ON DARAZ
                 </button>
<div class="dropdown-contents bg-[#FFFFFF] text-black border-2 border-black text-[14px] shadow-2xl">
    <a href="#" className='hover:bg-gray-100 '>Electronic Accessories</a>
    <a href="#" className='hover:bg-gray-100'>Eleocyranics machinery </a>
    <a href="#" className='hover:bg-gray-100'>New Model  Cars </a>
    <a href="#" className='hover:bg-gray-100'>Best Watches</a>
    <a href="#" className='hover:bg-gray-100'>Cricket Bat</a>
    <a href="#" className='hover:bg-gray-100'>House interirior</a>
    <a href="#" className='hover:bg-gray-100'>New cloths</a>
        
    <a href="#" className='hover:bg-gray-100'>Tv and Home</a>
    <a href="#" className='hover:bg-gray-100'>Cricket Bat</a>
    <a href="#" className='hover:bg-gray-100'>House interirior</a>
    <a href="#" className='hover:bg-gray-100'>New cloths</a>
 
    <a href="#" className='hover:bg-gray-100 py-4'>Mobile Phones </a>

  </div>

                </div></li>
                <li className='hover:text-[#F57224] hover:underline '>
        <div className='dropdowns'> 
                 <button className='dropdownbtns hover:underline '>
                 CUSTOMER CARE
                 </button>
<div class="dropdown-contents bg-[#FFFFFF] text-black border-2 border-black text-[14px] shadow-2xl">
    <a href="#" className='hover:bg-gray-100 '>Electronic Accessories</a>
    <a href="#" className='hover:bg-gray-100'>Ewlocyranics machinery </a>
    <a href="#" className='hover:bg-gray-100'>New Model  Cars </a>
    <a href="#" className='hover:bg-gray-100'>Best Watchs</a>
    <a href="#" className='hover:bg-gray-100'>Cricket Bat</a>
    <a href="#" className='hover:bg-gray-100'>House interirior</a>
    <a href="#" className='hover:bg-gray-100'>New cloths</a>
        
    <a href="#" className='hover:bg-gray-100'>Tv and Home</a>
    <a href="#" className='hover:bg-gray-100'>Cricket Bat</a>
    <a href="#" className='hover:bg-gray-100'>House interirior</a>
    <a href="#" className='hover:bg-gray-100'>New cloths</a>
 
    <a href="#" className='hover:bg-gray-100 py-4'>Mobile Phones </a>

  </div>

                </div></li>

        <li className='hover:text-[#F57224] hover:underline '>
        <div className='dropdown'>
    <button className='dropbtn text-[12px] font-medium flex items-center hover:underline hover:text-[#F57224] '>
        TRACK MY ORDER
   </button>
   <div class="dropdown-content bg-[#FFFFFF] text-black border-2 border-black ">
    <a href="#" className='hover:bg-gray-100 text-lg font-semibold px-4 '>Track my order</a>
    <a href="#" className='hover:bg-gray-100'>Please Confirm you email </a>
    <a href="#" ><input type="email" id="email" required className="bg-gray-100 py-2 px-[30px] outline-none
    border-t-4"/></a>
    <a href="#" className='hover:bg-gray-100'>You order number</a>
    <a href="#" ><input type="email" id="email" placeholder='eg.2383883'
     required className="bg-gray-100 py-2 px-4 outline-none border-t-4"/>
    <MdKeyboardArrowRight className='h-9 text-white  w-7 bg-[#F57224] '/></a>
    <a href="#" className='hover:bg-gray-100 py-4'>For any
     other inquireis <span className='text-blue-300 pl-2 '> Click here?</span> </a>

  </div>
  </div>
        </li>
        <li className='hover:text-[#F57224] hover:underline'> 
          <Link href="/Login">
          <a>
          LOGIN
          </a>
          </Link></li>
     
        <li className='hover:text-[#F57224] hover:underline '>
          <Link href="/Signup">
          <a>
          SIGNIN
          </a>
          </Link>
          </li>
        <li className='hover:text-[#F57224] hover:underline '>
         
          </li>
          <li className='hover:text-[#F57224] hover:underline '>
        <div className='dropdowns-menu'> 
                 <button className='dropdownbtns-menu hover:underline '>
                 زبان تبدیل کریں
                 </button>
<div class="dropdown-contents-menu bg-[#FFFFFF] text-black border-2 border-black text-[14px] shadow-2xl">

<div>
  <img
  className='h-10 w-10 rounded-full ml-11' src="https://media.istockphoto.com/vectors/flag-of-pakistan-vector-id472330681?k=20&m=472330681&s=612x612&w=0&h=5Qdo76qlQlFIqKDir3kldQB_cgQ227WC0irPs1PxIN4="
   alt=""/>
<a href="#" className='hover:bg-gray-100 ml-11'>Urdu</a>

</div>
  
<div>
  <img
  className='h-10 w-10 rounded-full ml-11' 
  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
   alt=""/>
<a href="#" className='hover:bg-gray-100 ml-10'>English</a>
   
</div>
  </div>

                </div></li>

      </ul>
      </div>
      <div className=' flex bg-[#FFFFFF] items-center md:space-x-11  md:px-20 py-3'>
            
            <img
             className='h-11 
             w-36' 
             src="https://icms-image.slatic.net/images/ims-web/3ae67ef5-e5f6-42c3-9a40-993ef9a7bfae.png" 
             alt="" />
              
             <div className='flex items-center justify-between sm:w-[480px]  md:w-[700px] h-11  bg-gray-100 rounded-md'>
              <input type="search" id="search" placeholder='Search in Daraz'
              required className='bg-gray-100  px-2 outline-none' />

              <Link href="/Login">
              <a>
              <AiOutlineSearch className='py-3 px-3 h-11 w-14 bg-[#F57224] text-[#FFFFFF]'/>
              </a></Link>
             </div>
             <div className='hidden  md:flex items-center  space-x-12'>
              <CgShoppingCart className='h-6 w-11'/>
              <img  
              className='hidden md:flex h-12 
              w-48' src="https://icms-image.slatic.net/images/ims-web/7a379e2e-4b65-4617-9188-94e0c768cd9d.png" alt="" />
             </div>
            
             </div> 
    </header>

    
 
  
  )
}

export default Header