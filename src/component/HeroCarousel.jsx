import React from 'react'
import { Carousel } from 'react-bootstrap'

const HeroCarousel = () => {
  return (

<Carousel 
    fade
    controls= {false}
    indicators={false}
    pause={false}
    interval={2000}
    >
  <Carousel.Item>
    <img
      className="d-block w-100 slide-img"
      src="https://images.pexels.com/photos/3009706/pexels-photo-3009706.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="First slide"
      
      style={{objectFit:"cover"}}

    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slide-img"
      src="https://images.pexels.com/photos/3073666/pexels-photo-3073666.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Second slide"
      
      style={{objectFit:"cover"}}

    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slide-img"
      src="https://images.pexels.com/photos/3625734/pexels-photo-3625734.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Third slide"
      
      style={{objectFit:"cover"}}
    />

  </Carousel.Item>
</Carousel>
)
}

export default HeroCarousel