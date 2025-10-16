// This array defines the 5 branches for the location filter modal and the map.
export const rentEaseBranches = [
  { name: 'Manila City', location: { lat: 14.5995, lng: 120.9842 }, address: '123 Rizal Ave, Manila' },
  { name: 'Quezon City', location: { lat: 14.6760, lng: 121.0437 }, address: '456 Commonwealth Ave, QC' },
  { name: 'Makati City', location: { lat: 14.5547, lng: 121.0244 }, address: '789 Ayala Ave, Makati' },
  { name: 'Pasig City', location: { lat: 14.5764, lng: 121.0851 }, address: '101 Ortigas Ave, Pasig' },
  { name: 'Taguig City', location: { lat: 14.551, lng: 121.0509 }, address: '212 McKinley Pkwy, BGC' },
];

// This array contains all the car details.
export const mockCars = [
  {
    id: 1,
    name: 'All New Rush',
    type: 'Popular',
    price: 1500.00,
    rating: 4.8,
    // UPDATED: This now matches the length of reviewsList
    reviews: 2, 
    location: 'Manila City',
    coding: 'Wednesday',
    seating: 7,
    transmission: 'Automatic',
    icon: 'suv',
    fuelType: 'Gasoline',
    images: [
        { type: 'Exterior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=Rush+Exterior' },
        { type: 'Interior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=Rush+Interior' },
        { type: 'Exterior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=Rush+Side+View' },
    ],
    owner: {
      name: 'John Doe',
      avatar: 'https://placehold.co/100x100/ce0f2fe/4a5568?text=JD',
      joined: '2021',
      contactNumber: '+63 917 123 4567'
    },
    description: 'A reliable and spacious SUV perfect for family trips or city driving. Features great fuel economy and a comfortable interior.',
    features: ['Air Conditioning', 'Automatic Transmission', 'GPS Navigation', 'Bluetooth', 'USB Input'],
    rules: ['No smoking', 'Pets allowed on request', 'Minimum age: 21', 'Valid driver\'s license required'],
    reviewsList: [
        { reviewerName: 'Maria S.', rating: 5, comment: "Excellent car for a family trip to Tagaytay. Very clean and well-maintained. The owner was also very accommodating.", date: 'October 15, 2025' },
        { reviewerName: 'Robert L.', rating: 4, comment: "Good value for money. The car was fuel-efficient as described. A bit of a delay during pickup, but overall a great experience.", date: 'September 28, 2025' }
    ]
  },
  {
    id: 2,
    name: 'Compact Hatchback',
    type: 'Small Car',
    price: 1200.00,
    rating: 4.6,
    // UPDATED: This now matches the length of reviewsList
    reviews: 1,
    location: 'Quezon City',
    coding: 'Monday',
    seating: 5,
    transmission: 'Manual',
    icon: 'hatchback',
    fuelType: 'Gasoline',
    images: [
        { type: 'Exterior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=Hatchback+Exterior' },
        { type: 'Interior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=Hatchback+Interior' },
    ],
    owner: {
      name: 'Jane Smith',
      avatar: 'https://placehold.co/100x100/e0f2fe/4a5568?text=JS',
      joined: '2022',
      contactNumber: '+63 918 234 5678'
    },
    description: 'Easy to park and maneuver, this small car is ideal for navigating busy city streets. It\'s fuel-efficient and surprisingly roomy inside.',
    features: ['Air Conditioning', 'Manual Transmission', 'Bluetooth'],
    rules: ['No smoking', 'No pets', 'Return with full tank'],
    reviewsList: [
        { reviewerName: 'Chris P.', rating: 5, comment: "Perfect for city driving. Easy to park in tight spots in Makati. Will rent again!", date: 'October 12, 2025' }
    ]
  },
  {
    id: 3,
    name: 'Luxury Sedan',
    type: 'Exclusive Car',
    price: 3500.00,
    rating: 4.9,
    // UPDATED: This now matches the length of reviewsList
    reviews: 1,
    location: 'Makati City',
    coding: 'Friday',
    seating: 5,
    transmission: 'Automatic',
    icon: 'sedan',
    fuelType: 'Premium Gasoline',
    images: [
        { type: 'Exterior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=Sedan+Exterior' },
        { type: 'Interior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=Sedan+Interior' },
    ],
    owner: {
      name: 'Robert Brown',
      avatar: 'https://placehold.co/100x100/e0f2fe/4a5568?text=RB',
      joined: '2020',
      contactNumber: '+63 919 345 6789'
    },
    description: 'Experience true comfort and performance with this exclusive luxury sedan. Perfect for business trips or making a statement.',
    features: ['Leather Seats', 'Premium Sound System', 'Sunroof', 'Advanced Safety Features'],
    rules: ['No food or drinks', 'Treat with care', 'Professional drivers only'],
    reviewsList: [
        { reviewerName: 'Anna B.', rating: 5, comment: "Used this for a business meeting and it was perfect. Very classy and comfortable ride.", date: 'October 10, 2025' }
    ]
  },
  {
    id: 4,
    name: 'Family Van',
    type: 'Large Car',
    price: 2500.00,
    rating: 4.7,
    reviews: 0, // UPDATED
    location: 'Pasig City',
    coding: 'Tuesday',
    seating: 8,
    transmission: 'Automatic',
    icon: 'van',
    fuelType: 'Diesel',
    images: [
        { type: 'Exterior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=Van+Exterior' },
        { type: 'Interior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=Van+Interior' },
    ],
    owner: {
      name: 'Emily White',
      avatar: 'https://placehold.co/100x100/e0f2fe/4a5568?text=EW',
      joined: '2021',
      contactNumber: '+63 920 456 7890'
    },
    description: 'With seating for the whole family and plenty of cargo space, this large van is the ultimate road trip vehicle.',
    features: ['7-Seater', 'Rear Entertainment System', 'Spacious Cargo', 'Sliding Doors'],
    rules: ['Clean up after use', 'Long trips preferred'],
    reviewsList: []
  },
  { 
    id: 5, 
    name: 'All New Rush (2)', 
    type: 'Popular', 
    price: 1550.00, 
    rating: 4.8, 
    reviews: 0, // UPDATED
    location: 'Manila City',
    coding: 'Wednesday', 
    seating: 7,
    transmission: 'Automatic',
    icon: 'suv',
    fuelType: 'Gasoline',
    images: [
        { type: 'Exterior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=Rush+2+Exterior' },
        { type: 'Interior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=Rush+2+Interior' },
    ],
    owner: { name: 'John Doe', avatar: 'https://placehold.co/100x100/cbd5e0/4a5568?text=JD', joined: '2021', contactNumber: '+63 917 123 4567' },
    description: 'Another reliable and spacious SUV perfect for family trips or city driving. Great for larger groups needing similar vehicles.',
    features: ['Air Conditioning', 'Automatic Transmission', 'GPS Navigation', 'Bluetooth', 'USB Input'],
    rules: ['No smoking', 'Pets allowed on request', 'Minimum age: 21', 'Valid driver\'s license required'],
    reviewsList: []
  },
  { 
    id: 6, 
    name: 'Eco-Friendly Hybrid', 
    type: 'Small Car', 
    price: 1800.00, 
    rating: 4.9, 
    reviews: 0, // UPDATED
    location: 'Taguig City',
    coding: 'Thursday', 
    seating: 5,
    transmission: 'Automatic',
    icon: 'sedan',
    fuelType: 'Hybrid',
    images: [
        { type: 'Exterior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=Hybrid+Exterior' },
        { type: 'Interior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=Hybrid+Interior' },
    ],
    owner: { name: 'Jane Smith', avatar: 'https://placehold.co/100x100/cbd5e0/4a5568?text=JS', joined: '2022', contactNumber: '+63 918 234 5678' },
    description: 'Save on fuel with this modern hybrid. Perfect for the eco-conscious driver navigating the city.',
    features: ['Automatic Transmission', 'Great Fuel Economy', 'Bluetooth', 'USB Input'],
    rules: ['No smoking', 'Return with at least 50% charge'],
    reviewsList: []
  },
  { 
    id: 7, 
    name: 'Off-Road 4x4', 
    type: 'Large Car', 
    price: 2800.00, 
    rating: 4.6, 
    reviews: 0, // UPDATED
    location: 'Quezon City',
    coding: 'Monday', 
    seating: 5,
    transmission: 'Automatic',
    icon: 'suv',
    fuelType: 'Diesel',
    images: [
        { type: 'Exterior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=4x4+Exterior' },
        { type: 'Interior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=4x4+Interior' },
    ],
    owner: { name: 'Robert Brown', avatar: 'https://placehold.co/100x100/cbd5e0/4a5568?text=RB', joined: '2020', contactNumber: '+63 919 345 6789' },
    description: 'Ready for an adventure? This 4x4 is built to handle tougher roads and long-distance travel.',
    features: ['4-Wheel Drive', 'High Ground Clearance', 'All-Terrain Tires'],
    rules: ['No extreme off-roading', 'Renter responsible for trail damage'],
    reviewsList: []
  },
  { 
    id: 8, 
    name: 'Convertible Roadster', 
    type: 'Exclusive Car', 
    price: 4500.00, 
    rating: 4.9, 
    reviews: 0, // UPDATED
    location: 'Makati City',
    coding: 'Friday', 
    seating: 2,
    transmission: 'Automatic',
    icon: 'convertible',
    fuelType: 'Premium Gasoline',
    images: [
        { type: 'Exterior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=Convertible+Exterior' },
        { type: 'Interior', url: 'https://placehold.co/800x600/e0f2fe/4a5568?text=Convertible+Interior' },
    ],
    owner: { name: 'Emily White', avatar: 'https://placehold.co/100x100/cbd5e0/4a5568?text=EW', joined: '2021', contactNumber: '+63 920 456 7890' },
    description: 'Enjoy the drive with the top down. A stylish and fun convertible perfect for a weekend getaway.',
    features: ['Convertible Top', 'Leather Seats', 'Premium Audio'],
    rules: ['Top must be closed when parked', 'No smoking'],
    reviewsList: []
  },
];


