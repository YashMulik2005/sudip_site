import React from 'react'
import photo from '../assets/react.svg'
import bg_photo from '../assets/bg_home.jpg'
import e from '../assets/e.png'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'

function Home() {
    return (
        <div className={` bg-cover sm:bg-center h-[600px] sm:h-auto`}
            style={{
                backgroundImage: `url(${bg_photo})`
            }}
        >
            <div className='flex flex-col sm:flex-row backdrop-blur-sm h-full items-center justify-center sm:justify-normal'>
                <div className=' flex flex-col sm:w-1/2 items-centers sm:items-start justify-center  sm:h-[88vh] px-10 py-5 sm:py-0 ' >
                    <h1 className={`text-5xl font-bold text-[#ea5455]`}>Pavanai Event</h1>
                    <h1 className=' text-lg my-2 text-white'>Web developer with passion for continuous learning,leveraging cutting-edage technologies and actively pursuing challenging projects to expand skillset.</h1>
                    <span className=' flex'><button className={` text-white py-1 px-3 rounded-sm m-2 text-lg font-bold bg-[#002b5b]`}><a href="mailto:yashmulik95@gmail.com">Send Email</a></button><h1 className='m-2 text-xl font-bold text-[#ea5455]'>Conatct: 8080808080</h1></span>
                    <span className=' flex'>
                        <section className=' my-1 mx-2 cursor-pointer'>
                            <a href='3' ><AiFillInstagram size={32} className=' text-white' /></a>
                        </section>
                        <section className=' my-1 mx-2 cursor-pointer'>
                            <a href='' ><AiFillFacebook size={32} className=' text-white' /></a>
                        </section>
                        <section className=' my-1 mx-2 cursor-pointer'>
                            <a href='' ><BsTwitter size={32} className=' text-white' /></a>
                        </section>
                    </span>
                </div>
                {/* <div className=' sm:w-1/2 h-full sm:h-[88vh] '>
                    <img src={e} alt="" className=' w-full h-full p-6' />
                </div> */}
            </div>
        </div>
    )
}

export default Home