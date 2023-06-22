import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className=' bg-[#f9f5eb] text-center p-2'>
            <h1 className=' text-lg font-bold'>Pavanai Events @{year}</h1>
        </div>
    )
}

export default Footer