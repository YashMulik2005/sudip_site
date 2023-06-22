import React from 'react'
import image1 from '../assets/bg_home.jpg'
import Navbar from './Navbar'
import Footer from './Footer'

function Event1() {
    return (
        <div>
            <Navbar />
            <div className=' p-5 bg-[#e4dccf]'>
                <h1 className=' text-center font-bold text-3xl m-2'>Photos of event name</h1>
                <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
                    <div>
                        <img src={image1} alt="" className=' rounded-lg' />
                    </div>
                    <div>
                        <img src={image1} alt="" className=' rounded-lg' />
                    </div>
                    <div>
                        <img src={image1} alt="" className=' rounded-lg' />
                    </div>
                    <div>
                        <img src={image1} alt="" className=' rounded-lg' />
                    </div>
                    <div>
                        <img src={image1} alt="" className=' rounded-lg' />
                    </div>
                    <div>
                        <img src={image1} alt="" className=' rounded-lg' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Event1