// src/components/HowItWorks.jsx
import React from 'react';

export default function HowItWorks() {
  return (
    <section className="how-it-works section bg-gray-50">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-8">Rent a Ride in 3 Easy Steps</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="step p-6 bg-white rounded shadow">
            <div className="icon mb-4">📍</div>
            <h3 className="font-semibold mb-2">Choose Location</h3>
            <p>Select your location and find your best ride.</p>
          </div>
          <div className="step p-6 bg-white rounded shadow">
            <div className="icon mb-4">📅</div>
            <h3 className="font-semibold mb-2">Pick-up Date</h3>
            <p>Set your pick-up date and time to book your car.</p>
          </div>
          <div className="step p-6 bg-white rounded shadow">
            <div className="icon mb-4">🚗</div>
            <h3 className="font-semibold mb-2">Book Your Car</h3>
            <p>Book your car and we’ll deliver it to you.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-6">Why <span className="text-primary">RentEase</span> is Your Perfect Road Trip Partner</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-4 bg-green-50 rounded">
            <h4 className="font-semibold mb-2">No Hidden Fees</h4>
            <p>We believe in transparency. That’s why our prices are clear and up-front, with no hidden fees.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded">
            <h4 className="font-semibold mb-2">100% Guaranteed</h4>
            <p>Our comprehensive insurance options give you peace of mind, whether for accidents or vehicle issues.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded">
            <h4 className="font-semibold mb-2">Unwavering Service</h4>
            <p>We’re passionate about creating a seamless and enjoyable experience for every driver.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded">
            <h4 className="font-semibold mb-2">Convenience is Ours</h4>
            <p>Skip the lines and paperwork! Our user-friendly website makes it quick to book your ride.</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions (FAQ)</h3>
        <div className="faq space-y-4 text-left max-w-2xl mx-auto">
          <details className="p-4 border rounded">
            <summary className="cursor-pointer font-semibold">Eco Friendly To Drive</summary>
            <p className="mt-2 text-gray-600">Learn more about our eco-friendly fleet options and sustainability efforts.</p>
          </details>
          <details className="p-4 border rounded">
            <summary className="cursor-pointer font-semibold">How Old Do You Have To Be To Rent A Car?</summary>
            <p className="mt-2 text-gray-600">Minimum age requirements vary per vehicle type and insurance rules.</p>
          </details>
          <details className="p-4 border rounded">
            <summary className="cursor-pointer font-semibold">Do You Rent To International Visitors?</summary>
            <p className="mt-2 text-gray-600">Yes! We accept valid international licenses and documentation.</p>
          </details>
          <details className="p-4 border rounded">
            <summary className="cursor-pointer font-semibold">If Insurance Missing Need To Provide Other Proof</summary>
            <p className="mt-2 text-gray-600">Additional documentation may be required if insurance proof is missing.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
