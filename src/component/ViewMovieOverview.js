import React from 'react'
const ViewMovieOverview = ({ title, overview  }) => {
  return (
    <div className='w-screen aspect-video pl-20 pt-[20%]  absolute bg-gradient-to-r from-black ' >
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='w-1/4'>{overview}</p>
      <div className='mt-2'>
        <button className='py-2 px-4 bg-white text-black rounded-md hover:opacity-70'> ▶ Play</button>
        <button  className='ml-4 py-2 px-4 bg-slate-600 text-white rounded-md'>More Info</button>
      </div>
    </div>
  )
}

export default ViewMovieOverview
