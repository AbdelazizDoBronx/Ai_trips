import React from 'react'

const InfoSelection =  ({trip}) => {
    
  return (
    <div >
        <img className='h-[300px] w-full object-cover rounded-md shadow-md mt-5' src='https://images.unsplash.com/photo-1523833082115-1e8e294bd14e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFpcnBsYW5lfGVufDB8fDB8fHww' alt='img'/>
        <h2 className='font-bold text-2xl mt-5'>Your Preferance</h2>
        <div className='flex my-1 gap-3 items-start text-center'>
            <span className='p-2 w-auto  shadow-md rounded-md font-bold text-neutral-500 '>Destination: {trip.userSelection?.destination}</span>
            <span className='p-2 w-auto  shadow-md rounded-md font-bold text-neutral-500 '>Duration: {trip.userSelection?.days} days</span>
            <span className='p-2 w-auto  shadow-md rounded-md font-bold text-neutral-500 '>Budget: {trip.userSelection?.budget}</span>
            <span className='p-2 w-auto  shadow-md rounded-md font-bold text-neutral-500 '>Number of Travelers: {trip.userSelection?.travel}</span>
        </div>
    </div>
  )
}

export default InfoSelection