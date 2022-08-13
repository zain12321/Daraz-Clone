import React from 'react'

function Smallcard(props) {
    const {image, title, image1, title1} = props
  return (
    <div className='  flex  
    space-x-1 text-white  w-[1260px]  '>
      
        <div className='bg-[#FFFFFF] h-36 w-[155px] hover:shadow-2xl'>
    <img className='h-24 w-28 pl-6  py-2'  
    src={image1} alt=""/>
    <h1 className='text-[#242424] text-[14px] px-5 text-center'>{title1}</h1>
</div>
    </div>
  )
}

export default Smallcard