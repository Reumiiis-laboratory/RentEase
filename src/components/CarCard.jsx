// src/components/CarCard.jsx
import React from 'react';
import { StarIcon } from './Icon';

const CarCard = ({ car, onSelect }) => {
    
    // This handler function prevents the click from bubbling up to the parent div
    const handleButtonClick = (e) => {
        e.stopPropagation(); // Stop the event from reaching the parent div
        onSelect(car);       // Trigger the navigation
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300" onClick={() => onSelect(car)}>
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-gray-800">{car.name}</h3>
                    <button className="text-gray-400 hover:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                    <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{car.rating} ({car.reviews} reviews)</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">{car.location}</p>
                <p className="text-sm text-gray-500">Coding: {car.coding}</p>
                <div className="mt-4 flex justify-between items-center">
                    <p className="text-lg font-bold text-gray-900">Php {car.price.toFixed(2)}<span className="text-sm font-normal text-gray-600">/day</span></p>
                    {/* 👇 THIS IS THE FIX 👇 */}
                    <button 
                        onClick={handleButtonClick} 
                        className="bg-sky-400 hover:bg-sky-500 text-gray-800 font-semibold py-2 px-4 rounded-lg text-sm"
                    >
                        Rent Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarCard;