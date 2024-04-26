import React from 'react'

export const Banner = () => {
  return (
    <div className='h-[60vh] md:h-[50vh] bg-cover bg-center flex items-end' style={{backgroundImage : 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bG_uhvjXggIGrZ4f81uEjd6TH4fCfitmKQ&s)'}}>
        <div className='text-white text-xl text-center w-full bg-red-900/60 p-4'>Batman the dark knight rises</div>
    </div>
  )
}

export default Banner