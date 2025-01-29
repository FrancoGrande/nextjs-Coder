'use client'

import React from 'react'

export default function ErrorPage() {
    return (

        <>
        <img src="elmoOnFire.jpg" alt="404" className='w-full h-full object-cover'/>
        <button className='absolute top-48  left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-5xl' onClick={() => window.history.back()} >Volver</button>
        </>
    )
}
