import React from 'react'
import './hero.css'
import HeroCarousel from '../HeroCarousel'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-content">
            <span>THE ULTIMATE LUXURY EXPERIENCE</span>
            <h1>Get The Most Comfortable Shortlet to Stay</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore optio recusandae minus neque nihil voluptate repudiandae, maiores nostrum quis!</p>
            <button>Take A Tour</button>
        </div>
        <div className="hero-image">
            <HeroCarousel/>
        </div>
    </section>
  )
}

export default Hero