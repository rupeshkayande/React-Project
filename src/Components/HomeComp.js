import React from 'react'
import {Button,Carousel} from 'react-bootstrap';
import { images } from '../Shared/Constant/staticData';
import './HomeComp.css';  



const HomeComp = () => {
  return (
    <div>
         <div className='container'>
   <Carousel>
  <Carousel.Item> 
    {/* <ExampleCarouselImage text="First slide" /> */}
    <img src={images.goldchain} alt='one'  style={{width:"100%", height:"550px"}}/>
    
  </Carousel.Item>
  <Carousel.Item>
    {/* <ExampleCarouselImage text="" /> */}
    <img src={images.goldring} alt='two'  style={{width:"100%", height:"550px"}}/>
    
  </Carousel.Item>
  <Carousel.Item>
    {/* <ExampleCarouselImage text="" /> */}
    <img src={images.one} alt='one'  style={{width:"100%", height:"550px"}}/>
    
  </Carousel.Item>
</Carousel>    
    </div> 
    <hr/>
    <p>
    

"At Jwellers, we believe that every piece of jewelry tells a story—a story of elegance, timeless beauty, and personal expression. Our collection is thoughtfully curated, offering a blend of classic designs and contemporary styles to suit every occasion, from cherished moments to everyday wear. Whether you’re searching for a symbol of love, a statement piece, or a delicate treasure, our expert craftsmanship ensures that each item shines with the utmost quality and brilliance. Step into a world where luxury meets artistry, and let your jewelry journey begin with us."

You can personalize it further with the shop's name or specific offerings.
    </p>
</div>
  )
}

export default HomeComp