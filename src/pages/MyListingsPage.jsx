import React, { useState } from 'react';
import { Modal } from '../components/Modal';

const MyListingsPage = ({ hostBookings, setHostBookings }) => {
    const [activeTab, setActiveTab] = useState('New Request');
    const [bookingToUpdate, setBookingToUpdate] = useState(null);
    const [actionType, setActionType] = useState(''); // 'accept' or 'decline'

    const tabs = ['New Request', 'Upcoming', 'Completed', 'Declined'];
    const filteredBookings = hostBookings.filter(b => b.status === activeTab);
    const statusColors = { 'New Request': 'bg-blue-100 text-blue-800', 'Upcoming': 'bg-yellow-100 text-yellow-800', 'Completed': 'bg-green-100 text-green-800', 'Declined': 'bg-red-100 text-red-800' };

    const handleActionClick = (booking, type) => {
        setBookingToUpdate(booking);
        setActionType(type);
    };

    const confirmAction = () => {
        if (!bookingToUpdate) return;
        const newStatus = actionType === 'accept' ? 'Upcoming' : 'Declined';
        setHostBookings(hostBookings.map(b => b.id === bookingToUpdate.id ? { ...b, status: newStatus } : b));
        setBookingToUpdate(null);
        setActionType('');
    };

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">My Listings Dashboard</h1>
            <div className="mb-8 border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map(tab => (
                        <button key={tab} onClick={() => setActiveTab(tab)} className={`${ activeTab === tab ? 'border-sky-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300' } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}>
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="space-y-6">
                {filteredBookings.length > 0 ? filteredBookings.map(booking => (
                    <div key={booking.id} className="bg-white rounded-lg shadow-md overflow-hidden md:flex">
                        <img src={booking.image} alt={booking.carName} className="w-full md:w-1/3 h-48 md:h-auto object-cover" />
                        <div className="p-6 flex-grow flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-xl text-gray-800">{booking.carName}</h3>
                                    <span className={`text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full ${statusColors[booking.status]}`}>{booking.status}</span>
                                </div>
                                <p className="text-gray-700 mt-2 font-semibold">Renter: {booking.renterName}</p>
                                <p className="text-gray-600">{new Date(booking.startDate).toDateString()} - {new Date(booking.endDate).toDateString()}</p>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <p className="text-lg font-bold text-gray-900">Earnings: Php {booking.totalPrice.toFixed(2)}</p>
                                {booking.status === 'New Request' && (
                                    <div className="flex space-x-2">
                                        <button onClick={() => handleActionClick(booking, 'decline')} className="bg-red-100 text-red-700 hover:bg-red-200 font-semibold py-2 px-4 rounded-lg text-sm">Decline</button>
                                        <button onClick={() => handleActionClick(booking, 'accept')} className="bg-green-100 text-green-700 hover:bg-green-200 font-semibold py-2 px-4 rounded-lg text-sm">Accept</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="text-center py-16">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <h3 className="mt-2 text-sm font-medium text-gray-900">No Bookings</h3>
                        <p className="mt-1 text-sm text-gray-500">You have no {activeTab.toLowerCase()} bookings in this category.</p>
                    </div>
                )}
            </div>

            <Modal isOpen={!!bookingToUpdate} onClose={() => setBookingToUpdate(null)}>
                <h3 className="text-lg font-semibold text-gray-900">Confirm Action</h3>
                <p className="mt-2 text-sm text-gray-600">Are you sure you want to {actionType} this booking request for the {bookingToUpdate?.carName}?</p>
                <div className="mt-6 flex justify-end space-x-3">
                    <button onClick={() => setBookingToUpdate(null)} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
                    <button onClick={confirmAction} className={`px-4 py-2 rounded-md text-white ${actionType === 'accept' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}>
                        Yes, {actionType === 'accept' ? 'Accept' : 'Decline'}
                    </button>
                </div>
            </Modal>
        </main>
    );
};

export default MyListingsPage;