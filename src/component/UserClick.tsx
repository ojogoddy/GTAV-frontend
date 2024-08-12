import React, { memo } from 'react'
import globe from "../assets/globe.svg"
import arrow from "../assets/arrow.svg"

interface ButtonProps{
    label: string;
    iconRight?: string;
    iconLeft?: string;
    additionalClasses?: string
}

const UserButton: React.FC<ButtonProps> = ({label, iconRight, iconLeft, additionalClasses}) =>(
    <div className={`py-4 px-6 border border-gray-500 flex items-center justify-between ${additionalClasses}`}>
        {iconLeft && <img src={iconLeft} alt='icon' loading='lazy' />}
        <p>{label}</p>
        {iconRight && <img src={iconRight} alt='icon' loading='lazy' />}

    </div>
)

const UserClick: React.FC = () =>{
    return (
        <div className=' bg-transparent'>
            <div className='flex flex-col overflow-hidden mb-5 rounded-md bg-black'>
                <UserButton label='Sign In'/>
                <UserButton label='Sign Up'/>
                <UserButton label='Help' iconRight={arrow}/>
            </div>
            <button className="py-4 px-6 w-[320px] rounded-md flex items-center justify-between bg-black">
                <div className="flex gap-2">
                    <img src={globe} alt="globe" loading='lazy' />
                    <p>Select a Language</p>
                </div>
                <img src={arrow} alt="arrow" loading='lazy' />
            </button>
        </div>
    )
}

export default memo(UserClick)

