// src/pages/BookingPage.jsx
import React, { useState } from 'react';
import { Modal } from '../components/Modal';

const BookingPage = ({ car, bookingDetails, onBack, onConfirmBooking }) => {
    const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
    
    if (!car || !bookingDetails) return <div className="text-center py-20">Booking details not found.</div>;
    
    const startDate = new Date(bookingDetails.startDate); 
    const endDate = new Date(bookingDetails.endDate);
    const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const totalPrice = (days > 0 ? days : 1) * car.price;
    
    const handleBooking = () => { 
        onConfirmBooking({ 
            ...bookingDetails, 
            carName: car.name, 
            totalPrice: totalPrice, 
            image: car.image, 
        }); 
    };
    
    return (
        <main className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <div className="flex items-center mb-6">
                        <button onClick={onBack} className="text-sky-600 hover:text-sky-800 mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <h1 className="text-3xl font-bold text-gray-900">Driver Details</h1>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div><label className="block text-sm font-medium text-gray-700">First Name</label><input type="text" placeholder="Juan" className="mt-1 form-input"/></div>
                                <div><label className="block text-sm font-medium text-gray-700">Last Name</label><input type="text" placeholder="Dela Cruz" className="mt-1 form-input"/></div>
                            </div>
                            <div><label className="block text-sm font-medium text-gray-700">Email Address</label><input type="email" placeholder="juan.delacruz@example.com" className="mt-1 form-input"/></div>
                            <div><label className="block text-sm font-medium text-gray-700">Phone Number</label><input type="tel" placeholder="+63 917 123 4567" className="mt-1 form-input"/></div>
                        </form>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    {/* 👇 STYLING UPDATED ON THIS DIV 👇 */}
                    <div className="sticky top-28 bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Booking Summary</h2>
                        <div className="flex items-center mb-4">
                            <img src={car.image} alt={car.name} className="w-24 h-16 object-cover rounded-lg mr-4" />
                            <div><p className="font-semibold">{car.name}</p><p className="text-sm text-gray-500">{car.type}</p></div>
                        </div>
                        {/* 👇 STYLING UPDATED ON THIS DIV 👇 */}
                        <div className="border-t border-gray-200 pt-4">
                            <p className="font-semibold mb-2">Trip Dates</p>
                            <p className="text-sm text-gray-600">Start: {new Date(bookingDetails.startDate).toLocaleString()}</p>
                            <p className="text-sm text-gray-600">End: {new Date(bookingDetails.endDate).toLocaleString()}</p>
                        </div>
                        {/* 👇 STYLING UPDATED ON THIS DIV 👇 */}
                        <div className="border-t border-gray-200 mt-4 pt-4">
                            <div className="flex justify-between text-sm text-gray-600"><span>Price for {days > 0 ? days : 1} day(s)</span><span>Php {totalPrice.toFixed(2)}</span></div>
                            {/* 👇 STYLING UPDATED ON THIS DIV 👇 */}
                            <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200"><span>Total</span><span>Php {totalPrice.toFixed(2)}</span></div>
                        </div>
                        <button onClick={() => setPaymentModalOpen(true)} className="mt-6 w-full bg-sky-400 hover:bg-sky-500 text-gray-800 font-bold py-3 px-4 rounded-lg text-lg">
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            </div>
            <Modal isOpen={isPaymentModalOpen} onClose={() => setPaymentModalOpen(false)}>
                <h3 className="text-lg font-semibold mb-4">Card Information</h3>
                <form className="space-y-4">
                    <input type="text" placeholder="Email" className="form-input" />
                    <input type="text" placeholder="1234 1234 1234 1234" className="form-input" />
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="MM / YY" className="form-input" />
                        <input type="text" placeholder="CVC" className="form-input" />
                    </div>
                    <input type="text" placeholder="Cardholder Name" className="form-input" />
                    <button type="button" onClick={handleBooking} className="w-full bg-sky-400 hover:bg-sky-500 text-gray-800 font-bold py-2 px-4 rounded">
                        Pay Php {totalPrice.toFixed(2)}
                    </button>
                </form>
            </Modal>S
        </main>
    );
};

export default BookingPage;