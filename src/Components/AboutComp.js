import React from 'react'
import './external.css'
import { images } from '../Shared/Constant/staticData'

const AboutComp = () => {
  return (
    <div>
        
        <div class="container">
        <h1>Meet Our Founders</h1>
        <div class="founders">
            <div class="founder">
                {/* <img src="founder1.jpg" alt="Founder 1"> */}
                <img src={images.pone} alt="Founder 1"></img>
                <h3>Mr. Mike Hook</h3>
                <p>Mr. Mike is a visionary leader with a passion for exquisite craftsmanship. With years of experience in the jewelry industry, they have dedicated themselves to creating timeless, elegant pieces that inspire and captivate.</p>
            </div>

            <div class="founder">
            <img src={images.ptwo} alt="Founder 1"></img>
                <h3>Ms. Alisa Philip</h3>
                <p>Ms. Alisa brings a unique blend of artistry and innovation to the brand. Their deep understanding of design and keen eye for detail ensures that every piece is a perfect reflection of the brand's commitment to beauty and quality.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutComp