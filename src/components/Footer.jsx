import React from 'react';

const Footer = () => (
    <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            
            {/* Left Section: Logo/Copyright and Social Icons */}
            <div className="flex flex-col space-y-4 md:space-y-6">
                <p className="font-semibold text-lg">RENTEASE.PH © 2025</p>
            </div>

            {/* Right Section: Legal Links (New) */}
            {/* The container uses md:divide-x and md:divide-gray-600 to add the | between links */}
            <div className="text-sm flex flex-col space-y-2 md:space-y-0 md:flex-row md:divide-x md:divide-gray-600">
                {/* Each link uses md:px-3 to provide horizontal space for the divider */}
                <a href="#" className="hover:text-sky-400 transition-colors md:px-3">Platform User Agreement</a>
                <a href="#" className="hover:text-sky-400 transition-colors md:px-3">Vehicle Lease Agreement</a>
                <a href="#" className="hover:text-sky-400 transition-colors md:px-3">Insurance Policy</a>
                <a href="#" className="hover:text-sky-400 transition-colors md:px-3">Key Policies</a>
                <a href="#" className="hover:text-sky-400 transition-colors md:px-3">Privacy Policy</a>
            </div>
        </div>
    </footer>
);

export default Footer;