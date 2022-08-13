import React from 'react'
import { MdKeyboardArrowRight
} from 'react-icons/md'
function Fashion(props) {
  const {image, name} =  props
  return (
    <div className='mt-[16px]'>
     <div className='sm:grid hidden md:grid-rows-1 md:grid-cols-2 xl:flex w-[300px] lg:w-[380px]
      h-[40px] bg-[#FFFFFF] text-white hover:text-green-900
      justify-between items-center
      shadow-2xl py-2 md:space-x-9 xl:mx-1 lg:space-x-6 rounded-2xl 
     '  >
       <div className='flex items-center space-x-3'>
       <img className='h-9 w-9 rounded-full
       ' src={image} alt="" />
        <h1 className='text-black text-xl'>{name}</h1>
       </div>
                  <div>                <MdKeyboardArrowRight className='h-7 w-7'/>
                  </div>
         </div>
                  </div>
  )
}

export default Fashion