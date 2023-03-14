import React from 'react';

import './Featured.css';

import House1 from '../../assests/house1.jpg';
import Bed1 from '../../assests/bed1.jpg';
import Bed2 from '../../assests/bed2.jpg';
import Kitchen from '../../assests/kitchen.jpg';
import Bathroom from '../../assests/bath1.jpg';

import House2 from '../../assests/house2.jpg';
import Bed3 from '../../assests/bed3.jpg';
import Bed4 from '../../assests/bed4.jpg';
import LivingRoom from '../../assests/living-room.jpg';
import Bathroom2 from '../../assests/bath2.jpg';

function Featured() {
  return (
    <div className='featured'>
        <h1 className='featured-text'>Top Featured Listing</h1>
        <p className='featured-text'>Select listing by City, State, & Zip based on views</p>
        <div className='container'>
            <img className='span-3 image-grid-row-2' src={House1} alt="" />
            <img src={Bed1} alt="" />
            <img src={Bed2} alt="" />
            <img src={Kitchen} alt="" />
            <img src={Bathroom} alt="" />
            <div className='span-3 img-details'>
                <div className='top'>
                    <h2>123 Acne St. Dallas, TX</h2>
                    <p>House for sale</p>
                    <p className='price'>$2,677,000</p>
                </div>
                <div className='info-grid'>
                    <div>
                        <div className='info'>
                            <p className='bold'>Bedrooms:</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Bathrooms:</p><p>7</p>
                        </div>
                    </div>

                    <div>
                        <div className='info'>
                            <p className='bold'>Square Feet:</p><p>8,138</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='span-2 right-img-details'>
                <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Inncluding media room, workout facility, and built-in pool.</p>
                <button className='btn'>View Listing</button>
            </div>
        </div>

        {/* Section Section*/}

        <div className='container'>
            
            <img src={Bed3} alt="" />
            <img src={Bed4} alt="" />

            <img className='span-3 image-grid-row-2' src={House2} alt="" />

            <img src={Bathroom2} alt="" />
            <img src={LivingRoom} alt="" />
            
            <div className='span-2 right-img-details'>
                <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Texas. Inncluding media room, workout facility, and built-in pool.</p>
                <button className='btn'>View Listing</button>
            </div>


            <div className='span-3 img-details'>
                <div className='top'>
                    <h2>123 Acne St. Dallas, TX</h2>
                    <p>House for sale</p>
                    <p className='price'>$2,677,000</p>
                </div>
                <div className='info-grid'>
                    <div>
                        <div className='info'>
                            <p className='bold'>Bedrooms:</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Bathrooms:</p><p>7</p>
                        </div>
                    </div>

                    <div>
                        <div className='info'>
                            <p className='bold'>Square Feet:</p><p>8,138</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Est Payment:</p><p>$14,797/mo</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Featured