// src/pages/MyBookingsPage.jsx
import React, { useState } from 'react';
import { Modal } from '../components/Modal';
import { StarIcon } from '../components/Icon';
import BookingDetailModal from '../components/BookingDetailModal';

const MyBookingsPage = ({ bookings, setBookings }) => {
    const [activeTab, setActiveTab] = useState('Upcoming');
    const [bookingToCancel, setBookingToCancel] = useState(null);
    const [selectedBooking, setSelectedBooking] = useState(null);

    const tabs = ['Upcoming', 'Pending', 'Completed', 'Cancelled'];
    const filteredBookings = bookings.filter(b => b.status === activeTab);
    const statusColors = { Upcoming: 'bg-blue-100 text-blue-800', Pending: 'bg-yellow-100 text-yellow-800', Completed: 'bg-green-100 text-green-800', Cancelled: 'bg-red-100 text-red-800', };
    
    const handleCancelBooking = () => {
        if (!bookingToCancel) return;
        setBookings(bookings.map(b => b.id === bookingToCancel.id ? {...b, status: 'Cancelled'} : b));
        setBookingToCancel(null);
    };

    const handleRateBooking = (bookingId, rating) => {
        const updatedBookings = bookings.map(b => b.id === bookingId ? {...b, rating: rating} : b);
        setBookings(updatedBookings);
        setSelectedBooking(updatedBookings.find(b => b.id === bookingId)); // Update selected booking to reflect new rating
    };

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>
            <div className="mb-8 border-gray-200 border-b">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map(tab => (
                        <button key={tab} onClick={() => setActiveTab(tab)} className={`${ activeTab === tab ? 'border-lime-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300' } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}>
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="space-y-6">
                {filteredBookings.length > 0 ? filteredBookings.map(booking => (
                    <div key={booking.id} onClick={() => setSelectedBooking(booking)} className="bg-white rounded-lg shadow-md overflow-hidden md:flex cursor-pointer hover:shadow-lg transition-shadow">
                        <img src={booking.image} alt={booking.carName} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
                        <div className="p-6 flex-grow flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-xl text-gray-800">{booking.carName}</h3>
                                    <span className={`text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full ${statusColors[booking.status]}`}>{booking.status}</span>
                                </div>
                                <p className="text-gray-600 mt-2">{new Date(booking.startDate).toDateString()} - {new Date(booking.endDate).toDateString()}</p>
                                {booking.rating && booking.status === 'Completed' && (
                                    <div className="flex items-center mt-2">
                                        {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-5 h-5 ${i < booking.rating ? 'text-yellow-400' : 'text-gray-300'}`} />)}
                                    </div>
                                )}
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <p className="text-lg font-bold text-gray-900">Total: Php {booking.totalPrice.toFixed(2)}</p>
                                {(booking.status === 'Upcoming' || booking.status === 'Pending') && (
                                    <button onClick={(e) => { e.stopPropagation(); setBookingToCancel(booking);}} className="bg-red-100 text-red-700 hover:bg-red-200 font-semibold py-2 px-4 rounded-lg text-sm transition-colors">
                                        Cancel Booking
                                    </button>
                                )}
                                {booking.status === 'Completed' && (
                                    <button onClick={(e) => { e.stopPropagation(); setSelectedBooking(booking);}} className="bg-lime-100 text-lime-700 hover:bg-lime-200 font-semibold py-2 px-4 rounded-lg text-sm transition-colors">
                                        {booking.rating ? "View Rating" : "Rate Experience"}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="text-center py-16">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        </svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No bookings</h3>
                        <p className="mt-1 text-sm text-gray-500">You have no {activeTab.toLowerCase()} bookings.</p>
                    </div>
                )}
            </div>
            <Modal isOpen={!!bookingToCancel} onClose={() => setBookingToCancel(null)}>
                <h3 className="text-lg font-semibold text-gray-900">Confirm Cancellation</h3>
                <p className="mt-2 text-sm text-gray-600">Are you sure you want to cancel your booking for the {bookingToCancel?.carName}?</p>
                <div className="mt-6 flex justify-end space-x-3">
                    <button onClick={() => setBookingToCancel(null)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                        Go Back
                    </button>
                    <button onClick={handleCancelBooking} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
                        Yes, Cancel
                    </button>
                </div>
            </Modal>
            <BookingDetailModal isOpen={!!selectedBooking} onClose={() => setSelectedBooking(null)} onSubmitRating={handleRateBooking} booking={selectedBooking} />
        </main>
    );
};

export default MyBookingsPage;