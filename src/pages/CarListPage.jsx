import React, { useState, useMemo } from 'react';
import { mockCars } from '../data/mockData';
import CarCard from '../components/CarCard';

const CarListPage = ({ onSelectCar, searchCriteria, onClearSearch, bookings }) => {

    const [activeFilter, setActiveFilter] = useState('All Cars');
    const filters = ['All Cars', 'Popular', 'Small Car', 'Large Car', 'Exclusive Car'];

    const calculateDays = (start, end) => {
        if (!start || !end) return 0;
        const startDate = new Date(start);
        const endDate = new Date(end);
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return 0;
        const diffTime = Math.abs(endDate - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays === 0 ? 1 : diffDays;
    };

    const tripDays = calculateDays(searchCriteria.startDate, searchCriteria.endDate);
    const hasSearched = searchCriteria.location && searchCriteria.startDate && searchCriteria.endDate;

    const searchFilteredCars = useMemo(() => {
        if (!hasSearched) return [];

        const searchStartDate = new Date(searchCriteria.startDate);
        const searchEndDate = new Date(searchCriteria.endDate);

        const locationFiltered = mockCars.filter(car => car.location === searchCriteria.location);

        const availableCars = locationFiltered.filter(car => {
            const isUnavailable = bookings.some(booking => {
                if (booking.carId !== car.id || ['Cancelled', 'Completed'].includes(booking.status)) {
                    return false;
                }
                const bookingStartDate = new Date(booking.startDate);
                const bookingEndDate = new Date(booking.endDate);
                return searchStartDate < bookingEndDate && searchEndDate > bookingStartDate;
            });
            return !isUnavailable;
        });
        return availableCars;
    }, [searchCriteria, hasSearched, bookings]);

    // UPDATED: Logic for the 'Popular' tab ensures proper descending sort
    const tabFilteredCars = useMemo(() => {
        switch (activeFilter) {
            case 'All Cars':
                return mockCars;
            case 'Popular':
                // Filter for cars with one or more reviews, and sort them by rating (highest first)
                return [...mockCars]
                    .filter(car => car.reviews > 0)
                    // The sorting is explicitly performed by subtracting b from a.
                    // If b.rating (e.g., 4.9) is higher than a.rating (e.g., 4.6), the result is positive, sorting b first.
                    .sort((a, b) => b.rating - a.rating);
            case 'Small Car':
                return mockCars.filter(car => car.type === 'Small Car');
            case 'Large Car':
                return mockCars.filter(car => car.type === 'Large Car');
            case 'Exclusive Car':
                return mockCars.filter(car => car.type === 'Exclusive Car');
            default:
                return mockCars;
        }
    }, [activeFilter]);

    const carsToDisplay = hasSearched ? searchFilteredCars : tabFilteredCars;

    return (
        <main className="container mx-auto px-4 py-8">
            {hasSearched ? (
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Results for {searchCriteria.location}
                    </h2>
                    <button onClick={onClearSearch} className="text-sm font-semibold text-sky-600 hover:underline">
                        Clear Search & Show All
                    </button>
                </div>
            ) : (
                <div className="mb-8 border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {filters.map(filter => (
                            <button key={filter} onClick={() => setActiveFilter(filter)} className={`${ activeFilter === filter ? 'border-sky-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300' } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}>
                                {filter}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
            
            {carsToDisplay.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {carsToDisplay.map(car => (
                        <CarCard 
                            key={car.id} 
                            car={car} 
                            onSelect={onSelectCar} 
                            tripDays={hasSearched ? tripDays : 0}
                            totalAmount={hasSearched ? car.price * tripDays : 0}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 bg-white rounded-lg shadow-md">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">
                        {hasSearched ? 'No cars found for your search' : 'No cars in this category'}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {hasSearched ? 'Try adjusting your dates or location.' : 'Please select a different car type.'}
                    </p>
                </div>
            )}
        </main>
    );
};

export default CarListPage;