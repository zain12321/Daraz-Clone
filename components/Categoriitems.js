import React from 'react'

function Categoriitems(props) {

    const {image, title, image1, title1} = props
  return (
    <div className='xl:flex  
    space-x-1 text-white w-[1000px] xl:w-[1260px]  '>
       <div className='bg-[#FFFFFF] h-28 w-[150px] xl:h-36 xl:w-[155px] hover:shadow-2xl'>
           <img className='h-24 w-28 pl-6  py-2'  
           src={image} alt=""/>
           <h1 className='text-[#242424] text-[14px] px-5 text-center'>{title}</h1>
       </div>
    
              
    </div>
  )
}

export default Categoriitems