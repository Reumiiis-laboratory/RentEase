// src/pages/CarListPage.jsx
import React, { useState, useMemo } from 'react';
import { mockCars } from '../data/mockData';
import CarCard from '../components/CarCard';

const CarListPage = ({ onSelectCar, searchCriteria }) => {
    // State to keep track of the currently selected filter tab
    const [activeFilter, setActiveFilter] = useState('All Cars');
    
    // An array of the available filter categories for the navigation tabs
    const filters = ['All Cars', 'Small Car', 'Large Car', 'Exclusive Car'];

    // useMemo caches the filtered list. It only recalculates when a dependency changes.
    const filteredCars = useMemo(() => {
        if (activeFilter === 'All Cars') {
            return mockCars; // If 'All Cars' is selected, return the full list
        }
        // Otherwise, filter the list to only include cars whose type matches the active filter
        return mockCars.filter(car => car.type === activeFilter);
    }, [activeFilter, mockCars]); // Dependencies: recalculates if the filter or the car data changes.

    return (
        // This <main> element is now styled as a "floating" white panel
        <main className="container mx-auto px-4 py-8">
            {/* A banner that appears only when a search location is provided */}
            {searchCriteria.location && (
                <div className="mb-6 p-4 bg-lime-100 border-l-4 border-lime-500 rounded-r-lg">
                    <p className="font-semibold text-lime-800">Showing results for "{searchCriteria.location}"</p>
                </div>
            )}
            
            {/* The filter navigation tabs with a softer bottom border */}
            <div className="mb-8 border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {filters.map(filter => (
                        <button key={filter} onClick={() => setActiveFilter(filter)} className={`${ activeFilter === filter ? 'border-lime-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300' } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}>
                            {filter}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Conditional rendering: Show the grid of cars OR a "no results" message */}
            {filteredCars.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredCars.map(car => (
                        <CarCard key={car.id} car={car} onSelect={onSelectCar} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No Cars Found</h3>
                    <p className="mt-1 text-sm text-gray-500">No cars match the selected filter. Try a different category.</p>
                </div>
            )}
        </main>
    );
};

export default CarListPage;