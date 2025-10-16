import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { rentEaseBranches } from '../data/mockData';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '0.5rem',
};

const LocationModal = ({ isOpen, onClose, onSelectLocation }) => {
  const [activeBranch, setActiveBranch] = useState(rentEaseBranches[0]);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY"
  });

  const handleSelect = () => {
    onSelectLocation(activeBranch.name);
    onClose();
  };

  if (!isOpen) return null;

  return (
    // UPDATED: Changed background to be a blurred overlay
    <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-3xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose a Branch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            {rentEaseBranches.map((branch, index) => (
              <button
                key={branch.name}
                onClick={() => setActiveBranch(branch)}
                className={`w-full text-left p-4 rounded-lg transition-colors ${activeBranch.name === branch.name ? 'bg-sky-100 text-sky-700 font-bold' : 'hover:bg-gray-100'}`}
              >
                {branch.name} {index === 0 && <span className="text-sm font-normal">(Main Branch)</span>}
              </button>
            ))}
          </div>

          <div>
            <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={activeBranch.location}
                  zoom={15}
                  options={{ disableDefaultUI: true, zoomControl: true }}
                >
                  <Marker position={activeBranch.location} />
                </GoogleMap>
              ) : <div>Loading Map...</div>}
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-bold text-lg">{activeBranch.name} {rentEaseBranches.findIndex(b => b.name === activeBranch.name) === 0 && "(Main Branch)"}</h3>
              <p className="text-gray-500">{activeBranch.address}</p>
            </div>
            <button
              onClick={handleSelect}
              className="mt-6 w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded-lg text-lg"
            >
              Select Branch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
