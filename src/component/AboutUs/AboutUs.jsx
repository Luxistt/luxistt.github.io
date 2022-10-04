import React from 'react'
import './aboutUs.css'

const AboutUs = () => {
  return (
    <div className='about-us' >
        <div className="about-us-content">
            <div className="content-container">
                <h1>About Luxistt</h1>
                <p>Etiam diam elit, pellentesque sed convallis vitae, facilisis et nisl. Mauris cursus ligula in porttitor iaculis. Nunc molestie nec orci in aliquet. Integer faucibus blandit est. Aenean eleifend metus eros, nec tincidunt dui iaculis vel. Aenean posuere accumsan nibh, quis facilisis mauris pretium nec. Mauris ultrices viverra sem sit amet rhoncus.</p>
                <button>View Our Rooms</button>
            </div>
        </div>
        <div className="about-us-img">
            {/* <img   src='https://images.pexels.com/photos/2416654/pexels-photo-2416654.jpeg?auto=compress&cs=tinysrgb&w=600'/> */}
        </div>
    </div>
  )
}

export default AboutUs