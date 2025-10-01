// src/components/ProfileMenuDropDown.jsx
import React, { useState, useEffect, useRef } from 'react';
import { UserIcon, BookingsIcon, AccountIcon, HostCarIcon, LogoutIcon } from './Icon';

const ProfileMenuDropDown = ({ navigateTo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false); } };
        document.addEventListener("mousedown", handleClickOutside);
        return () => { document.removeEventListener("mousedown", handleClickOutside); };
    }, [menuRef]);

    const activeClasses = 'bg-lime-500/20 ring-2 ring-lime-400 shadow-lg shadow-lime-500/30';
    const handleNavigation = (page) => { navigateTo(page); setIsOpen(false); };

    return (
        <div className="relative" ref={menuRef}>
            <button onClick={() => setIsOpen(!isOpen)} className={`flex items-center space-x-2 p-2 rounded-full border border-gray-600 transition-all duration-300 hover:bg-lime-500/20 hover:ring-2 hover:ring-lime-400 hover:shadow-lg hover:shadow-lime-500/30 ${isOpen ? activeClasses : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <UserIcon />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-20">
                    <button onClick={() => handleNavigation('bookings')} className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <BookingsIcon /> My Bookings
                    </button>
                    <button onClick={() => handleNavigation('account')} className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <AccountIcon /> Account
                    </button>
                    <button onClick={() => handleNavigation('host')} className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <HostCarIcon /> Host a Car
                    </button>
                    <div className="border-t border-gray-200 my-2"></div>
                    <button className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 font-semibold">
                        <LogoutIcon /> Log Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfileMenuDropDown;