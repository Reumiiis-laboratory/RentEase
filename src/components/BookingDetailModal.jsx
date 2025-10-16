import React, { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { StarIcon } from './Icon';

const BookingDetailModal = ({ isOpen, onClose, booking, onSubmitReview }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState('');

    useEffect(() => {
        if (booking) {
            setRating(booking.rating || 0);
            setComment(booking.comment || '');
        }
    }, [booking]);

    if (!isOpen || !booking) return null;

    const canRate = booking.status === 'Completed' && !booking.rating;

    const handleReviewSubmit = () => {
        onSubmitReview(booking.id, rating, comment);
        onClose();
    };

    // Helper function to format date and time
    const formatDateTime = (dateString) => {
        if (!dateString) return 'N/A';
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
        return new Date(dateString).toLocaleString('en-US', options);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Details</h3>
            
            <div className="border-t border-gray-200 -mx-6 px-6 py-4">
                <div className="flex items-center mb-4">
                    <img src={booking.images[0].url} alt={booking.carName} className="w-28 h-20 object-cover rounded-lg mr-4" />
                    <div>
                        <p className="font-bold text-lg">{booking.carName}</p>
                        {/* UPDATED: Displays date and time */}
                        <p className="text-sm text-gray-600">{formatDateTime(booking.startDate)} - {formatDateTime(booking.endDate)}</p>
                    </div>
                </div>

                <div className="text-sm text-gray-700 space-y-2">
                    <p><strong>Status:</strong> {booking.status}</p>
                     <p><strong>Total Paid:</strong> Php {booking.totalPrice.toFixed(2)}</p>
                    <p><strong>{booking.deliveryOption === 'pickup' ? 'Pick-up from:' : 'Delivered to:'}</strong> {booking.finalAddress}</p>
                </div>
            </div>

            {booking.status === 'Completed' && (
                <div className="border-t border-gray-200 -mx-6 px-6 py-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Your Review</h4>
                    <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <StarIcon
                                key={star}
                                className={`w-8 h-8 ${canRate ? 'cursor-pointer' : 'cursor-default'} ${ (hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-300' }`}
                                onClick={() => canRate && setRating(star)}
                                onMouseEnter={() => canRate && setHoverRating(star)}
                                onMouseLeave={() => canRate && setHoverRating(0)}
                            />
                        ))}
                    </div>
                    <textarea 
                        value={comment}
                        onChange={(e) => canRate && setComment(e.target.value)}
                        readOnly={!canRate}
                        placeholder={canRate ? "Leave a comment..." : "Your review has been submitted."}
                        className="mt-4 form-input w-full p-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
                        rows="3"
                    ></textarea>
                    {canRate && (
                        <div className="mt-4 flex justify-end">
                            <button onClick={handleReviewSubmit} className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 disabled:bg-sky-300" disabled={rating === 0}>
                                Submit Review
                            </button>
                        </div>
                    )}
                </div>
            )}
        </Modal>
    );
};

export default BookingDetailModal;