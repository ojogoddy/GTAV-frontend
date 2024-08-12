import React from 'react'
import globe from "../assets/globe.svg"
import arrow from "../assets/arrow.svg"
import twitch from "../assets/twitch.svg"
import twitter from "../assets/twitter.svg"
import instagram from "../assets/instagram.svg"
import youtube from "../assets/youtube.svg"
import facebook from "../assets/facebook.svg"

const Footer:React.FC = () => {
    const footer1 = ["Contact", "Careers", "Community Guidelines", "Subscribe"]
    const footer2 = ["Corporate", "Privacy", "Cookie Settings", "Cookie Policy", "Legal", "Do Not Sell My Personal Information"]
    const footer3 = [twitter, instagram, youtube, facebook, twitch]
  return (
    <>
        <div className="px-20 mt-10">
        <div className='flex items-center justify-between mb-20'>
            <div className=" flex gap-5 text-xl">
                {footer1.map((item, index)=>(
                    <div key={index}>
                        <p >{item}</p>
                    </div>
                ))}
            </div>
            <div className="flex gap-3">
                {/* //create and consume an api for languages  */}
                {/* <select className='text-black bg' name="language" id="language">
                    <option defaultChecked value="">Select a Language</option>
                </select> */}
                <img src={globe} alt="" />
                <p>Select a Language</p>
                <img src={arrow} alt="" />
            </div>
        </div>

        <div className=" flex justify-between">

            <div className="  space-y-5">
                {footer2.map((item, index)=>(
                    <div  key={index}>
                        <p className='hover:text-[#ffcc33] transition duration-300 ease-in-out text-gray-500 cursor-pointer' >{item}</p>
                    </div>
                ))}
            </div>
            <div className=" flex gap-6">
                {footer3.map((item, index)=>(
                    <div key={index}>
                        <img src={item} alt="" />
                    </div>
                ))}
            </div>
        </div>

        <div className="flex justify-between my-20 font-semibold">
            <p>Rockstar Games</p>
            <div className="">
                <nav>
                    <ul className='flex gap-4'>
                        <li>New York</li>
                        <li>London</li>
                        <li>Paris</li>
                        <li>Bogota</li>
                    </ul>
                </nav>
            </div>
            <p>MCMXCVII</p>
        </div>
        </div>
    </>
  )
}

export default Footer
