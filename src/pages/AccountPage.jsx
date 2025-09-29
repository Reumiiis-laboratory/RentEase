// src/pages/AccountPage.jsx
import React from 'react';

const AccountPage = () => (
    <main className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Account Settings</h1>
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
                <div className="border-t pt-6 border-gray-200">
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
                <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-lg">
                    Save Changes
                </button>
            </div>
        </div>
    </main>
);

export default AccountPage;