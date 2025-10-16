// src/components/Modal.jsx
import React, { useEffect, useRef } from 'react';
import { CloseIcon } from './Icon';

// This is the generic modal component used for simple pop-ups.
export const Modal = ({ children, onClose, isOpen }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => { 
            if (modalRef.current && !modalRef.current.contains(event.target)) { 
                onClose(); 
            } 
        };
        if (isOpen) { 
            document.addEventListener("mousedown", handleClickOutside); 
        }
        return () => { 
            document.removeEventListener("mousedown", handleClickOutside); 
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        // The background overlay with a blur effect
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center p-4">
            {/* The white modal card */}
            <div ref={modalRef} className="bg-white rounded-lg shadow-xl p-6 relative w-full max-w-md">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
                    <CloseIcon />
                </button>
                {/* The word "fixed" has been removed, and the content is now displayed correctly */}
                {children}
            </div>
        </div>
    );
};