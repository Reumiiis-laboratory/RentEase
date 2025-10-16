import React from 'react';
import { CloseIcon } from './Icon'; // Assuming CloseIcon is available

const mockNotifications = [
    { id: 1, type: 'Booking', message: 'Your booking for Luxury Sedan is confirmed!', time: '10:30 AM', category: 'Today' },
    { id: 2, type: 'System', message: 'Price update: Delivery fee changed to ₱200.', time: '9:00 AM', category: 'Today' },
    { id: 3, type: 'Payment', message: 'Refund for cancelled hatchback processed.', time: '4:15 PM', category: 'Yesterday' },
    { id: 4, type: 'New Car', message: 'Check out the new Ford Everest in Makati!', time: '1:00 PM', category: 'Yesterday' },
];

const NotificationsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // Separate notifications into groups
    const today = mockNotifications.filter(n => n.category === 'Today');
    const yesterday = mockNotifications.filter(n => n.category === 'Yesterday');

    const renderNotification = (notif) => (
        <li key={notif.id} className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg border-l-4 border-sky-400 transition-colors cursor-pointer">
            <p className="font-semibold text-gray-800">{notif.message}</p>
            <p className="text-xs text-gray-500 mt-1">{notif.category} at {notif.time}</p>
        </li>
    );

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-xl shadow-2xl p-6 relative w-full max-w-lg max-h-[90vh] overflow-y-auto">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 z-10">
                    <CloseIcon />
                </button>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">All Notifications</h3>
                
                {/* Today's Notifications */}
                <h4 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-1">Today ({today.length})</h4>
                {today.length > 0 ? (
                    <ul className="space-y-3 mb-6">
                        {today.map(renderNotification)}
                    </ul>
                ) : <p className="text-sm text-gray-500 mb-6">No new notifications today.</p>}

                {/* Yesterday's Notifications */}
                <h4 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-1">Yesterday ({yesterday.length})</h4>
                {yesterday.length > 0 ? (
                    <ul className="space-y-3">
                        {yesterday.map(renderNotification)}
                    </ul>
                ) : <p className="text-sm text-gray-500">No notifications from yesterday.</p>}
            </div>
        </div>
    );
};

export default NotificationsModal;