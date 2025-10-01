// src/pages/AccountPage.jsx
import React from 'react';

// This component now receives 'navigateTo' and 'verificationStatus' from App.jsx
const AccountPage = ({ navigateTo, verificationStatus }) => {
    
    const statusInfo = {
        'Not Verified': {
            badgeColor: 'bg-red-100 text-red-800',
            text: 'Verify your account to increase trust and unlock all features.',
            button: <button onClick={() => navigateTo('verification')} className="mt-4 sm:mt-0 bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg">Get Verified</button>
        },
        'Pending': {
            badgeColor: 'bg-yellow-100 text-yellow-800',
            text: 'Your documents are under review. This may take 1-2 business days.',
            button: null
        },
        'Verified': {
            badgeColor: 'bg-green-100 text-green-800',
            text: 'Your account is trusted and verified. Thank you!',
            button: null
        }
    };

    const currentStatus = statusInfo[verificationStatus];

    return (
        <main className="container mx-auto px-4 py-8 max-w-2xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Account Settings</h1>

            {/* --- NEW VERIFICATION STATUS SECTION --- */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Verification Status</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                    <div>
                        <span className={`text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full ${currentStatus.badgeColor}`}>
                            {verificationStatus === 'Pending' ? 'Pending Review' : verificationStatus}
                        </span>
                        <p className="text-sm text-gray-600 mt-1 sm:mt-0">{currentStatus.text}</p>
                    </div>
                    {currentStatus.button}
                </div>
            </div>

            {/* --- EXISTING PROFILE INFORMATION SECTION --- */}
            <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Profile Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input type="text" defaultValue="Juan" className="mt-1 form-input"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text" defaultValue="Dela Cruz" className="mt-1 form-input"/>
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" defaultValue="juan.delacruz@example.com" className="mt-1 form-input"/>
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                            <input type="tel" defaultValue="+63 917 123 4567" className="mt-1 form-input"/>
                        </div>
                    </div>
                    <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Change Password</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Current Password</label>
                                <input type="password" placeholder="••••••••" className="mt-1 form-input"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">New Password</label>
                                <input type="password" placeholder="••••••••" className="mt-1 form-input"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-end">
                    <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-6 rounded-lg">
                        Save Changes
                    </button>
                </div>
            </div>
        </main>
    );
};

export default AccountPage;