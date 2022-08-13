import React from 'react'

function Cards(props) {
    const { image, title, price, discount, original } = props
  return (
    <div className='leading-none space-x-11 sm:space-x-1 lg:px-14 xl:px-1 '>
       <div className='w-48 h-72 hover:shadow-2xl space-y-1 p-2'>
           <img
           className='h-40 w-44' src={image} altt="" />
           <h1 >
{title}
</h1>
              <h1 className="text-[#F57224]">{price}</h1>
<div className="flex items-center space-x-3 w-8 text-[13px]"><p className=''>{original}</p><span>{discount}</span></div>
       </div>

    </div>
  )
}

export default Cards