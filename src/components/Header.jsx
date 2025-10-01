// src/components/Header.jsx
import React from 'react';
import ProfileMenuDropDown from './ProfileMenuDropDown';
import { LocationIcon, CalendarIcon, SearchIcon, BellIcon } from './Icon';

const Header = ({ onLocationClick, onStartClick, onEndClick, onNotifClick, navigateTo, handleSearch, searchCriteria }) => (
    <header className="bg-gray-900 shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <button onClick={() => navigateTo('list')} className="flex-shrink-0">
                <img className="h-8 w-auto" src="/logorent.png" alt="RentEase" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x50/111827/a3e635?text=RentEase'; }}/>
            </button>
            <div className="hidden md:flex items-center bg-white border border-gray-200 rounded-full shadow-sm">
                
                {/* Line after this button is now softer */}
                <button onClick={onLocationClick} className="flex items-center px-4 py-2 border-r border-gray-200 hover:bg-gray-50 rounded-l-full">
                    <LocationIcon />
                    <span className="text-sm font-medium text-gray-700">{searchCriteria.location || 'Location'}</span>
                </button>

                {/* Line after this button is now softer */}
                <button onClick={onStartClick} className="flex items-center px-4 py-2 border-r border-gray-200 hover:bg-gray-50">
                    <CalendarIcon />
                    <span className="text-sm font-medium text-gray-700">{searchCriteria.startDate ? new Date(searchCriteria.startDate).toLocaleDateString() : 'Trip Start'}</span>
                </button>

                <button onClick={onEndClick} className="flex items-center px-4 py-2 hover:bg-gray-50">
                    <CalendarIcon />
                    <span className="text-sm font-medium text-gray-700">{searchCriteria.endDate ? new Date(searchCriteria.endDate).toLocaleDateString() : 'Trip End'}</span>
                </button>
                <button onClick={handleSearch} className="p-2 bg-sky-400 hover:bg-sky-500 rounded-full m-1">
                    <SearchIcon />
                </button>
            </div>
            <div className="flex items-center space-x-4">
                <button onClick={onNotifClick} className="p-2 rounded-full hover:bg-gray-700 relative">
                    <BellIcon />
                    <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-gray-900"></span>
                </button>
                <ProfileMenuDropDown navigateTo={navigateTo} />
            </div>
        </div>
    </header>
);

export default Header;