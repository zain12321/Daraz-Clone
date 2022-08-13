import React from 'react'
import Cards from './Cards'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

const itemsstar = [
    {
      id: 1,
      image: "https://static-01.daraz.pk/p/cfd9a935d9b67c2de0793a354f0bc011.jpg",
      title:"Best earphone  quility best sound cheapprice",
      price:"Rs.150",
      original:"150",
      discount:"-33%",
    },
    {
        id: 2,
        image: "https://static-01.daraz.pk/p/b99265de826f0deece8c74c2404bebba.jpg",
        title:"Charger for android Mobile Quality price..",
      price:"Rs.130",
      original:"130",
      discount:"-20%",
      },
      {
        id: 3,
        image: "https://static-01.daraz.pk/p/90c9285a3b375efc53686fb17e06068b.png",
        title:"Mobile Watch modern watch is availabe now..",
        price:"Rs.2000",
        original:"2000",
        discount:"-45%",
      },
   
      {
        id: 4,
        image: "https://static-01.daraz.pk/p/987e49c7e8596060cf8025dc1212d8e1.jpg",
        title:"Mobile Handfree quailty of soundvery best..",
        price:"Rs.10000",
        original:"10000",
        discount:"-29%",
      },
      {
        id: 5,
        image: "https://static-01.daraz.pk/p/89c4559fcd336ff05646c36fb2cf6918.jpg",
        title:"Tooth brush very flexible and use able....",
        price:"Rs.120",
        original:"120",
        discount:"-33%",
      },
      {
        id: 6,
        image:"https://static-01.daraz.pk/p/f3cf439be796d2bb51f7518aec3b1855.jpg_200x200q75-product.jpg_.webp",
        title:"Best to car for children in very chep price",
        price:"Rs.200",
        original:"200",
        discount:"-10",
      },
      ]
  
function Flash() {
  return (
    <div className='mt-11'>
    
          <hi className="px-16 text-[17px] text-[#000000] font-semibold">Flash Sale</hi>
          <div className='bg-[#FFFFFF80] shadow-xl flex flex-col lg:h-[660px] w-[300px] sm:w-[1000px] xl:w-[1200px] xl:h-[360px] mx-11'> 
              <div className='flex items-center justify-between border-b border-gray-300 py-3  px-5'>
               <div className='flex items-center space-x-11 '>
                 <div><h1 className='text-[#F57224] text-[14px]'>On Sale Now</h1></div>
                 <div className='flex items-center'><h1 className='text-[14px]'>Ending In </h1>
                 <ul className='hidden sm:flex ml-6 space-x-4'>
                     <li className='bg-[#F57224] text-white px-2 py-1'>11</li>
                     <li className='bg-[#F57224] text-white px-2 py-1'>32</li>
                     <li className='bg-[#F57224] text-white px-2 py-1'>48</li>
                 </ul>
                 </div>
                
               </div>
               <div><button className='text-[#F57224] border border-[#F57224] py-1 px-1'>Shop More</button></div>
              </div>
              <div className='grid grid-cols-2 grid-rows-2 sm:grid-cols-3 sm:grid-rows-2 xl:flex '>
    {itemsstar?.map((item) => (
       <Cards {...item}/> 
    ))}

    </div>

          </div>
          <div className='flex items-center sm:w-[590px] md:w-[700px] lg:w-[900px] xl:w-[1200px] justify-between ml-14 mt-12 mb-6'>
       <div>
                     <h1 className='text-[22px] text-[#242424]'>DarazMall</h1>
       </div>
       <div className='flex items-center  text-[#F85606] 
       text-[14px] space-x-[2px] font-semibold'>
                    <p>SHOP MORE</p>
                    <MdOutlineArrowForwardIos className='text-[14px]'/>
       </div>
          </div>
    </div>
  )
}

export default Flash