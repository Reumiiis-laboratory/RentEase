import React from 'react';
import { StarIcon, SeatingIcon, TransmissionIcon, LocationIcon } from './Icon'; 

const CarCard = ({ car, onSelect, tripDays, totalAmount }) => {
    
    const handleButtonClick = (e) => {
        e.stopPropagation(); 
        onSelect(car);       
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300" onClick={() => onSelect(car)}>
            <img src={car.images[0].url} alt={car.name} className="w-full h-48 object-cover" />
            
            <div className="p-4">
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-gray-800">{car.name}</h3>
                    {/* REMOVED: The heart/favorite icon button */}
                </div>

                <div className="flex items-center text-sm text-gray-600 mt-1">
                    <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{car.rating} ({car.reviews} reviews)</span>
                </div>

                <div className="flex items-center text-sm text-gray-500 mt-2">
                    <LocationIcon className="h-4 w-4 mr-1 text-gray-400" />
                    <span>{car.location}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 mt-1 space-x-4">
                    <div className="flex items-center">
                        <SeatingIcon className="h-4 w-4 mr-1 text-gray-400" /> 
                        <span>{car.seating} seats</span>
                    </div>
                    <div className="flex items-center">
                        <TransmissionIcon className="h-4 w-4 mr-1 text-gray-400" /> 
                        <span>{car.transmission}</span>
                    </div>
                </div>

                <div className="mt-2">
                    {car.coding && (
                        <span className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-full">
                            Coding: {car.coding}
                        </span>
                    )}
                </div>

                <div className="mt-4 flex justify-between items-center">
                    <div>
                        <p className="text-lg font-bold text-gray-900">
                            Php {car.price.toFixed(2)}
                            <span className="text-sm font-normal text-gray-600">/day</span>
                        </p>
                        {totalAmount > 0 && (
                            <p className="text-sm font-semibold text-sky-600">
                                Total: Php {totalAmount.toFixed(2)}
                            </p>
                        )}
                    </div>

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