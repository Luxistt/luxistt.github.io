import React, { useState } from 'react'
import {BsHouseDoor} from 'react-icons/bs'
import {TbToolsKitchen2, TbBath} from 'react-icons/tb'
import {GiTable, GiRoundTable} from 'react-icons/gi'
import {IoBedOutline} from 'react-icons/io5'
import './sections.css'

const Sections = () => {
    //set active section
    const [section, setSection] = useState("parlor")
    const parlor = ()=> {setSection("parlor")}
    const kitchen = ()=> {setSection("kitchen")}
    const bathroom = ()=> {setSection("bathroom")}
    const bedroom = ()=> {setSection("bedroom")}
    const sitOut = ()=> {setSection("sit-out")}
    const dining = ()=> {setSection("dining")}

    const data = [
        {
            id:1,
            title: "Living Room",
            icon: <BsHouseDoor fontSize="35px"/>,
            func: parlor,
            className: section === "parlor" ? "s-block active" : "s-block"
        },
        {
            id:2,
            title: "Kitchen",
            icon: <TbToolsKitchen2 fontSize="35px"/>,
            func: kitchen,
            className: section === "kitchen" ? "s-block active" : "s-block"
        },
        {
            id:3,
            title: "Bathroom",
            icon: <TbBath fontSize="35px"/>,
            func: bathroom,
            className: section === "bathroom" ? "s-block active" : "s-block"

        },
        {
            id:4,
            title: "Sit Out",
            icon: <GiRoundTable fontSize="35px"/>,
            func: sitOut,
            className: section === "sit-out" ? "s-block active" : "s-block"

        },
        {
            id:5,
            title: "Dining",
            icon: <GiTable fontSize="35px"/>,
            func: dining,
            className: section === "dining" ? "s-block active" : "s-block"
        },
        {
            id:6,
            title: "Bedroom",
            icon: <IoBedOutline fontSize="35px"/>,
            func: bedroom,
            className: section === "bedroom" ? "s-block active" : "s-block"

        }
    ]

  return (
    <section className='sections'>
        <div className="section-header">
            <span>DIFFERENT SECTIONS</span>
            <h1>Luxistt Sections</h1>
        </div>
        <div className="section-icons">
            {
                data.map((item)=>(
                    <div onClick={item.func} className={item.className}>
                        <div className="s-block-icon">
                            {item.icon}
                        </div>
                        <h5>{item.title}</h5>
                        <div className="line"></div>
                    </div>
                ))
            }
        </div>
        <div className="section-text-and-img">
            {
                section === "parlor" && (
                    <>
                        <div className="section-text">
                            <h3>Living Room</h3>
                            <div className="line"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum libero neque, ac dignissim elit semper eu. Ut posuere neque mi, id sagittis mauris volutpat vel. Nulla facilisi. Curabitur placerat vestibulum arcu.</p>
                            <button>View Our Rooms</button>
                        </div>
                        <div className="section-img" style={{
                            backgroundImage: "url(https://images.pexels.com/photos/5696831/pexels-photo-5696831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}/>
                    </>
                )
            }
            {
                section === "kitchen" && (
                    <>
                        <div className="section-text">
                            <h3>Kitchen</h3>
                            <div className="line"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum libero neque.</p>
                            <button>View Our Rooms</button>
                        </div>
                        <div className="section-img" style={{
                            backgroundImage: "url(https://images.pexels.com/photos/5484469/pexels-photo-5484469.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}/>
                    </>
                )
            }
            {
                section === "bathroom" && (
                    <>
                        <div className="section-text">
                            <h3>Bathroom</h3>
                            <div className="line"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum libero neque, ac dignissim elit semper eu. Ut posuere neque mi, id sagittis mauris volutpat vel. Nulla facilisi. Curabitur placerat vestibulum arcu</p>
                            <button>View Our Rooms</button>
                        </div>
                        <div className="section-img" style={{
                            backgroundImage: "url(https://images.pexels.com/photos/4107866/pexels-photo-4107866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}/>
                    </>
                )
            }
            {
                section === "sit-out" && (
                    <>
                        <div className="section-text">
                            <h3>Sit Out</h3>
                            <div className="line"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum libero neque, ac dignissim elit semper eu. Ut posuere neque mi, id sagittis mauris volutpat vel. Nulla facilisi. Curabitur placerat vestibulum arcu, non ornare enim viv.</p>
                            <button>View Our Rooms</button>
                        </div>
                        <div className="section-img" style={{
                            backgroundImage: "url(https://images.pexels.com/photos/3881112/pexels-photo-3881112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}/>
                    </>
                )
            }
            {
                section === "dining" && (
                    <>
                        <div className="section-text">
                            <h3>Dining</h3>
                            <div className="line"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum libero neque, ac dignissim elit semper eu. Ut posuere neque mi, id sagittis mauris volutpat vel. Nulla facilisi. Curabitur placerat vestibulum arcu, non ornare enim viverra ac. Integer accumsan justo tortor.</p>
                            <button>View Our Rooms</button>
                        </div>
                        <div className="section-img" style={{
                            backgroundImage: "url(https://images.pexels.com/photos/5757196/pexels-photo-5757196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}/>
                    </>
                )
            }
            {
                section === "bedroom" && (
                    <>
                        <div className="section-text">
                            <h3>Bedroom</h3>
                            <div className="line"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum libero neque, ac dignissim elit semper eu. Ut posuere neque mi, id sagittis mauris volutpat vel. Nulla facilisi. Curabitur placerat vestibulum arcu, non ornare enim viverra ac. Integer accumsan justo tortor.</p>
                            <button>View Our Rooms</button>
                        </div>
                        <div className="section-img" style={{
                            backgroundImage: "url(https://images.pexels.com/photos/5048322/pexels-photo-5048322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}/>
                    </>
                )
            }
            
        </div>
    </section>
  )
}

export default Sections