export const rentalPolicy = {
  minDuration: { value: 1, unit: 'day' },
  maxDuration: { value: 1, unit: 'month' },
  deliveryFee: 200.00
};

export const initialBookings = [
    { id: 1, carId: 3, carName: 'Luxury Sedan', startDate: '2025-10-20T10:00', endDate: '2025-10-22T10:00', totalPrice: 7200.00, status: 'Upcoming', images: [{url: 'https://placehold.co/400x300/e0f2fe/4a5568?text=Luxury+Sedan'}], rating: null, comment: null, deliveryOption: 'pickup', finalAddress: '789 Ayala Ave, Makati' },
    { id: 2, carId: 1, carName: 'All New Rush', startDate: '2025-11-01T14:00', endDate: '2025-11-03T14:00', totalPrice: 3200.00, status: 'Pending', images: [{url: 'https://placehold.co/400x300/e0f2fe/4a5568?text=All+New+Rush'}], rating: null, comment: null, deliveryOption: 'delivery', finalAddress: 'My Custom Home Address' },
    { id: 3, carId: 7, carName: 'Off-Road 4x4', startDate: '2025-10-16T09:00', endDate: '2025-10-18T09:00', totalPrice: 5600.00, status: 'Ongoing', images: [{url: 'https://placehold.co/400x300/e0f2fe/4a5568?text=4x4+Truck'}], rating: null, comment: null, deliveryOption: 'pickup', finalAddress: '456 Commonwealth Ave, QC' },
    { id: 4, carId: 4, carName: 'Family Van', startDate: '2025-09-20T11:00', endDate: '2025-09-25T11:00', totalPrice: 12500.00, status: 'Completed', images: [{url: 'https://placehold.co/400x300/e0f2fe/4a5568?text=Family+Van'}], rating: 4, comment: "The van was spacious and clean. Great for our family trip!" },
    { id: 5, carId: 2, carName: 'Compact Hatchback', startDate: '2025-08-10T12:00', endDate: '2025-08-12T12:00', totalPrice: 2400.00, status: 'Cancelled', images: [{url: 'https://placehold.co/400x300/e0f2fe/4a5568?text=Compact+Car'}], rating: null, comment: null, deliveryOption: 'pickup', finalAddress: '456 Commonwealth Ave, QC' },
];

export const initialHostBookings = [
    { id: 101, carId: 1, carName: 'All New Rush', renterName: 'Maria Clara', startDate: '2025-10-05', endDate: '2025-10-07', totalPrice: 144.00, status: 'New Request', images: [{url: 'https://placehold.co/400x300/e0f2fe/4a5568?text=All+New+Rush'}] },
    { id: 102, carId: 1, carName: 'All New Rush', renterName: 'Jose Rizal', startDate: '2025-10-12', endDate: '2025-10-13', totalPrice: 72.00, status: 'Upcoming', images: [{url: 'https://placehold.co/400x300/e0f2fe/4a5568?text=All+New+Rush'}] },
    { id: 103, carId: 1, carName: 'All New Rush', renterName: 'Andres Bonifacio', startDate: '2025-09-15', endDate: '2025-09-18', totalPrice: 216.00, status: 'Completed', images: [{url: 'https://placehold.co/400x300/e0f2fe/4a5568?text=All+New+Rush'}] },
];