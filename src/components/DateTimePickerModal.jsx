import React, { useState, useEffect } from 'react';

const DateTimePickerModal = ({ isOpen, onClose, date, title, confirmAction }) => {
    // This state holds the date selection *inside* the modal
    const [tempDate, setTempDate] = useState(date);

    // This makes sure the modal shows the correct date when it opens
    useEffect(() => {
        setTempDate(date);
    }, [date, isOpen]);

    if (!isOpen) return null;

    // When "Confirm" is clicked, this function passes the selected date back to App.jsx
    const handleConfirm = () => {
        confirmAction(tempDate);
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
                
                <div>
                    <label htmlFor="datetime-picker" className="block text-sm font-medium text-gray-700 mb-1">Select date and time</label>
                    <input 
                        type="datetime-local" 
                        id="datetime-picker"
                        value={tempDate} 
                        onChange={(e) => setTempDate(e.target.value)} 
                        className="form-input w-full p-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
                    />
                </div>

                <button 
                    onClick={handleConfirm}
                    className="mt-6 w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded-lg text-lg"
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default DateTimePickerModal;