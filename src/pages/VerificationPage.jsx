import React, { useState } from 'react';
import { Modal } from '../components/Modal'; // Assuming Modal is in this path

const VerificationPage = ({ navigateTo, onSubmission }) => {
    // State to control the visibility of the confirmation modal
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this is where you would upload the files to a server.
        // For now, we'll just trigger the confirmation flow.
        onSubmission(); // This function from App.jsx will set the status to "Pending"
        setIsSubmitted(true); // This shows our success modal
    };

    const handleCloseModal = () => {
        setIsSubmitted(false);
        navigateTo('account'); // Go back to the account page
    };

    return (
        <main className="container mx-auto px-4 py-8 max-w-2xl">
            {/* --- MODAL FOR SUBMISSION CONFIRMATION --- */}
            <Modal isOpen={isSubmitted} onClose={handleCloseModal}>
                <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-sky-100">
                        <svg className="h-6 w-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">Submission Received!</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500">Thank you for submitting your documents. The RentEase team will review them and update your status within 1-2 business days.</p>
                    </div>
                    <div className="mt-4">
                        <button onClick={handleCloseModal} className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded">
                            Back to Account
                        </button>
                    </div>
                </div>
            </Modal>

            <button onClick={() => navigateTo('account')} className="mb-6 text-sky-600 hover:text-sky-800 font-semibold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to Account
            </button>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Account Verification</h1>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Personal Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Full Legal Name" className="form-input" required />
                            <input type="date" className="form-input" required />
                        </div>
                        <textarea placeholder="Full Address" rows="3" className="form-input mt-6" required></textarea>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Government-Issued ID</h3>
                        <p className="text-sm text-gray-500 mb-4">Please upload a clear photo of a valid ID (e.g., Passport, UMID, National ID).</p>
                        <input type="file" className="form-input" accept="image/*" required />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Driver's License</h3>
                        <p className="text-sm text-gray-500 mb-4">Please upload a clear photo of the front of your driver's license.</p>
                        <input type="file" className="form-input" accept="image/*" required />
                    </div>
                    {/* --- NEW SELFIE UPLOAD SECTION --- */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Selfie Verification</h3>
                        <p className="text-sm text-gray-500 mb-4">Please upload a clear selfie holding your Government-Issued ID to help us confirm your identity.</p>
                        <input type="file" className="form-input" accept="image/*" required />
                    </div>
                    <div className="flex justify-end pt-4">
                        <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg">
                            Submit for Verification
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default VerificationPage;