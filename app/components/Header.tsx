import Link from 'next/link'
import React from 'react'

const Header = () => {
    const navButtonsClass = 'flex text-m font-semibold bg-rose-500/30 w-fit h-fit py-3 px-4 rounded-4xl items-center justify-center m-4 hover:bg-rose-500 transition duration-300 ease-in-out cursor-pointer'
    const navNames = ['About', 'Blogs', 'Projects', 'Contact', 'Tracker']

    return (
        <div className='w-full h-fit bg-pink-950 flex place-content-center'>
            {navNames.map((item, index) => (
                <div key={index} className={navButtonsClass}>
                    <Link href={item.toLowerCase()}>{item}</Link>
                </div>
            ))}
        </div>
    )
}

export default Header