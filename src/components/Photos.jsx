import React, { useState } from 'react'
import photo from '../assets/react.svg'
import { AiFillDownSquare, AiFillUpSquare } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Photos() {
    const [height, setheight] = useState(false);
    return (
        <div className={`p-4 overflow-hidden transition-all ease-linear duration-300 bg-[#f9f5eb]`}>
            <h1 className=' text-center text-3xl font-bold m-4'>Photos</h1>
            <div className=' flex flex-col sm:flex-row'>
                <div className='  w-full sm:w-1/4 my-4 sm:m-5 p-5 rounded-lg bg-[#e4dccf]'>
                    <h1 className=' text-center font-bold text-2xl' >Event name</h1>
                    <Link to="/event1"><img src={photo} alt="" className=' w-[90%]  h-48 m-2' /></Link>
                </div>
                <div className='w-full sm:w-1/4 my-4 sm:m-5 p-5 rounded-lg  bg-[#e4dccf]'>
                    <h1 className=' text-center font-bold text-2xl' >Event name</h1>
                    <img src={photo} alt="" className=' w-[90%] h-48 m-2' />
                </div>
                <div className='w-full sm:w-1/4 my-4 sm:m-5 p-5 rounded-lg  bg-[#e4dccf]'>
                    <h1 className=' text-center font-bold text-2xl' >Event name</h1>
                    <img src={photo} alt="" className=' w-[90%] h-48 m-2' />
                </div>
                <div className='w-full sm:w-1/4 my-4 sm:m-5 p-5 rounded-lg  bg-[#e4dccf]'>
                    <h1 className=' text-center font-bold text-2xl' >Event name</h1>
                    <img src={photo} alt="" className=' w-[90%] h-48 m-2' />
                </div>
            </div>
            <section className={`text-center m-2 ${height ? "hidden" : ""}`} onClick={(e) => {
                setheight(!height)
            }}>
                {/* <button className=' bg-blue-600 text-white py-1 px-4 rounded-2xl font-bold' >Show All Events</button> */}
                {/* <AiFillDownSquare size={25} /> */}
                <h1 className=' text-lg font-semibold'>show more</h1>
            </section>
            <div className={`flex flex-col sm:flex-row ${height ? "" : " hidden"} `}>
                <div className='w-full sm:w-1/4 my-4 sm:m-5 p-5 rounded-lg  bg-[#e4dccf]'>
                    <h1 className=' text-center font-bold text-2xl' >Event name</h1>
                    <img src={photo} alt="" className=' w-[90%] h-48 m-2' />
                </div>
                <div className='w-full sm:w-1/4 my-4 sm:m-5 p-5 rounded-lg  bg-[#e4dccf]'>
                    <h1 className=' text-center font-bold text-2xl' >Event name</h1>
                    <img src={photo} alt="" className=' w-[90%] h-48 m-2' />
                </div>
                <div className='w-full sm:w-1/4 my-4 sm:m-5 p-5 rounded-lg  bg-[#e4dccf]'>
                    <h1 className=' text-center font-bold text-2xl' >Event name</h1>
                    <img src={photo} alt="" className=' w-[90%] h-48 m-2' />
                </div>
                <div className='w-full sm:w-1/4 my-4 sm:m-5 p-5 rounded-lg  bg-[#e4dccf]'>
                    <h1 className=' text-center font-bold text-2xl' >Event name</h1>
                    <img src={photo} alt="" className=' w-[90%] h-48 m-2' />
                </div>
            </div>
            <section className={`text-center m-2 ${height ? "" : "hidden"}`} onClick={(e) => {
                setheight(!height)
            }}>
                {/* <button className=' bg-blue-600 text-white py-1 px-4 rounded-2xl font-bold'>Show less Events</button> */}
                {/* <AiFillUpSquare size={25} /> */}
                <h1 className=' text-lg font-semibold'>show less</h1>
            </section>
        </div>
    )
}

export default Photos