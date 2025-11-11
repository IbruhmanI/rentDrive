import React, { useState, useEffect, useRef } from 'react'
import img1 from '../../assets/image/image 32.png'
import img2 from '../../assets/image/image 33.png'
import img3 from '../../assets/image/image 34.png'
import img4 from '../../assets/image/image 35.png'
const InvestorsSlider = () => {
    const image = [img1, img2, img3, img4];
    const infScroll = [...image, ...image];
    const sliderRef = useRef(null);
    const scroll = (distance) => {
        sliderRef.current.scrollBy({ left: distance, behavior: 'smooth' })
    }
    return (
        <div id="investorSlider">
            <div className="container">
                <h2>Примеры ваших инвестиций</h2>
                <div className='slider-wrapper' style={{position: 'relative'}}>
                    <div className="investorSlider" ref={sliderRef}>
                        <div className="investor-slider-line">
                            {infScroll.map((item, i) => (
                                <img src={item} key={i} alt='' />
                            ))}
                        </div>
                    </div>
                    <div className='slider-btn'>
                        <button onClick={() => scroll(-300)}>←</button>
                        <button onClick={() => scroll(300)}>→</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorsSlider
