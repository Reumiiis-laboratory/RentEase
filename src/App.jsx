import React, { useState, useEffect } from 'react';

// Import Data
import { initialBookings, initialHostBookings } from './data/mockData';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';
import LocationModal from './components/LocationModal';
import DateTimePickerModal from './components/DateTimePickerModal';
import { Modal } from './components/Modal';

// Import Pages
import CarListPage from './pages/CarListPage';
import CarDetailPage from './pages/CarDetailPage';
import BookingPage from './pages/BookingPage';
import MyBookingsPage from './pages/MyBookingsPage';
import AccountPage from './pages/AccountPage';
import HostCarPage from './pages/HostCarPage';
import VerificationPage from './pages/VerificationPage';
import MyListingsPage from './pages/MyListingsPage';

export default function App() {
    const [page, setPage] = useState('list');
    const [selectedCar, setSelectedCar] = useState(null);

    // --- Search State ---
    const [searchCriteria, setSearchCriteria] = useState({ location: '', startDate: '', endDate: '' });
    const [activeSearch, setActiveSearch] = useState({ location: '', startDate: '', endDate: '' });
    
    // --- Booking & User State ---
    const [bookings, setBookings] = useState(initialBookings);
    const [hostBookings, setHostBookings] = useState(initialHostBookings);
    const [verificationStatus, setVerificationStatus] = useState('Not Verified');
    const [bookingDetails, setBookingDetails] = useState(null);
    const [isBookingConfirmed, setBookingConfirmed] = useState(false);
    const [isBookingErrorOpen, setBookingErrorOpen] = useState(false);
    const [isLocationModalOpen, setLocationModalOpen] = useState(false);
    const [isStartPickerOpen, setStartPickerOpen] = useState(false);
    const [isEndPickerOpen, setEndPickerOpen] = useState(false);

    // ADDED: State for the host submission confirmation modal
    const [isHostSubmissionModalOpen, setHostSubmissionModalOpen] = useState(false);

    // --- Booking Status Simulation (Runs every 10 seconds) ---
    useEffect(() => {
        const interval = setInterval(() => {
            setBookings(currentBookings => 
                currentBookings.map(booking => {
                    const now = new Date();
                    const startDate = new Date(booking.startDate);
                    const endDate = new Date(booking.endDate);
                    const createdAt = new Date(booking.createdAt || 0);

                    // Upcoming -> Pending (after 30 seconds for demo)
                    if (booking.status === 'Upcoming' && booking.createdAt && (now - createdAt) > 30000) {
                        return { ...booking, status: 'Pending' };
                    }
                    // Pending -> Ongoing (when start date arrives)
                    if (booking.status === 'Pending' && now >= startDate) {
                        return { ...booking, status: 'Ongoing' };
                    }
                    // Ongoing -> Completed (when end date arrives)
                    if (booking.status === 'Ongoing' && now >= endDate) {
                        return { ...booking, status: 'Completed' };
                    }
                    return booking;
                })
            );
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    // --- Handlers ---
    const navigateTo = (pageName) => { setPage(pageName); window.scrollTo(0, 0); };
    const handleSelectCar = (car) => { setSelectedCar(car); navigateTo('detail'); };
    const handleBackToList = () => { setSelectedCar(null); navigateTo('list'); };
    const handleSearch = () => { setActiveSearch(searchCriteria); navigateTo('list'); };
    const handleClearSearch = () => {
        const emptyCriteria = { location: '', startDate: '', endDate: '' };
        setSearchCriteria(emptyCriteria);
        setActiveSearch(emptyCriteria);
    };

    const handleStartBooking = (car, details) => {
        // Validation check before proceeding to the booking page
        if (!details.location || !details.startDate || !details.endDate || (details.deliveryOption === 'delivery' && !details.finalAddress)) {
            setBookingErrorOpen(true);
            return;
        }
        setSelectedCar(car);
        setBookingDetails(details);
        navigateTo('booking');
    };

    const handleConfirmBooking = (newBookingData) => {
        const newBooking = { id: Date.now(), carId: selectedCar.id, status: 'Upcoming', rating: null, comment: null, createdAt: new Date(), ...newBookingData };
        setBookings(prev => [newBooking, ...prev]);
        setBookingConfirmed(true);
    };

    const closeConfirmation = () => { setBookingConfirmed(false); navigateTo('bookings'); };
    const handleVerificationSubmit = () => { setVerificationStatus('Pending'); };
    const handleCancelBooking = (bookingId) => { setBookings(bookings.map(b => b.id === bookingId ? { ...b, status: 'Cancelled' } : b)); };
    const handleSubmitReview = (bookingId, rating, comment) => { setBookings(bookings.map(b => b.id === bookingId ? { ...b, rating, comment } : b)); };
    
    // Modal confirmation handlers
    const handleConfirmLocation = (locationName) => { setSearchCriteria(prev => ({ ...prev, location: locationName })); setLocationModalOpen(false); };
    const confirmStartDate = (date) => { setSearchCriteria(prev => ({ ...prev, startDate: date })); setStartPickerOpen(false); };
    const confirmEndDate = (date) => { setSearchCriteria(prev => ({ ...prev, endDate: date })); setEndPickerOpen(false); };

    // Handler for the new host submission modal
    const handleHostCarSubmit = () => {
        setHostSubmissionModalOpen(true);
    };
    const closeHostSubmissionModal = () => {
        setHostSubmissionModalOpen(false);
        navigateTo('list'); // Navigate to the main list after closing
    };

    const renderPage = () => {
        switch (page) {
            case 'detail':
                return <CarDetailPage car={selectedCar} onBack={handleBackToList} searchCriteria={activeSearch} onStartBooking={handleStartBooking} />;
            case 'booking':
                return <BookingPage car={selectedCar} bookingDetails={bookingDetails} onBack={() => navigateTo('detail')} onConfirmBooking={handleConfirmBooking} />;
            case 'bookings':
                return <MyBookingsPage bookings={bookings} onCancelBooking={handleCancelBooking} onSubmitReview={handleSubmitReview} />;
            case 'account':
                return <AccountPage navigateTo={navigateTo} verificationStatus={verificationStatus} />;
            case 'host':
                return <HostCarPage onHostSubmit={handleHostCarSubmit} />;
            case 'verification':
                return <VerificationPage navigateTo={navigateTo} onSubmission={handleVerificationSubmit} />;
            case 'my-listings':
                return <MyListingsPage hostBookings={hostBookings} setHostBookings={setHostBookings} />;
            case 'list': 
            default: 
                return <CarListPage onSelectCar={handleSelectCar} searchCriteria={activeSearch} onClearSearch={handleClearSearch} bookings={bookings} />;
        }
    };

    return (
        <div className="bg-gray-50 font-sans min-h-screen flex flex-col">
            <Header 
                navigateTo={navigateTo} 
                handleSearch={handleSearch} 
                searchCriteria={searchCriteria}
                onLocationClick={() => setLocationModalOpen(true)}
                onStartClick={() => setStartPickerOpen(true)}
                onEndClick={() => setEndPickerOpen(true)}
            />
            <div className="flex-grow">{renderPage()}</div>
            <Footer />

            <LocationModal isOpen={isLocationModalOpen} onClose={() => setLocationModalOpen(false)} onSelectLocation={handleConfirmLocation} />
            <DateTimePickerModal isOpen={isStartPickerOpen} onClose={() => setStartPickerOpen(false)} date={searchCriteria.startDate} title="Select Trip Start" confirmAction={confirmStartDate} />
            <DateTimePickerModal isOpen={isEndPickerOpen} onClose={() => setEndPickerOpen(false)} date={searchCriteria.endDate} title="Select Trip End" confirmAction={confirmEndDate} />
            
            <Modal isOpen={isBookingConfirmed} onClose={closeConfirmation}>
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">Thank You! Booking Confirmed</h3>
                    <div className="mt-2 px-7 py-3"><p className="text-sm text-gray-500">Your car has been booked. You will be redirected to your bookings page.</p></div>
                    <div className="mt-4"><button onClick={closeConfirmation} className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">View My Bookings</button></div>
                </div>
            </Modal>
            
            <Modal isOpen={isBookingErrorOpen} onClose={() => setBookingErrorOpen(false)}>
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                        <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mt-4">Incomplete Information</h3>
                    <p className="mt-2 text-sm text-gray-500">Please provide all booking details before proceeding.</p>
                    <div className="mt-4"><button onClick={() => setBookingErrorOpen(false)} className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">OK</button></div>
                </div>
            </Modal>

            {/* ADDED: New modal for host submission confirmation */}
            <Modal isOpen={isHostSubmissionModalOpen} onClose={closeHostSubmissionModal}>
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">Thank You For Submitting!</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500">You have completed the first screening. Please wait for our team to contact you for the next procedure for the second screening.</p>
                    </div>
                    <div className="mt-4">
                        <button onClick={closeHostSubmissionModal} className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">
                            OK
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}