// src/pages/HostCarPage.jsx
import React, { useState } from 'react';

const HostCarPage = () => {
    const [features, setFeatures] = useState([]); 
    const [currentFeature, setCurrentFeature] = useState(''); 
    const [rules, setRules] = useState([]); 
    const [currentRule, setCurrentRule] = useState('');

    const handleAddFeature = (e) => { 
        if (e.key === 'Enter' && currentFeature.trim()) { 
            e.preventDefault(); 
            if (!features.includes(currentFeature.trim())) { 
                setFeatures([...features, currentFeature.trim()]); 
            } 
            setCurrentFeature(''); 
        } 
    };
    
    const handleAddRule = (e) => { 
        if (e.key === 'Enter' && currentRule.trim()) { 
            e.preventDefault(); 
            if (!rules.includes(currentRule.trim())) { 
                setRules([...rules, currentRule.trim()]); 
            } 
            setCurrentRule(''); 
        } 
    };

    return (
        <main className="container mx-auto px-4 py-8 max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Host Your Car</h1>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <form className="space-y-8">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-200">Car Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Make (e.g., Toyota)" className="form-input"/>
                            <input type="text" placeholder="Model (e.g., Vios)" className="form-input"/>
                            <input type="number" placeholder="Year (e.g., 2023)" className="form-input"/>
                            <input type="text" placeholder="License Plate" className="form-input"/>
                            <select className="form-input">
                                <option value="">Select Coding Day</option>
                                <option>Monday</option><option>Tuesday</option><option>Wednesday</option><option>Thursday</option><option>Friday</option>
                            </select>
                            <input type="tel" placeholder="Your Contact Number" className="form-input"/>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-200">Listing Details</h3>
                        <textarea placeholder="Describe your car..." rows="4" className="form-input"></textarea>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-200">Car Features</h3>
                        <div className="flex flex-wrap gap-2 mb-2">{features.map((feature, index) => ( <div key={index} className="bg-sky-200 text-sky-800 px-2 py-1 rounded-full flex items-center text-sm">{feature}<button type="button" onClick={() => setFeatures(features.filter(f => f !== feature))} className="ml-2 text-sky-800 hover:text-sky-900 font-bold">×</button></div> ))}</div>
                        <input type="text" value={currentFeature} onChange={(e) => setCurrentFeature(e.target.value)} onKeyDown={handleAddFeature} placeholder="Add a feature and press Enter" className="form-input"/>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-200">Car Rules</h3>
                        <div className="flex flex-wrap gap-2 mb-2">{rules.map((rule, index) => ( <div key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full flex items-center text-sm">{rule}<button type="button" onClick={() => setRules(rules.filter(r => r !== rule))} className="ml-2 text-gray-800 hover:text-gray-900 font-bold">×</button></div> ))}</div>
                        <input type="text" value={currentRule} onChange={(e) => setCurrentRule(e.target.value)} onKeyDown={handleAddRule} placeholder="Add a rule and press Enter" className="form-input"/>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-200">Upload Photos</h3>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                <p className="text-sm text-gray-600">Drag and drop or <button type="button" className="font-medium text-sky-600 hover:text-sky-500">click to browse</button></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-200">Pricing</h3>
                        <div className="flex items-center form-input p-0 focus-within:ring-0 focus-within:border-gray-300">
                           <span className="pl-3 pr-2 text-gray-500">Php / day</span>
                           <input type="number" placeholder="0.00" className="flex-grow p-2 border-0 focus:ring-0 w-full"/>
                        </div>
                    </div>
                    <div className="flex justify-end pt-4">
                        <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-lg">
                            Submit Listing
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default HostCarPage;