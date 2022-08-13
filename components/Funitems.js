import React from 'react'
import { HiStar } from 'react-icons/hi'
function Funitems(props) {
    const {image, title, price, discount, original, feed} = props
  return (
    <div className='grid py-2 '>
     <div className='h-[335px] lg:h-80 hover:shadow-2xl bg-[#FFFFFF] pr-1'>
          <img className='h-48 w-56'
           src={image} alt=""/>
          
        <div className='pl-2'>
        <h1 className='text-[#212121]  text-[15px]'>{title}
          </h1>
          <p className='text-[#F85606] text-[18px]'>{price}</p>
          <p className='text-[#9E9E9E] text-[14px]'>{original}<span className=''>{discount}</span></p>
          <div className='flex items-center space-x-1'>
              <div className='flex text-yellow-500 text-[14px]'>
              <HiStar/>
              <HiStar/>
              <HiStar/>
              <HiStar/>
              </div>
              <p className='text-[#9E9E9E] text-[12px]'>{feed}</p>
          
 </div>
        </div>
</div>

    </div>
  )
}

export default Funitems