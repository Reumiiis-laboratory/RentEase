import React, { useState } from 'react';
import { Modal } from '../components/Modal';
import BookingDetailModal from '../components/BookingDetailModal';

const MyBookingsPage = ({ bookings, onCancelBooking, onSubmitReview }) => {
    const [activeTab, setActiveTab] = useState('Upcoming');
    const [selectedBooking, setSelectedBooking] = useState(null);
    
    // State for the cancellation workflow modals
    const [bookingToCancel, setBookingToCancel] = useState(null);
    const [isRefundModalOpen, setRefundModalOpen] = useState(false);

    // The tabs for filtering bookings by status
    const tabs = ['Upcoming', 'Pending', 'Ongoing', 'Completed', 'Cancelled'];
    // Filter the bookings based on which tab is currently active
    const filteredBookings = bookings.filter(b => b.status === activeTab);
    // Color-coding for each status badge
    const statusColors = { 
        Upcoming: 'bg-blue-100 text-blue-800', 
        Pending: 'bg-yellow-100 text-yellow-800', 
        Ongoing: 'bg-teal-100 text-teal-800', 
        Completed: 'bg-green-100 text-green-800', 
        Cancelled: 'bg-red-100 text-red-800', 
    };
    
    // Function to handle the final cancellation confirmation
    const handleConfirmCancel = () => {
        if (!bookingToCancel) return;
        onCancelBooking(bookingToCancel.id); // Call the function from App.jsx
        setBookingToCancel(null); // Close the confirmation modal
        setRefundModalOpen(true); // Open the refund info modal
    };

    // Function to open the details modal when a card is clicked
    const handleCardClick = (booking) => {
        setSelectedBooking(booking);
    };
    
    // Helper to format date and time for display
    const formatDateTime = (dateString) => {
        if (!dateString) return 'N/A';
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
        return new Date(dateString).toLocaleString('en-US', options);
    };

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>
            
            {/* Tab Navigation */}
            <div className="mb-8 border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map(tab => (
                        <button 
                            key={tab} 
                            onClick={() => setActiveTab(tab)} 
                            className={`${ activeTab === tab ? 'border-sky-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300' } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Booking Cards List */}
            <div className="space-y-6">
                {filteredBookings.length > 0 ? filteredBookings.map(booking => (
                    <div key={booking.id} onClick={() => handleCardClick(booking)} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                        <div className="md:flex">
                            <img src={booking.images[0].url} alt={booking.carName} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
                            <div className="p-6 flex-grow flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-xl text-gray-800">{booking.carName}</h3>
                                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusColors[booking.status]}`}>{booking.status}</span>
                                    </div>
                                    <p className="text-gray-600 mt-2 text-sm">{formatDateTime(booking.startDate)} - {formatDateTime(booking.endDate)}</p>
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                    <p className="text-lg font-bold text-gray-900">Total: Php {booking.totalPrice.toFixed(2)}</p>
                                    {booking.status === 'Upcoming' && (
                                        <button onClick={(e) => { e.stopPropagation(); setBookingToCancel(booking);}} className="bg-red-100 text-red-700 hover:bg-red-200 font-semibold py-2 px-4 rounded-lg text-sm">
                                            Cancel Booking
                                        </button>
                                    )}
                                    {booking.status === 'Completed' && (
                                        <button onClick={(e) => { e.stopPropagation(); setSelectedBooking(booking);}} className="bg-sky-100 text-sky-700 hover:bg-sky-200 font-semibold py-2 px-4 rounded-lg text-sm">
                                            {booking.rating ? "View Review" : "Rate Experience"}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                        <h3 className="text-lg font-medium text-gray-900">No bookings in this category</h3>
                        <p className="mt-1 text-sm text-gray-500">Your {activeTab.toLowerCase()} bookings will appear here.</p>
                    </div>
                )}
            </div>

            {/* --- Modals for this page --- */}
            <BookingDetailModal isOpen={!!selectedBooking} onClose={() => setSelectedBooking(null)} booking={selectedBooking} onSubmitReview={onSubmitReview} />
            
            <Modal isOpen={!!bookingToCancel} onClose={() => setBookingToCancel(null)}>
                <h3 className="text-lg font-semibold text-gray-900">Confirm Cancellation</h3>
                <p className="mt-2 text-sm text-gray-600">Are you sure you want to cancel your booking for the {bookingToCancel?.carName}?</p>
                <div className="mt-6 flex justify-end space-x-3">
                    <button onClick={() => setBookingToCancel(null)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Go Back</button>
                    <button onClick={handleConfirmCancel} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Yes, Cancel</button>
                </div>
            </Modal>

            <Modal isOpen={isRefundModalOpen} onClose={() => setRefundModalOpen(false)}>
                <h3 className="text-lg font-semibold text-gray-900">Cancellation Processed</h3>
                <p className="mt-2 text-sm text-gray-600">Your booking has been cancelled. Your refund will be processed within 24 hours.</p>
                <div className="mt-6 flex justify-end">
                    <button onClick={() => setRefundModalOpen(false)} className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600">OK</button>
                </div>
            </Modal>
        </main>
    );
};

export default MyBookingsPage;