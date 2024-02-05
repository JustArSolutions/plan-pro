import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"


const Hero = () => {
  function displaySliderValue(eSlider){   
    eSlider.parentElement.querySelector('span').textContent = eSlider.value;
  }
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Find Your Next Venue ' subtitle='New & featured spaces located in your city.' />

          <form className='flex'>
            <div className='box'>
              <span>City</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span>Budget</span>
              <span>1</span>
              <input type='range' value="1" min="0" max="30000" onchange="displaySliderValue(this);"/>
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
