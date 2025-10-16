import React, { useState, useEffect } from 'react';
// All necessary icons and data are now imported
import { StarIcon, LocationIcon, PhoneIcon, SeatingIcon, TransmissionIcon, FuelIcon, ChevronLeftIcon, ChevronRightIcon } from '../components/Icon';
import { rentalPolicy, rentEaseBranches } from '../data/mockData';
// Import both modal components
import LocationModal from '../components/LocationModal';
import DeliveryLocationModal from '../components/DeliveryLocationModal';

const CarDetailPage = ({ car, onBack, searchCriteria, onStartBooking }) => {
    const [bookingData, setBookingData] = useState({ location: '', startDate: '', endDate: '' });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isBookingLocationModalOpen, setBookingLocationModalOpen] = useState(false);

    // --- State for new delivery feature ---
    const [deliveryOption, setDeliveryOption] = useState('pickup'); // 'pickup' or 'delivery'
    const [customDeliveryAddress, setCustomDeliveryAddress] = useState('');
    const [isDeliveryModalOpen, setDeliveryModalOpen] = useState(false);

    useEffect(() => { 
        setCurrentImageIndex(0);
        setBookingData({ 
            location: searchCriteria?.location || car?.location || '', 
            startDate: searchCriteria?.startDate || '', 
            endDate: searchCriteria?.endDate || '', 
        });
        // Reset delivery option when car changes
        setDeliveryOption('pickup');
        setCustomDeliveryAddress('');
    }, [searchCriteria, car]);
    
    if (!car) { return <div className="text-center py-20">Car not found.</div>; }

    // Validation for the "Book Now" button
    const isBookingFormValid = 
        bookingData.location && 
        bookingData.startDate && 
        bookingData.endDate &&
        (deliveryOption === 'pickup' || (deliveryOption === 'delivery' && customDeliveryAddress));
    
    const handleBooking = () => {
        // Include the final address and fee in the booking details
        const branch = rentEaseBranches.find(b => b.name === car.location);
        const finalAddress = deliveryOption === 'pickup' ? branch?.address : customDeliveryAddress;
        const deliveryFee = deliveryOption === 'delivery' ? rentalPolicy.deliveryFee : 0;

        onStartBooking(car, { ...bookingData, finalAddress, deliveryOption, deliveryFee });
    };

    const goToPrevious = () => {
        const isFirstImage = currentImageIndex === 0;
        const newIndex = isFirstImage ? car.images.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
    };
    const goToNext = () => {
        const isLastImage = currentImageIndex === car.images.length - 1;
        const newIndex = isLastImage ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
    };

    const handleSelectBookingLocation = (locationName) => {
        setBookingData(prev => ({ ...prev, location: locationName }));
        setBookingLocationModalOpen(false);
    };

    const handleSelectDeliveryLocation = (address) => {
        setCustomDeliveryAddress(address);
    };

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <button onClick={onBack} className="mb-6 text-sky-600 hover:text-sky-800 font-semibold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Back to list
                </button>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="relative mb-8">
                            <img 
                                src={car.images[currentImageIndex].url} 
                                alt={`${car.name} - ${car.images[currentImageIndex].type}`} 
                                className="w-full h-auto object-cover rounded-xl shadow-lg"
                            />
                            <button onClick={goToPrevious} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white">
                                <ChevronLeftIcon />
                            </button>
                            <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 rounded-full p-2 hover:bg-white">
                                <ChevronRightIcon />
                            </button>
                            <div className="flex justify-center space-x-2 mt-4">
                                {car.images.map((image, index) => (
                                    <button key={index} onClick={() => setCurrentImageIndex(index)}>
                                        <img 
                                            src={image.url} 
                                            alt={`thumbnail ${index + 1}`} 
                                            className={`w-20 h-16 object-cover rounded-md border-2 ${currentImageIndex === index ? 'border-sky-500' : 'border-transparent'}`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex justify-between items-start mb-4">
                            <h1 className="text-4xl font-bold text-gray-900">{car.name}</h1>
                            {car.coding && (
                                <span className="inline-block bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                                    Coding every {car.coding}
                                </span>
                            )}
                        </div>
                        
                        <div className="flex justify-between items-center mb-6 flex-wrap">
                            <div className="flex items-center text-lg text-gray-600">
                                <div className="flex items-center mr-4">
                                    <StarIcon className="w-6 h-6 text-yellow-400 mr-2" />
                                    <span>{car.rating} ({car.reviews} reviews)</span>
                                </div>
                                <div className="flex items-center">
                                    <LocationIcon className="w-5 h-5 mr-1 text-gray-500"/>
                                    <span>{car.location}</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 text-gray-700">
                                <div className="flex items-center">
                                    <SeatingIcon className="h-5 w-5 mr-1"/>
                                    <span className="font-medium">{car.seating} seats</span>
                                </div>
                                <div className="flex items-center">
                                    <TransmissionIcon className="h-5 w-5 mr-1"/>
                                    <span className="font-medium">{car.transmission}</span>
                                </div>
                                <div className="flex items-center">
                                    <FuelIcon className="h-5 w-5 mr-1"/>
                                    <span className="font-medium">{car.fuelType}</span>
                                </div>
                            </div>
                        </div>
                        
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
                                <PhoneIcon className="w-5 h-5 mr-2 text-sky-600" />
                                <span>Contact: {car.owner.contactNumber}</span>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 mt-8 pt-6">
                            <h3 className="text-2xl font-semibold mb-4">Rental Duration Guide</h3>
                            <div className="text-gray-600 space-y-1">
                                <p>Minimum Rental Duration: {rentalPolicy.minDuration.value} {rentalPolicy.minDuration.unit}</p>
                                <p>Maximum Rental Duration: {rentalPolicy.maxDuration.value} {rentalPolicy.maxDuration.unit}</p>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 mt-8 pt-6">
                            <h3 className="text-2xl font-semibold mb-4">Car Features</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {car.features.map(feature => (
                                    <div key={feature} className="flex items-center text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-gray-200 mt-8 pt-6">
                            <h3 className="text-2xl font-semibold mb-4">Car Rules</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                {car.rules.map(rule => (<li key={rule}>{rule}</li>))}
                            </ul>
                        </div>

                        <div className="border-t border-gray-200 mt-8 pt-6">
                            <h3 className="text-2xl font-semibold mb-4">Reviews ({car.reviewsList.length})</h3>
                            <div className="space-y-6">
                                {car.reviewsList && car.reviewsList.length > 0 ? (
                                    car.reviewsList.map((review, index) => (
                                        <div key={index} className="flex space-x-4">
                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <p className="font-semibold">{review.reviewerName}</p>
                                                    <span className="text-gray-400 text-sm">&bull; {review.date}</span>
                                                </div>
                                                <div className="flex items-center mt-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <StarIcon key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                                                    ))}
                                                </div>
                                                <p className="text-gray-700 mt-2">{review.comment}</p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500">No reviews yet for this car.</p>
                                )}
                            </div>
                        </div>
                        </div>
                        
                        <div className="lg:col-span-1">
                            <div className="sticky top-28 bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                                <p className="text-2xl font-bold text-gray-900 mb-4">Php {car.price.toFixed(2)} <span className="text-lg font-normal text-gray-600">/ day</span></p>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Location</label>
                                        <button 
                                            onClick={() => setBookingLocationModalOpen(true)}
                                            className="mt-1 form-input w-full border-gray-200 text-left flex items-center"
                                        >
                                            <LocationIcon className="h-5 w-5 mr-2 text-gray-400"/>
                                            <span>{bookingData.location || "Select a branch"}</span>
                                        </button>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Trip Start</label>
                                        <input type="datetime-local" value={bookingData.startDate} onChange={(e) => setBookingData({...bookingData, startDate: e.target.value})} className="mt-1 form-input border-gray-200"/>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Trip End</label>
                                        <input type="datetime-local" value={bookingData.endDate} onChange={(e) => setBookingData({...bookingData, endDate: e.target.value})} className="mt-1 form-input border-gray-200"/>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Option</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            <button onClick={() => setDeliveryOption('pickup')} className={`px-4 py-2 text-sm font-semibold rounded-md border text-center transition-colors ${deliveryOption === 'pickup' ? 'bg-sky-100 text-sky-700 border-sky-300' : 'bg-gray-50 hover:bg-gray-100 border-gray-200'}`}>
                                                Pick-up
                                            </button>
                                            <button onClick={() => setDeliveryOption('delivery')} className={`px-4 py-2 text-sm font-semibold rounded-md border text-center transition-colors ${deliveryOption === 'delivery' ? 'bg-sky-100 text-sky-700 border-sky-300' : 'bg-gray-50 hover:bg-gray-100 border-gray-200'}`}>
                                                Host Delivery
                                            </button>
                                        </div>
                                        <div className="mt-3 text-xs text-gray-500 p-2 bg-gray-50 rounded-md">
                                            {deliveryOption === 'pickup' ? (
                                                <>
                                                    <strong>Pick-up Address:</strong><br/>
                                                    <span>{rentEaseBranches.find(b => b.name === car.location)?.address || 'N/A'}</span>
                                                </>
                                            ) : (
                                                <button onClick={() => setDeliveryModalOpen(true)} className="text-sky-600 hover:underline w-full text-left">
                                                    {customDeliveryAddress ? `Delivering to: ${customDeliveryAddress}` : 'Choose delivery location...'}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                
                                <button 
                                    onClick={handleBooking} 
                                    disabled={!isBookingFormValid}
                                    className={`mt-6 w-full font-bold py-3 px-4 rounded-lg text-lg transition-colors ${isBookingFormValid ? 'bg-sky-500 hover:bg-sky-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                                >
                                    Book Now
                                </button>
                                
                                <p className="text-center text-sm text-gray-500 mt-4">You won't be charged yet</p>
                            </div>
                        </div>
                    </div>
                </div>

            <LocationModal
                isOpen={isBookingLocationModalOpen}
                onClose={() => setBookingLocationModalOpen(false)}
                onSelectLocation={handleSelectBookingLocation}
            />
            <DeliveryLocationModal 
                isOpen={isDeliveryModalOpen}
                onClose={() => setDeliveryModalOpen(false)}
                onSelectLocation={handleSelectDeliveryLocation}
                initialAddress={customDeliveryAddress}
            />
        </>
    );
};

export default CarDetailPage;