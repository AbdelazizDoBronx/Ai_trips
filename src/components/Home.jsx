import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='mt-20 text-center'>
       <h2 className='text-4xl font-bold tracking-wide my-5'><span className='text-neutral-500 font-extrabold'> Discover Your Next Adventure with AI: </span> Personalized Itineraries at Your Fingertips</h2> 
        <p className='text-sm  my-5 text-neutral-400 font-semibold'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
        <Link to='/trip'>
          <button className='btn btn-neutral text-white shadow-lg'>Get started, it's FREE</button>
        </Link>
        <div className='p-40 bg-neutral-500 rounded-full mt-7 -mx-40'></div>
    </div>
  )
}

export default Home