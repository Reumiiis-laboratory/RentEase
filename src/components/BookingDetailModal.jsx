// src/components/BookingDetailModal.jsx
import React, { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { StarIcon } from './Icon';

const BookingDetailModal = ({ isOpen, onClose, onSubmitRating, booking }) => {
    const [rating, setRating] = useState(booking?.rating || 0);
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(() => {
        setRating(booking?.rating || 0);
    }, [booking]);

    if (!isOpen || !booking) return null;

    const canRate = booking.status === 'Completed' && !booking.rating;
    
    const handleRatingSubmit = () => {
        onSubmitRating(booking.id, rating);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Booking Details</h3>
            <div className="border-t -mx-6 px-6 py-4 border-gray-200">
                <div className="flex items-center mb-4">
                    <img src={booking.image} alt={booking.carName} className="w-24 h-16 object-cover rounded-lg mr-4" />
                    <div>
                        <p className="font-bold">{booking.carName}</p>
                        <p className="text-sm text-gray-600">{new Date(booking.startDate).toDateString()} - {new Date(booking.endDate).toDateString()}</p>
                    </div>
                </div>
                <div className="flex justify-between font-bold text-md mt-4 pt-4 border-t border-gray-200">
                    <span>Total Paid</span>
                    <span>Php {booking.totalPrice.toFixed(2)}</span>
                </div>
            </div>

            {booking.status === 'Completed' && (
                <div className="border-t -mx-6 px-6 py-4 border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Your Rating</h4>
                    <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <StarIcon
                                key={star}
                                className={`w-8 h-8 ${canRate ? 'cursor-pointer' : ''} ${ (hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-300' }`}
                                onClick={() => canRate && setRating(star)}
                                onMouseEnter={() => canRate && setHoverRating(star)}
                                onMouseLeave={() => canRate && setHoverRating(0)}
                            />
                        ))}
                    </div>
                     {canRate && (
                        <div className="mt-4 flex justify-end">
                            <button onClick={handleRatingSubmit} className="px-4 py-2 bg-lime-500 text-white rounded-md hover:bg-lime-600 disabled:bg-lime-300" disabled={rating === 0}>
                                Submit Rating
                            </button>
                        </div>
                    )}
                </div>
            )}
        </Modal>
    );
};

export default BookingDetailModal;