// src/components/Modal.jsx
import React, { useEffect, useRef } from 'react';
import { CloseIcon } from './Icon';

export const Modal = ({ children, onClose, isOpen }) => {
    const modalRef = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => { if (modalRef.current && !modalRef.current.contains(event.target)) { onClose(); } };
        if (isOpen) { document.addEventListener("mousedown", handleClickOutside); }
        return () => { document.removeEventListener("mousedown", handleClickOutside); };
    }, [isOpen, onClose]);
    if (!isOpen) return null;
    return (
        // 👇 STYLING UPDATED ON THIS DIV 👇
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm z-50 flex justify-center items-center p-4">
            <div ref={modalRef} className="bg-white rounded-lg shadow-xl p-6 relative w-full max-w-md">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
                    <CloseIcon />
                </button>fixed
                {children}
            </div>
        </div>
    );
};

// --- NO CHANGES NEEDED BELOW ---
// These components will automatically use the new modal style.

export const LocationModal = ({ isOpen, onClose, location, setLocation, confirmAction }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <h3 className="text-lg font-semibold mb-4">Select Location</h3>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g., Manila, Philippines" className="mb-4 form-input"/>
        <div className="h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
            <p>Google Maps Preview</p>
        </div>
        <button onClick={confirmAction} className="mt-4 w-full bg-lime-400 hover:bg-lime-500 text-gray-800 font-bold py-2 px-4 rounded">
            Confirm Location
        </button>
    </Modal>
);

export const DateTimePickerModal = ({ isOpen, onClose, date, setDate, title, confirmAction }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div>
            <label htmlFor="datetime" className="block text-sm font-medium text-gray-700">Date and Time</label>
            <input type="datetime-local" id="datetime" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 form-input"/>
        </div>
        <button onClick={confirmAction} className="mt-6 w-full bg-lime-400 hover:bg-lime-500 text-gray-800 font-bold py-2 px-4 rounded">
            Confirm
        </button>
    </Modal>
);

export const NotificationsModal = ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <h3 className="text-lg font-semibold mb-4">Notifications</h3>
        <ul className="space-y-3">
            <li className="p-3 bg-gray-50 rounded-md">
                <p className="font-semibold text-gray-800">Booking Confirmed!</p>
                <p className="text-sm text-gray-600">Your booking for the All New Rush is confirmed for tomorrow.</p>
            </li>
            <li className="p-3 bg-gray-50 rounded-md">
                <p className="font-semibold text-gray-800">New Message</p>
                <p className="text-sm text-gray-600">John Doe sent you a message about your trip.</p>
            </li>
             <li className="p-3 bg-gray-50 rounded-md">
                <p className="font-semibold text-gray-800">Special Offer</p>
                <p className="text-sm text-gray-600">Get 15% off your next rental. Use code RENT15.</p>
            </li>
        </ul>
    </Modal>
);