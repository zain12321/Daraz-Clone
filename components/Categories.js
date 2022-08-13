import React from 'react'
import Categoriitems from './Categoriitems'
import Smallcard from './Smallcard'

const smallcard = [
    {
        id:1,
        image:"https://static-01.daraz.pk/p/a119804d071a504605f7a67d19a112bf.jpg",
        title:"Night Cream",
    },
    {
        id:2,
        image:"https://static-01.daraz.pk/original/5496c2f3a15e80d00ff02666d8b07377.jpg",
        title:"Cleaning Buckets & Tubs",
    },
    {
        id:3,
        image:"https://static-01.daraz.pk/p/60ab2b0b5a1120e7216719289fce2b02.jpg",
        title:"Anitibactirial & Antifungal",
    },
    {
        id:4,
        image:"https://pk-live-21.slatic.net/kf/Sf017339e25f745f8a7a82b9f09c216c2R.jpg",
        title:"Toddler Toys",
    },
    {
        id:5,
        image:"https://static-01.daraz.pk/original/f484f748786a514c8374d1c078950ab8.jpg",
        title:"Cooking Nives",
    },
    {
        id:6,
        image:"https://static-01.daraz.pk/p/738bcaae15018deb08144edc25de1a90.jpg",
        title:"Service Product",
    },
    {
        id:7,
        image:"https://static-01.daraz.pk/original/73817e1939029f22bd545b5e60847041.jpg",
        title:"Clutches",
    },
    {
        id:8,
        image:"https://static-01.daraz.pk/p/9bb027eb2440a88ec971d47fa112f41d.jpg",
        title:"Electric Sandwith Makers & Presses",
    },
 

]

const bigcard = [
    {
        id:9,
        image1:"https://static-01.daraz.pk/p/39cdfbe62ca14456e44e2ec96f99d3a7.jpg",
        title1:"Baby Food",
    },
    {
        id:10,
        image1:"https://static-01.daraz.pk/p/bf085b1f204803b3b1c527fa89faab76.jpg",
        title1:"drone",
    },
    {
        id:11,
        image1:"https://static-01.daraz.pk/p/b23e3b4fbbdc03c6e4afbf31cfe385dc.jpg",
        title1:"Lingeri Sets",
    },
    {
        id:12,
        image1:"https://static-01.daraz.pk/p/d7b69db91a89fb8fba31dfd851e086f2.jpg",
        title1:"Water Dispancer Accessories",
    },
    {
        id:13,
        image1:"https://static-01.daraz.pk/p/7d356eaf65d82dd776d9d85b9faca478.jpg",
        title1:"Salt & Papaer Tool",
    },
    {
        id:14,
        image1:"https://static-01.daraz.pk/p/19701b40a4298c2fc9c2ed6a48e0119b.jpg",
        title1:"Zakat",
    },
    {
        id:15,
        image1:"https://static-01.daraz.pk/p/b375cc5bc3909371f1804018b17d07da.png",
        title1:"Bath Makes",
    },
    {
        id:16,
        image1:"https://static-01.daraz.pk/original/b3260028ea9ce10b50b30861fbadf3f4.jpg",
        title1:"Kids & Bikes Accessories",
    },
    
]
function Categories() {
  return (
    <div className='hidden xl:flex flex-col space-y-1 mb-11'>
    <div className='ml-16 font-normal text-[#424242] text-[22px]'>
    Categories
    </div>
<div className='hidden xl:flex mx-12'>
    {smallcard?.map((item) => (
           <Categoriitems  {...item}/>

    ))}
 
</div>
<div className='hidden xl:flex mx-11'>
    {bigcard?.map((item) => (
           <Smallcard  {...item}/>

    ))}
 
</div>
<div className='pt-6'>
    <h1 className='ml-16  font-semibold text-[#424242] text-[22px]'>Just For Fun</h1>
</div>
    </div>
  )
  
}

export default Categories