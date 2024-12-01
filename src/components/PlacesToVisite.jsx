import React from 'react';

const PlacesToVisite = ({ trip }) => {
    // Ensure that trip.data and trip.data.itinerary are available, and convert itinerary object to array
    const itinerary = trip?.data?.itinerary ? Object.values(trip.data.itinerary) : [];

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">Places to Visit</h1>
            {itinerary.length > 0 ? (
                itinerary.map((item, idx) => (
                    <div key={idx} className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Day {idx + 1}</h2>
                        <div className="space-y-6">
                            {item.plan.map((planItem, index) => (
                                <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{planItem.placeName}</h3>
                                    <p className="text-gray-600 mb-4">{planItem.placeDetails}</p>
                                    <div className="space-y-2">
                                        <p className="text-gray-700"><strong>Rating:</strong> {planItem.rating}</p>
                                        <p className="text-gray-700"><strong>Ticket Pricing:</strong> {planItem.ticketPricing}</p>
                                        <p className="text-gray-700"><strong>Time Travel:</strong> {planItem.timeTravel}</p>
                                    </div>
                                    <div className="mt-4">
                                        <img 
                                            src='https://images.unsplash.com/photo-1523833082115-1e8e294bd14e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFpcnBsYW5lfGVufDB8fDB8fHww' 
                                            alt={planItem.placeName} 
                                            className="w-full h-[400px] object-cover rounded-md shadow-lg" 
                                        />
                                    </div>
                                    {/* Correct URL for Google Maps search */}
                                    <a 
                                        href={`https://www.google.com/maps/search/?q=${planItem.placeName}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <button className="btn btn-neutral my-2 w-full">Navigate</button>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-xl text-gray-500">No itinerary available.</p>
            )}
        </div>
    );
};

export default PlacesToVisite;
