import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCancelCircle } from 'react-icons/im'

function Navbar() {
    const [height, setheight] = useState(false)

    const handletoggle = () => {
        setheight(!height)
    }

    return (
        <div className=' bg-[#e4dccf]'>
            <nav className={`flex h-12 border-b-[1px] border-[#002b5b] justify-between items-center p-2 bg-[#e4dccf]`}>
                <h1 className={`text-2xl font-bold text-[#002b5b]`}>Logo</h1>
                {/* <button onClick={handletoggle} className='sm:hidden'>click</button> */}
                <section onClick={handletoggle} className='sm:hidden'>
                    {height ? <ImCancelCircle size={28} /> : <GiHamburgerMenu size={28} />}
                </section>

                {/* <button onClick={handletheme} className=''>theme</button> */}
            </nav>
            <div className=' bg-[#e4dccf] '>
                <ul className={`sm:flex justify-center items-center bg-[#e4dccf] shadow-md ${height ? "h-32" : "h-0 overflow-hidden"} sm:h-auto transition-all ease-linear duration-300 `}>
                    <li className='mx-1 font-semibold text-lg'><a href='#about'>About</a></li>
                    <li className='m-1 font-semibold text-lg'><a href='#contact'>Events</a></li>
                    <li className='m-1 font-semibold text-lg'><a href='#project'>photos</a></li>
                    <li className='mx-1 font-semibold text-lg'><a href='#skills'>Conatct</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar