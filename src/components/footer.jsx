import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">RentEase</h3>
            <p className="text-gray-300 mb-4">
              Your trusted vehicle rental platform for tourists and commuters in the Philippines. Affordable, reliable, and easy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#vehicles" className="text-gray-300 hover:text-white">Car Rental</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Long-Term Lease</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Business Fleet</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="#help" className="text-gray-300 hover:text-white">Help Center</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>
            &copy; 2025 RentEase. All rights reserved. | Technological Institute of the Philippines | Manila Campus
          </p>
          <p className="mt-2 text-sm">
            A Website-Based Vehicle Rental System for Tourists and Filipino Commuters
          </p>
        </div>
      </div>
    </footer>
  );
}
