import React from 'react'
import './offers.css'
import {BsCalendarCheck, BsShieldLock, BsPinMap, BsWifi} from 'react-icons/bs'
import {MdOutlineDesignServices} from 'react-icons/md'
import {IoPricetagsOutline, IoAccessibilityOutline} from 'react-icons/io5'
import {GiHomeGarage, GiBeamSatellite, GiTabletopPlayers} from 'react-icons/gi'

const Offers = () => {
  return (
    <section className='offers'>
        <div className="offers-header">
            <span>WHAT WE OFFER</span>
            <h1>House Amenities</h1>
        </div>
        <div className="offers-list">
            <div className="c-block">
                <BsCalendarCheck color='#127872' fontSize="35px"/>
                <h5>Fast & Easy Booking</h5>
                <div className="line"></div>
                <p>Lorem ipsum dolor sit amet, conse ctet uradipiscing</p>
            </div>
            <div className="c-block">
                <IoPricetagsOutline color='#127872' fontSize="35px"/>
                <h5>Great Prices</h5>
                <div className="line"></div>
                <p>Lorem ipsum dolor sit amet, conse ctet uradipiscing</p>
            </div>
            <div className="c-block">
                <MdOutlineDesignServices color='#127872' fontSize="35px"/>
                <h5>Stunning Interior Design</h5>
                <div className="line"></div>
                <p>Lorem ipsum dolor sit amet, conse ctet uradipiscing</p>
            </div>
            <div className="c-block">
                <BsShieldLock color='#127872' fontSize="35px"/>
                <h5>Security</h5>
                <div className="line"></div>
                <p>Lorem ipsum dolor sit amet, conse ctet uradipiscing</p>
            </div>
            <div className="c-block">
                <BsPinMap color='#127872' fontSize="35px"/>
                <h5>The Best Location</h5>
                <div className="line"></div>
                <p>Lorem ipsum dolor sit amet, conse ctet uradipiscing</p>
            </div>
            <div className="c-block">
                <GiTabletopPlayers color='#127872' fontSize="35px"/>
                <h5>Sit Out</h5>
                <div className="line"></div>
                <p>Lorem ipsum dolor sit amet, conse ctet uradipiscing</p>
            </div>
            <div className="c-block">
                <GiBeamSatellite color='#127872' fontSize="35px"/>
                <h5>Cable TV</h5>
                <div className="line"></div>
                <p>Lorem ipsum dolor sit amet, conse ctet uradipiscing</p>
            </div>
            <div className="c-block">
                <BsWifi color='#127872' fontSize="35px"/>
                <h5>Fast Wi-Fi</h5>
                <div className="line"></div>
                <p>Lorem ipsum dolor sit amet, conse ctet uradipiscing</p>
            </div>
            <div className="c-block">
                <IoAccessibilityOutline color='#127872' fontSize="35px"/>
                <h5>Private Territory</h5>
                <div className="line"></div>
                <p>Lorem ipsum dolor sit amet, conse ctet uradipiscing</p>
            </div>
            <div className="c-block">
                <GiHomeGarage color='#127872' fontSize="35px"/>
                <h5>Car Park</h5>
                <div className="line"></div>
                <p>Lorem ipsum dolor sit amet, conse ctet uradipiscing</p>
            </div>
        </div>
    </section>
  )
}

export default Offers