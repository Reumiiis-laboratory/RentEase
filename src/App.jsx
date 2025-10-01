// src/App.jsx
import React, { useState } from 'react';

// Import Data
import { initialBookings } from './data/mockData';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import { Modal, LocationModal, DateTimePickerModal, NotificationsModal } from './components/Modal';

// Import Pages
import CarListPage from './pages/CarListPage';
import CarDetailPage from './pages/CarDetailPage';
import BookingPage from './pages/BookingPage';
import MyBookingsPage from './pages/MyBookingsPage';
import AccountPage from './pages/AccountPage';
import HostCarPage from './pages/HostCarPage';

export default function App() {
    const [page, setPage] = useState('list');
    const [selectedCar, setSelectedCar] = useState(null);
    const [bookings, setBookings] = useState(initialBookings);
    const [searchCriteria, setSearchCriteria] = useState({ location: '', startDate: '', endDate: '' });
    const [bookingDetails, setBookingDetails] = useState(null);
    const [isBookingConfirmed, setBookingConfirmed] = useState(false);
    
    // State for modals
    const [tempLocation, setTempLocation] = useState('');
    const [tempStartDate, setTempStartDate] = useState('');
    const [tempEndDate, setTempEndDate] = useState('');
    const [isLocationModalOpen, setLocationModalOpen] = useState(false);
    const [isStartPickerOpen, setStartPickerOpen] = useState(false);
    const [isEndPickerOpen, setEndPickerOpen] = useState(false);
    const [isNotificationsOpen, setNotificationsOpen] = useState(false);

    // Navigation and Action Handlers
    const navigateTo = (pageName) => { setPage(pageName); window.scrollTo(0, 0); };
    const handleSelectCar = (car) => { setSelectedCar(car); navigateTo('detail'); };
    const handleBackToList = () => { setSelectedCar(null); navigateTo('list'); };
    const handleSearch = () => { navigateTo('list'); };
    const handleStartBooking = (car, details) => { setSelectedCar(car); setBookingDetails(details); navigateTo('booking'); };
    
    const handleConfirmBooking = (newBookingData) => {
        const newBooking = { id: Date.now(), status: 'Upcoming', rating: null, ...newBookingData, };
        setBookings(prev => [newBooking, ...prev]);
        setBookingConfirmed(true);
    };

    const closeConfirmation = () => { setBookingConfirmed(false); navigateTo('bookings'); }
    
    // Modal Handlers
    const closeAllModals = () => { setLocationModalOpen(false); setStartPickerOpen(false); setEndPickerOpen(false); setNotificationsOpen(false); }
    const openLocationModal = () => { setTempLocation(searchCriteria.location); closeAllModals(); setLocationModalOpen(true); }
    const openStartPicker = () => { setTempStartDate(searchCriteria.startDate); closeAllModals(); setStartPickerOpen(true); }
    const openEndPicker = () => { setTempEndDate(searchCriteria.endDate); closeAllModals(); setEndPickerOpen(true); }
    const openNotifications = () => { closeAllModals(); setNotificationsOpen(true); }
    const confirmLocation = () => { setSearchCriteria(prev => ({...prev, location: tempLocation})); closeAllModals(); }
    const confirmStartDate = () => { setSearchCriteria(prev => ({...prev, startDate: tempStartDate})); closeAllModals(); }
    const confirmEndDate = () => { setSearchCriteria(prev => ({...prev, endDate: tempEndDate})); closeAllModals(); }

    const renderPage = () => {
        switch (page) {
            case 'detail': return <CarDetailPage car={selectedCar} onBack={handleBackToList} searchCriteria={searchCriteria} onStartBooking={handleStartBooking} />;
            case 'booking': return <BookingPage car={selectedCar} bookingDetails={bookingDetails} onBack={() => navigateTo('detail')} onConfirmBooking={handleConfirmBooking} />;
            case 'bookings': return <MyBookingsPage bookings={bookings} setBookings={setBookings} />;
            case 'account': return <AccountPage />;
            case 'host': return <HostCarPage />;
            case 'list': 
            default: 
                return <CarListPage onSelectCar={handleSelectCar} searchCriteria={searchCriteria} />;
        }
    };

    return (
        <div className="bg-gray-50 font-sans min-h-screen flex flex-col">
            <Header 
                onLocationClick={openLocationModal} 
                onStartClick={openStartPicker} 
                onEndClick={openEndPicker} 
                onNotifClick={openNotifications} 
                navigateTo={navigateTo} 
                handleSearch={handleSearch} 
                searchCriteria={searchCriteria} 
            />
            <div className="flex-grow">{renderPage()}</div>
            <Footer />

            {/* All Modals Rendered at the Top Level */}
            <LocationModal isOpen={isLocationModalOpen} onClose={() => setLocationModalOpen(false)} location={tempLocation} setLocation={setTempLocation} confirmAction={confirmLocation} />
            <DateTimePickerModal isOpen={isStartPickerOpen} onClose={() => setStartPickerOpen(false)} date={tempStartDate} setDate={setTempStartDate} title="Select Trip Start" confirmAction={confirmStartDate} />
            <DateTimePickerModal isOpen={isEndPickerOpen} onClose={() => setEndPickerOpen(false)} date={tempEndDate} setDate={setTempEndDate} title="Select Trip End" confirmAction={confirmEndDate} />
            <NotificationsModal isOpen={isNotificationsOpen} onClose={() => setNotificationsOpen(false)} />
            
            <Modal isOpen={isBookingConfirmed} onClose={closeConfirmation}>
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">Booking Confirmed!</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500">Your car has been booked successfully. You can view the details in 'My Bookings'.</p>
                    </div>
                    <div className="mt-4">
                        <button onClick={closeConfirmation} className="w-full bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded">
                            View My Bookings
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}