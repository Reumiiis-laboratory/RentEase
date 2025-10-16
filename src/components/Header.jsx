import React, { useState, useRef, useEffect } from 'react';
import ProfileMenuDropDown from './ProfileMenuDropDown';
import { LocationIcon, CalendarIcon, SearchIcon, BellIcon } from './Icon';

// Mock data for the dropdown preview
const mockNotifications = [
    { id: 1, message: 'New booking pending review.', time: '10:30 AM', category: 'Today' },
    { id: 2, message: 'Delivery fee updated.', time: '9:00 AM', category: 'Today' },
    { id: 3, message: 'Refund processed.', time: '4:15 PM', category: 'Yesterday' },
];

// Component for the Notification Dropdown Preview
const NotificationsDropdown = ({ notifications, onOpenModal }) => {
    const todayNotifs = notifications.filter(n => n.category === 'Today').slice(0, 2);
    const yesterdayNotifs = notifications.filter(n => n.category === 'Yesterday').slice(0, 1);
    
    const handleSeeMoreClick = () => {
        onOpenModal(); // Call the function passed from Header/App to open the full modal
    };

    return (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-200 origin-top-right transition-transform">
            <div className="px-4 pt-2">
                <h3 className="font-bold text-gray-800">Today's Notifications</h3>
                <ul className="mt-2 space-y-2">
                    {todayNotifs.length > 0 ? todayNotifs.map(n => (
                        <li key={n.id} className="text-sm text-gray-700 border-b border-gray-100 pb-1">
                            {n.message}
                        </li>
                    )) : (
                        <li className="text-sm text-gray-500">No new alerts.</li>
                    )}
                </ul>
            </div>
            
            <div className="px-4 pt-4">
                <h3 className="font-bold text-gray-800">Yesterday</h3>
                <ul className="mt-2 space-y-2">
                    {yesterdayNotifs.map(n => (
                        <li key={n.id} className="text-sm text-gray-700 border-b border-gray-100 pb-1">
                            {n.message}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="border-t border-gray-200 pt-4">
                <button onClick={handleSeeMoreClick} className="w-full text-center text-sm font-semibold text-sky-600 hover:text-sky-700 py-1">
                    See All Notifications
                </button>
            </div>
        </div>
    );
};


// UPDATED: Now accepts onNotifClick (opens the dropdown) and onOpenNotifModal (opens the full modal)
const Header = ({ onLocationClick, onStartClick, onEndClick, onNotifClick, navigateTo, handleSearch, searchCriteria, onOpenNotifModal }) => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const bellRef = useRef(null);
    
    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (bellRef.current && !bellRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [bellRef]);
    
    const canSearch = searchCriteria.location && searchCriteria.startDate && searchCriteria.endDate;

    const formatDate = (dateTimeString) => {
        if (!dateTimeString) return null;
        const date = new Date(dateTimeString);
        if (isNaN(date.getTime())) {
            return null;
        }
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const handleBellClick = () => {
        setDropdownOpen(prev => !prev);
        // This keeps the dropdown open until clicked outside or 'See More' is clicked.
    };

    return (
        <header className="bg-gray-900 shadow-md sticky top-0 z-40">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <button onClick={() => navigateTo('list')} className="flex-shrink-0">
                    <img className="h-8 w-auto" src="/logorent.png" alt="RentEase" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x50/111827/a3e635?text=RentEase'; }}/>
                </button>
                
                <div className="hidden md:flex items-center bg-white border border-gray-200 rounded-full shadow-sm">
                    {/* Location, Start Date, End Date buttons remain the same */}
                    <button onClick={onLocationClick} className="flex items-center px-4 py-2 border-r border-gray-200 hover:bg-gray-50 rounded-l-full">
                        <LocationIcon />
                        <span className="text-sm font-medium text-gray-700">{searchCriteria.location || 'Location'}</span>
                    </button>

                    <button onClick={onStartClick} className="flex items-center px-4 py-2 border-r border-gray-200 hover:bg-gray-50">
                        <CalendarIcon />
                        <span className="text-sm font-medium text-gray-700">{formatDate(searchCriteria.startDate) || 'Trip Start'}</span>
                    </button>

                    <button onClick={onEndClick} className="flex items-center px-4 py-2 hover:bg-gray-50">
                        <CalendarIcon />
                        <span className="text-sm font-medium text-gray-700">{formatDate(searchCriteria.endDate) || 'Trip End'}</span>
                    </button>
                    
                    <button 
                        onClick={handleSearch} 
                        disabled={!canSearch}
                        className={`p-2 rounded-full m-1 transition-colors ${canSearch ? 'bg-sky-400 hover:bg-sky-500' : 'bg-gray-300 cursor-not-allowed'}`}
                    >
                        <SearchIcon />
                    </button>
                </div>
                
                <div className="flex items-center space-x-4">
                    {/* UPDATED: Notification Bell with Dropdown Logic */}
                    <div className="relative" ref={bellRef}>
                        <button onClick={handleBellClick} className="p-2 rounded-full hover:bg-gray-700 relative">
                            <BellIcon />
                            {mockNotifications.length > 0 && <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-gray-900"></span>}
                        </button>
                        
                        {isDropdownOpen && (
                            <NotificationsDropdown 
                                notifications={mockNotifications} 
                                // Call the prop from App.jsx to open the main modal
                                onOpenModal={onOpenNotifModal} 
                            />
                        )}
                    </div>
                    <ProfileMenuDropDown navigateTo={navigateTo} />
                </div>
            </div>
            {/* The full NotificationsModal is now managed in App.jsx */}
        </header>
    );
};

export default Header