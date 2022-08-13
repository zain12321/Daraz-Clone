import React from 'react'
import Home from './'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Flash from '../components/Flash'
import Fashion from '../components/Fashion'
import Footer from './Footer'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgShoppingCart } from 'react-icons/cg'
import { MdKeyboardArrowRight
   } from 'react-icons/md'
   import Link from 'next/link'
import Darazmall from '../components/Darazmall'
import Categories from '../components/Categories'
import Section from '../components/Section'

const items = [
    {
      id: 1,
      image: "https://icms-image.slatic.net/images/ims-web/52d5fa78-71ee-4174-ada6-829c46e84768.png",
      name:"Mart",
    },
    {
      id: 2,
      image: "https://icms-image.slatic.net/images/ims-web/ba5cad01-52dc-4546-82e0-8f227a6fff74.png",
      name:"Fashion",
    },
    {
      id: 3,
      image: "https://icms-image.slatic.net/images/ims-web/eeb41c48-d76c-4421-86fd-b8df8ab1a2c6.png",
      name:"Beauty",
    },
  ]

  
const Daraz = [
  {
    id: 1,
    image: "https://static-01.daraz.pk/original/24e0b7b353087cb4984257ae86450477.jpg",
    image2: "https://static-01.daraz.pk/other/shop/f4dc5c75de7ee1f397ad9aaf9bb0d23c.jpeg",
    title:"The vitamin Company",
    desc: "All Natural",
  },
  {
    id: 2,
    image: "https://static-01.daraz.pk/p/75e32a0f7b19c10cdad42e9c1e490580.jpg",
    image2: "https://static-01.daraz.pk/other/shop/893c7071913f900e482d68fe3c78aa1a.jpeg",
    title:"Boss",
    desc: "Boss",
  },
  {
    id: 3,
    image: "https://static-01.daraz.pk/p/4b4f40ee5f3446e2b8dc299831a9dd6c.jpg",
    image2: "https://static-01.daraz.pk/p/4b4f40ee5f3446e2b8dc299831a9dd6c.jpg",
    title:"Capital Entertainment",
    desc: "Capital",
  },
 { id: 4,
  image: "https://static-01.daraz.pk/p/115ac9f69f22a060af0ca2fe4191db46.jpg_200x200q75-product.jpg_.webp",
  image2: "https://static-01.daraz.pk/p/02efbf52678bbe0b484e463f0e169e32.jpg",
  title:"Burer",
  desc: "Bureur",
},
{
  id: 5,
  image: "https://static-01.daraz.pk/p/3006591b3c14c50f050339044ddfdfd9.jpg_200x200q80.jpg_.webp",
  image2: "https://static-01.daraz.pk/other/shop/77db0eff934546ffbc9fee6a5ccf4a8d.jpeg",
  title:"Good Lipstick",
  desc: "Lipstick",
},
{
  id: 6,
  image: "https://static-01.daraz.pk/p/8d266202b70f3149c4eaa6d8fa0ecb01.jpg",
  image2: "https://static-01.daraz.pk/other/shop/129e72c691fdc59a6ccc724dc3c9c56b.jpeg",
  title:"Body spray",
  desc: "Body fresher",
}
]
   
function Design() {
  return (
    <div>
      <div>
      <header className=' flex flex-col '>

      <div className=''>
      <ul className='flex justify-center items-center
       text-[12px] text-[#212121] cursor-pointer font-medium space-x-8 pl-56 bg-gray-100 py-[2px]  '>
        <li className='hover:text-[#F57224] hover:underline text-[#F57224]'>
        <div className='dropdowns '> 
                 <button className='dropdownbtns'>
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
                 <button className='dropdownbtns'>
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
                 <button className='dropdownbtns'>
                   SALE ON DARAZ
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
                 <button className='dropdownbtns'>
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
    <button className='dropbtn text-[12px] font-medium flex items-center '>
        TRACK MY ORDER
   </button>
   <div class="dropdown-content bg-[#FFFFFF] text-black border-2 border-black">
    <a href="#" className='hover:bg-gray-100 text-lg font-semibold px-4 '>Track my order</a>
    <a href="#" className='hover:bg-gray-100'>Please Confirm you email </a>
    <a href="#" ><input type="email" id="email" required className="bg-gray-100 py-2 px-[30px] outline-none
    border-t-4"/></a>
    <a href="#" className='hover:bg-gray-100'>You order number</a>
    <a href="#" ><input type="email" id="email" placeholder='eg.2383883'
     required className="bg-gray-100 py-2 px-4 outline-none border-t-4"/>
    <MdKeyboardArrowRight className='h-9 text-white  w-7 bg-[#F57224] '/></a>
    <a href="#" className='hover:bg-gray-100 py-4'>For any other inquireis <span className='text-blue-300 pl-2 '> Click here?</span> </a>

  </div>
  </div>
        </li>
        <Link href="/Login">
          <a>
          LOG OUT
          </a>
          </Link>
        <li className='hover:text-[#F57224] hover:underline '>
          <Link href="/Signup">
          <a>
          SIGNUP
          </a>
          </Link>
          </li>
        <li className='hover:text-[#F57224] hover:underline '>
         
          </li>
          <li className='hover:text-[#F57224] hover:underline '>
        <div className='dropdowns-menu'> 
                 <button className='dropdownbtns-menu'>
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
      <div className=' flex bg-[#FFFFFF]  items-center space-x-11 px-20 py-3'>
            <Link href="/"><a>
            <img
             className='h-11 
             w-36' 
             src="https://icms-image.slatic.net/images/ims-web/3ae67ef5-e5f6-42c3-9a40-993ef9a7bfae.png" 
             alt="" />
</a>
             </Link>
              
             <div className='flex items-center justify-between w-[700px] h-11  bg-gray-100 rounded-md'>
              <input type="search" id="search" placeholder='Search in Daraz'
              required className='bg-gray-100  px-2 outline-none' />
              <AiOutlineSearch className='py-3 px-3 h-11 w-14 bg-[#F57224] text-[#FFFFFF]'/>
             </div>
             <div className='flex items-center  space-x-12'>
               
                 <img className='h-11 w-11 rounded-full'
   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzkLZGb5La9xnprVJMPqcPtSKvsLj4Sah1sw&usqp=CAU" alt="" />
              {/* <CgShoppingCart className='h-6 w-11'/> */}
              <img  
              className='h-12 
              w-48' src="https://icms-image.slatic.net/images/ims-web/7a379e2e-4b65-4617-9188-94e0c768cd9d.png" alt="" />
             </div>
            
             </div> 
    </header>

      </div>
         <div>
    <Slider/> 
    <div className='flex mx-28'>
    {items?.map((item) => (
       <Fashion {...item}/> 
    ))}

    </div>
 <Flash/>
 <div className='flex space-x-[25px] ml-14'>
    {Daraz?.map((item) => (
       <Darazmall {...item}/> 
    ))}

    </div>
    <Categories/>
    <Section/>
    <Footer/> 
    </div>
    </div>
  )
}

export default Design