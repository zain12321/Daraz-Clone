import React from 'react'

function Darazmall(props) {
  const { image, image2, title, desc } = props
  return (
    <div className=' flex   '>
         <div className='h-60 w-44 hover:shadow-2xl mb-24  '>
         <div className='z-10 h-24 w-44   bg-[#F5F5F5]'>
             <img className='' src={image} alt=""/>
            
           </div>
          
           <div className='bg-[#FFFFFF] '>
                   <div className=' mt-11'>
           <img className='h-16 w-[70px] ml-[47px]'
            src={image2} alt="" />
            </div> 
             <h1 className='text-[#242424] text-[14px] pt-8 text-center'>{title}</h1>
             <p className='text-gray-600 text-[12px] text-center pb-3'>{desc}</p>
           </div>
         </div>
    </div>
  )
}

export default Darazmall