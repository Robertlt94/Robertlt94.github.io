import React from 'react'
import Robert from './assets/me.jpg';
import Boberto from './assets/Boberto.png';

const LandingImage = () => {

    return (
        <div className="flip-image">
            <div className="flip-image-inner">
                <div className="flip-image-front">
                    <img src={Robert} alt="Robert Thao" />
                </div>
                <div className="flip-image-back">
                    <img src={Boberto} alt="Robert Thao" />
                </div>
                {/* <div className="flip-image-back">
                    <p>Software Engineer</p>
                    <p>Project Manager</p>
                    <p>Computer Science Student</p>
                </div> */}
            </div>
        </div>
    )
}

export default LandingImage;