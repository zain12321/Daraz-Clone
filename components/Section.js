import React from 'react'
import Funitems from './Funitems'

const section = [
    {
        id:1,
        image:"https://static-01.daraz.pk/p/d0e5515cf5601f10e55fe42e63e94220.jpg_200x200q80-product.jpg_.webp",
        title:"Best ear phone sound quality in very cheap prices",
        price:"Rs.150",
        discount:"Rs.150 -50%",
        feed:"(2)",
    },
    {
        id:2,
        image:"https://static-01.daraz.pk/p/f3cf439be796d2bb51f7518aec3b1855.jpg_200x200q80-product.jpg_.webp",
        title:"Best Toy car for  children lighting car online...",
        price:"Rs.500",
        discount:"Rs.500 -20%",
        feed:"(29)",
    },
    {
        id:3,
        image:"https://static-01.daraz.pk/p/36e8dfc8ff1a344a36980e38ca88f1d3.jpg_200x200q80-product.jpg_.webp",
        title:"Saamsung power bank in high range quality...",
        price:"Rs.3000",
        discount:"Rs.3000 -29%",
        feed:"(20)",
    },
    {
        id:4,
        image:"https://static-01.daraz.pk/p/ae3a7f63121ed8c0a0884f99a1c7c411.jpg_200x200q80-product.jpg_.webp",
        title:"Wireless blutooth availaible on holesal..",
        price:"Rs.4000",
        discount:"Rs.4000 -50%",
        feed:"(10)",
    },
    {
        id:5,
        image:"https://static-01.daraz.pk/p/5f98ef2808a2598ce5b0e0790990b59e.png_200x200q80-product.jpg_.webp",
        title:"Best Toy car for  children lighting car online...",
        price:"Rs.300",
        discount:"Rs.5000 -40%",
        feed:"(20)",
    },
    {
        id:6,
        image:"https://static-01.daraz.pk/p/6653cc1b047b8501731e304080bbd0d3.jpg_200x200q80-product.jpg_.webp",
        title:"Saamsung power bank in high range quality...",
        price:"Rs.5000",
        discount:"Rs.2000 -90%",
        feed:"(122)",
    },
    {
        id:7,
        image:"https://static-01.daraz.pk/p/d4d5073ede879abf003568f3e87ad735.jpg_200x200q80-product.jpg_.webp",
        title:"Best Toy car for  children lighting car online...",
        price:"Rs.3000",
        discount:"Rs.3000 -29%",
        feed:"(11)",
    },
    {
        id:8,
        image:"https://static-01.daraz.pk/p/574e29917ce84191ce6f913fda6279cd.jpg_200x200q80-product.jpg_.webp",
        title:"Saamsung power bank in high range quality...",
        price:"Rs.400",
        discount:"Rs.5000 -9%",
        feed:"(222)",
    },
    {
        id:9,
        image:"https://static-01.daraz.pk/p/045d7df76845f16682237f32a3a582b8.jpg_200x200q80-product.jpg_.webp",
        title:"Best ear phone sound quality in very cheap prices",
        price:"Rs.2000",
        discount:"Rs.2000 -2%",
        feed:"(80)",
    },
    {
        id:10,
        image:"https://static-01.daraz.pk/p/927b337352dc8d26329ad7e1cb5e5154.jpg_200x200q80-product.jpg_.webp",
        title:"Saamsung power bank in high range quality..",
        price:"Rs.6000",
        discount:"Rs.2000 -1%",
        feed:"(1)",
    },
    {
        id:11,
        image:"https://static-01.daraz.pk/p/14818459de6201ea4719cec11793c140.jpg_200x200q80-product.jpg_.webp",
        title:"Best Toy car for  children lighting car online...",
        price:"Rs.400",
        discount:"Rs.3000 -29%",
        feed:"(20)",
    },
    {
        id:12,
        image:"https://static-01.daraz.pk/p/faf80aafc2b79d3f440d694aec7ee94b.jpg_200x200q80-product.jpg_.webp",
        title:"Best Toy car for  children lighting car online...",
        price:"Rs.4000",
        discount:"Rs.3000 -90%",
        feed:"(45)",
    },
    {
        id:13,
        image:"https://static-01.daraz.pk/p/953fbaa81978126d5649eaa3f682fecc.jpg_200x200q80-product.jpg_.webp",
        title:"Best Toy car for  children lighting car online...",
        price:"Rs.2000",
        discount:"Rs.4000 -24%",
        feed:"(50)",
    },
    {
        id:14,
        image:"https://static-01.daraz.pk/p/9494bc52bb555d743476423f886cf724.jpg_200x200q80-product.jpg_.webp",
        title:"Wireless blutooth availaible on holesal..",
        price:"Rs.3000",
        discount:"Rs.4000 -22%",
        feed:"(2)",
    },
    {
        id:15,
        image:"https://static-01.daraz.pk/p/790520b11e29c199b413d5ad4454baaf.jpg_200x200q80-product.jpg_.webp",
        title:"Saamsung power bank in high range quality...",
        price:"Rs.4000",
        discount:"Rs.3000 -20%",
        feed:"(10)",
    },
    {
        id:16,
        image:"https://static-01.daraz.pk/p/7213a9a9381323b1132441c8102c51a0.jpg_200x200q80-product.jpg_.webp",
        title:"Best Toy car for  children lighting car online...",
        price:"Rs.2000",
        discount:"Rs.5000 -9%",
        feed:"(210)",
    },
    {
        id:17,
        image:"https://static-01.daraz.pk/p/c720d7ed7391319d2fc33feeac19a7a5.jpg_200x200q80-product.jpg_.webp",
        title:"Saamsung power bank in high range quality..",
        price:"Rs.6000",
        discount:"Rs.33000 -33%",
        feed:"(40)",
    },
    {
        id:18,
        image:"https://static-01.daraz.pk/p/5ba58f89a0ee008761beba197c97c521.jpg_200x200q80-product.jpg_.webp",
        title:"Wireless blutooth availaible on holesal..",
        price:"Rs.2000",
        discount:"Rs.2000 -29%",
        feed:"(20)",
    },
    {
        id:19,
        image:"https://static-01.daraz.pk/p/099539accba282872af46320af9d6837.jpg_200x200q80-product.jpg_.webp",
        title:"Best Toy car for  children lighting car online...",
        price:"Rs.3000",
        discount:"Rs.3200 -49%",
        feed:"(21)",
    },
    {
        id:20,
        image:"https://static-01.daraz.pk/p/7bd9ca69accc6871c12a5ec944ff38ee.jpg_200x200q80-product.jpg_.webp",
        title:"Best Toy car for  children lighting car online...",
        price:"Rs.3000",
        discount:"Rs.4000 -9%",
        feed:"(23)",
    },
    {
        id:21,
        image:"https://static-01.daraz.pk/p/2d670ed84cc868e42e87291dc4c5f76f.jpg_200x200q80-product.jpg_.webp",
        title:"Best Toy car for  children lighting car online...",
        price:"Rs.1000",
        discount:"Rs.1000 -19%",
        feed:"(23)",
    },
    {
        id:22,
        image:"https://static-01.daraz.pk/p/a6b4956af0237ae5242f4763754a060b.jpg_200x200q80-product.jpg_.webp",
        title:"Best Toy car for  children lighting car online...",
        price:"Rs.5000",
        discount:"Rs.100 -2%",
        feed:"(0)",
    },
    {
        id:23,
        image:"https://static-01.daraz.pk/p/f5cbe5f2637da321de948737189b28a8.jpg_200x200q80-product.jpg_.webp",
        title:"Wireless blutooth availaible on holesal..",
        price:"Rs.9000",
        discount:"Rs.4000 -59%",
        feed:"(2)",
    },
    {
        id:24,
        image:"https://static-01.daraz.pk/original/aafc2ba6b18d329c4a7d0d2c8096e612.jpg_200x200q80-product.jpg_.webp",
        title:"Best ear phone sound quality in very  prices",
        price:"Rs.2000",
        discount:"Rs.32000 -2%",
        feed:"(50)",
    },
]



function Section() {
  return (
      <>
    <div className='grid grid-cols-4 grid-rows-4 lg:grid-cols-5 lg:grid-rows-3 xl:grid-cols-6 xl:grid-rows-4 mx-9 xl:mx-16 space-x-5'>
       {section?.map((item) => (
            <Funitems {...item}/>
       ))}
    </div>


    <div className='text-xl  flex items-center justify-center my-4 '>
     <button className='w-96  border-[#F85606] text-[#F85606] text-[16px] border py-2 '>
     Load More
     </button>
    </div>
    </>
  )
}

export default Section