import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <section className=" ">
 
      {/* <div /> */}
   
      <Carousel
        autoPlay
         infiniteLoop
         showStatus={true}
         showIndicators={true}
        showThumbs={false}
        interval={2000}
      
      >
     
     
        <div className="" >
          <img
      loading="lazy" src="https://icms-image.slatic.net/images/ims-web/df886c7a-ee19-4b6f-8a02-fa2ef043a617.jpg_1200x1200.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="https://icms-image.slatic.net/images/ims-web/6b3ea89c-23cc-4d59-87e7-2a3bcf0eaa89.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="https://icms-image.slatic.net/images/ims-web/eb6f50c3-c8d0-4db0-9736-856de3a2adf0.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" src="https://icms-image.slatic.net/images/ims-web/39410ccf-f59d-4bac-9d76-ef3749fd7a1e.jpg" alt="" />
        </div>

        <div>
          <img loading="lazy" 
          src="https://icms-image.slatic.net/images/ims-web/96d8dea1-859d-42a8-972a-6487c6c8e75f.png" alt="" />
        </div>

        <div>
          <img loading="lazy" 
          src="https://icms-image.slatic.net/images/ims-web/de4ed56b-b8f4-44d2-a633-aae3b32d574c.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" 
          src="https://icms-image.slatic.net/images/ims-web/51cb9995-a05a-4272-aff5-789cc5f31812.jpg_1200x1200.jpg" alt="" />
        </div>
       
    

        <div>
          <img loading="lazy" 
          src="https://icms-image.slatic.net/images/ims-web/a1a3e9d3-26e6-43ff-84c9-f5c020b13046.jpg" alt="" />
        </div>
        <div>
          <img loading="lazy" 
          src="https://icms-image.slatic.net/images/ims-web/b7e8daf4-e417-4b21-aecf-833ebda8eb9f.png_1200x1200.jpg" alt="" />
        </div>
       
        





      </Carousel>
     
    </section>
  );
}

export default Slider;