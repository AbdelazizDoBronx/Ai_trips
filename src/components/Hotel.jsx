import React from 'react';

const Hotel = ({ trip }) => {
  return (
    <>
      <h2 className='mt-2 font-bold text-3xl'>Hotel Recommendation</h2>
      <div className="flex flex-wrap gap-4 my-2"> {/* Flex container with wrap and gap */}
        {trip?.data?.hotels?.map((hotel, idx) => (
          <div key={idx} className='p-3 shadow-md rounded-md w-[300px] flex flex-col'>
            <img
              className='object-cover rounded-md shadow-md mt-5'
              src='https://images.unsplash.com/photo-1523833082115-1e8e294bd14e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFpcnBsYW5lfGVufDB8fDB8fHww'
              alt='img'
            />
            <h2 className='text-2xl text-neutral-600 font-bold tracking-wide mt-2'>{hotel.hotelName}</h2>
            <p className='text-neutral-500 text-sm my-1 text-pretty'>{hotel.description}</p>

            {/* Price and Reviews Container */}
            <div className='flex flex-col mt-auto'>
              <h2 className='bg-neutral-100 p-2 rounded-md shadow-sm my-1 font-semibold'>
                Price: {hotel.price}$
              </h2>
              <h2 className='bg-yellow-300 p-1 rounded-md text-white shadow-sm font-bold'>
                Reviews: {hotel.rating}/5
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hotel;
