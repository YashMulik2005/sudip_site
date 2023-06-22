import React, { useState } from 'react'
import photo from '../assets/react.svg'

function Events() {
    const [height, setheight] = useState(false);
    return (
        <div className={`p-4 overflow-hidden transition-all ease-linear duration-300  bg-[#e4dccf]`}>
            <h1 className=' text-center text-3xl font-bold m-4'>Events</h1>
            <div className=' flex flex-col sm:flex-row'>
                <div className=' border-2 w-full sm:w-1/4 my-4 sm:m-5 p-5 rounded-lg bg-slate-100 shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]'>
                    <img src={photo} alt="" className=' w-[90%]  h-48 m-2' />
                    <h1 className=' text-center font-bold text-2xl' >Event name</h1>
                    <h1 className=' text-center front-md font-semibold'>10000$</h1>
                </div>
                <div className=' border-2 w-full sm:w-1/4 my-4 sm:m-5 p-5 rounded-lg  bg-slate-100 shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]'>
                    <img src={photo} alt="" className=' w-[90%] h-48 m-2' />
                    <h1 className=' text-center font-bold text-2xl' >Event name</h1>
                    <h1 className=' text-center front-md font-semibold'>10000$</h1>
                </div>
                <div className=' border-2 w-full sm:w-1/4 my-4 sm:m-5 p-5 rounded-lg  bg-slate-100 shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]'>
                    <img src={photo} alt="" className=' w-[90%] h-48 m-2' />
                    <h1 className=' text-center font-bold text-2xl' >Event name</h1>
                    <h1 className=' text-center front-md font-semibold'>10000$</h1>
                </div>
                <div className=' border-2 w-full sm:w-1/4 my-4 sm:m-5 p-5 rounded-lg  bg-slate-100 shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]'>
                    <img src={photo} alt="" className=' w-[90%] h-48 m-2' />
                    <h1 className=' text-center font-bold text-2xl' >Event name</h1>
                    <h1 className=' text-center front-md font-semibold'>10000$</h1>
                </div>
            </div>
            <section className={`text-center m-2 ${height ? "hidden" : ""}`}>
                <button className=' bg-blue-600 text-white py-1 px-4 rounded-2xl font-bold' onClick={(e) => {
                    setheight(!height)
                }}>Show All Events</button>
            </section>
            <div className={`flex flex-col sm:flex-row ${height ? "" : " hidden"} `}>
                <div className=' border-2 w-full sm:w-1/4 my-4 sm:m-5 p-5 rounded-lg  bg-slate-100 shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]'>
                    <img src={photo} alt="" className=' w-[90%] h-48 m-2' />
                    <h1 className=' text-center font-bold text-2xl' >Event name</h1>
                    <h1 className=' text-center front-md font-semibold'>10000$</h1>
                </div>
                <div className=' border-2 w-full sm:w-1/4 my-4 sm:m-5 p-5 rounded-lg  bg-slate-100 shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]'>
                    <img src={photo} alt="" className=' w-[90%] h-48 m-2' />
                    <h1 className=' text-center font-bold text-2xl' >Event name</h1>
                    <h1 className=' text-center front-md font-semibold'>10000$</h1>
                </div>
                <div className=' border-2 w-full sm:w-1/4 my-4 sm:m-5 p-5 rounded-lg  bg-slate-100 shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]'>
                    <img src={photo} alt="" className=' w-[90%] h-48 m-2' />
                    <h1 className=' text-center font-bold text-2xl' >Event name</h1>
                    <h1 className=' text-center front-md font-semibold'>10000$</h1>
                </div>
                <div className=' border-2 w-full sm:w-1/4 my-4 sm:m-5 p-5 rounded-lg  bg-slate-100 shadow-[15px_15px_41px_#b1b1b1,-15px_-15px_41px_#ffffff]'>
                    <img src={photo} alt="" className=' w-[90%] h-48 m-2' />
                    <h1 className=' text-center font-bold text-2xl' >Event name</h1>
                    <h1 className=' text-center front-md font-semibold'>10000$</h1>
                </div>
            </div>
            <section className={`text-center m-2 ${height ? "" : "hidden"}`}>
                <button className=' bg-blue-600 text-white py-1 px-4 rounded-2xl font-bold' onClick={(e) => {
                    setheight(!height)
                }}>Show less Events</button>
            </section>
        </div>
    )
}

export default Events