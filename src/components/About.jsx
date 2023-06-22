import React from 'react'
import photo from '../assets/react.svg'

function About() {
    return (
        <div className=' flex flex-col sm:flex-row p-5 bg-[#e4dccf]'>
            <div className=' w-full sm:w-1/2 p-5 flex justify-center items-center'>
                <img src={photo} alt="" className=' w-[90%] h-[90%]' />
            </div>
            <div className=' w-full sm:w-1/2 flex flex-col justify-center p-2'>
                <h1 className=' text-3xl font-bold text-center'>About</h1>
                <p className=' text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, animi earum quas esse inventore rerum. Quo, dolore soluta aliquid ipsam alias perspiciatis laudantium exercitationem consequatur aut earum atque, ipsum facilis voluptatum, cupiditate nostrum! Incidunt doloribus aut soluta quis veritatis magnam aliquam placeat atque labore numquam in ut voluptate qui porro, amet delectus! Nihil ullam fugiat ea possimus, est quasi, porro assumenda vitae minus quae dolor itaque exercitationem sit sequi. Quibusdam distinctio natus inventore ipsam magni qui repudiandae doloribus, vitae praesentium mollitia pariatur, eaque non quos et esse amet nobis blanditiis dicta perspiciatis commodi! Nulla alias ad tempora fugit animi.</p>
            </div>
        </div>
    )
}

export default About