import React, { useState, useEffect } from 'react';
import { LocationIcon } from './Icon';

const DeliveryLocationModal = ({ isOpen, onClose, onSelectLocation, initialAddress }) => {
    const [address, setAddress] = useState(initialAddress);

    useEffect(() => {
        setAddress(initialAddress);
    }, [initialAddress, isOpen]);

    if (!isOpen) return null;

    const handleConfirm = () => {
        onSelectLocation(address);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <h3 className="text-xl font-bold text-gray-800 mb-4">Choose Delivery Location</h3>
                
                <div>
                    <label htmlFor="delivery-address" className="block text-sm font-medium text-gray-700 mb-1">Enter your delivery address</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        </div>
                        <input 
                            type="text" 
                            id="delivery-address"
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)} 
                            className="form-input w-full p-2 pl-10 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
                            placeholder="e.g., 123 Main St, Quezon City"
                        />
                    </div>
                    <div className="mt-4 h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
                        <p>Google Maps Preview Area</p>
                    </div>
                </div>

                <button 
                    onClick={handleConfirm}
                    className="mt-6 w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded-lg text-lg"
                >
                    Confirm Address
                </button>
            </div>
        </div>
    );
};

export default DeliveryLocationModal;