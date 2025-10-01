// src/pages/CarDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { StarIcon, LocationIcon, PhoneIcon } from '../components/Icon';

const CarDetailPage = ({ car, onBack, searchCriteria, onStartBooking }) => {
    const [bookingData, setBookingData] = useState({ location: '', startDate: '', endDate: '' });

    useEffect(() => { 
        setBookingData({ 
            location: searchCriteria?.location || car?.location || '', 
            startDate: searchCriteria?.startDate || '', 
            endDate: searchCriteria?.endDate || '', 
        }); 
    }, [searchCriteria, car]);
    
    if (!car) { return <div className="text-center py-20">Car not found.</div>; }
    
    const handleBooking = () => {
        onStartBooking(car, bookingData);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <button onClick={onBack} className="mb-6 text-lime-600 hover:text-lime-800 font-semibold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to list
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <img src={car.image} alt={car.name} className="w-full h-auto object-cover rounded-xl shadow-lg mb-8"/>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{car.name}</h1>
                    <div className="flex items-center text-lg text-gray-600 mb-6 flex-wrap">
                        <div className="flex items-center mr-4">
                            <StarIcon className="w-6 h-6 text-yellow-400 mr-2" />
                            <span>{car.rating} ({car.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center">
                            <LocationIcon className="w-5 h-5 mr-1 text-gray-500"/>
                            <span>{car.location}</span>
                        </div>
                    </div>
                    {/* 👇 STYLING UPDATED ON THIS DIV 👇 */}
                    <div className="border-t border-gray-200 pt-6">
                        <div className="flex items-center mb-6">
                            <img src={car.owner.avatar} alt={car.owner.name} className="w-16 h-16 rounded-full mr-4"/>
                            <div>
                                <h3 className="text-xl font-semibold">Hosted by {car.owner.name}</h3>
                                <p className="text-gray-500">Joined in {car.owner.joined}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{car.description}</p>
                        <div className="mt-4 flex items-center text-gray-800">
                            <PhoneIcon className="w-5 h-5 mr-2 text-lime-600" />
                            <span>Contact: {car.owner.contactNumber}</span>
                        </div>
                    </div>
                    {/* 👇 STYLING UPDATED ON THIS DIV 👇 */}
                    <div className="border-t border-gray-200 mt-8 pt-6">
                        <h3 className="text-2xl font-semibold mb-4">Car Features</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {car.features.map(feature => (
                                <div key={feature} className="flex items-center text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-lime-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* 👇 STYLING UPDATED ON THIS DIV 👇 */}
                    <div className="border-t border-gray-200 mt-8 pt-6">
                        <h3 className="text-2xl font-semibold mb-4">Car Rules</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {car.rules.map(rule => (<li key={rule}>{rule}</li>))}
                        </ul>
                    </div>
                </div>
                
                <div className="lg:col-span-1">
                    <div className="sticky top-28 bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                        <p className="text-2xl font-bold text-gray-900 mb-4">Php {car.price.toFixed(2)} <span className="text-lg font-normal text-gray-600">/ day</span></p>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Location</label>
                                <input type="text" value={bookingData.location} onChange={(e) => setBookingData({...bookingData, location: e.target.value})} placeholder="City or Airport" className="mt-1 form-input border-gray-200"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Trip Start</label>
                                <input type="datetime-local" value={bookingData.startDate} onChange={(e) => setBookingData({...bookingData, startDate: e.target.value})} className="mt-1 form-input border-gray-200"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Trip End</label>
                                <input type="datetime-local" value={bookingData.endDate} onChange={(e) => setBookingData({...bookingData, endDate: e.target.value})} className="mt-1 form-input border-gray-200"/>
                            </div>
                        </div>
                        
                        <button 
                            onClick={handleBooking} 
                            className="mt-6 w-full bg-lime-400 hover:bg-lime-500 text-gray-900 font-bold py-3 px-4 rounded-lg text-lg transition-transform transform hover:scale-105"
                        >
                            Book Now
                        </button>
                        
                        <p className="text-center text-sm text-gray-500 mt-4">You won't be charged yet</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetailPage;