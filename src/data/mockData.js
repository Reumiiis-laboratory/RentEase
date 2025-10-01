// src/data/mockData.js

export const mockCars = [
  {
    id: 1,
    name: 'All New Rush',
    type: 'Popular',
    price: 72.00,
    rating: 4.8,
    reviews: 132,
    location: 'Manila, Philippines',
    coding: 'Wednesday',
    image: 'https://placehold.co/400x300/e0f2fe/4a5568?text=All+New+Rush',
    owner: {
      name: 'John Doe',
      avatar: 'https://placehold.co/100x100/ce0f2fe/4a5568?text=JD',
      joined: '2021',
      contactNumber: '+63 917 123 4567'
    },
    description: 'A reliable and spacious SUV perfect for family trips or city driving. Features great fuel economy and a comfortable interior.',
    features: ['Air Conditioning', 'Automatic Transmission', 'GPS Navigation', 'Bluetooth', 'USB Input'],
    rules: ['No smoking', 'Pets allowed on request', 'Minimum age: 21', 'Valid driver\'s license required'],
  },
  {
    id: 2,
    name: 'Compact Hatchback',
    type: 'Small Car',
    price: 55.00,
    rating: 4.6,
    reviews: 98,
    location: 'Quezon City, Philippines',
    coding: 'Monday',
    image: 'https://placehold.co/400x300/e0f2fe/4a5568?text=Compact+Car',
    owner: {
      name: 'Jane Smith',
      avatar: 'https://placehold.co/100x100/e0f2fe/4a5568?text=JS',
      joined: '2022',
      contactNumber: '+63 918 234 5678'
    },
    description: 'Easy to park and maneuver, this small car is ideal for navigating busy city streets. It\'s fuel-efficient and surprisingly roomy inside.',
    features: ['Air Conditioning', 'Manual Transmission', 'Bluetooth'],
    rules: ['No smoking', 'No pets', 'Return with full tank'],
  },
    {
    id: 3,
    name: 'Luxury Sedan',
    type: 'Exclusive Car',
    price: 150.00,
    rating: 4.9,
    reviews: 75,
    location: 'Makati, Philippines',
    coding: 'Friday',
    image: 'https://placehold.co/400x300/e0f2fe/4a5568?text=Luxury+Sedan',
    owner: {
      name: 'Robert Brown',
      avatar: 'https://placehold.co/100x100/e0f2fe/4a5568?text=RB',
      joined: '2020',
      contactNumber: '+63 919 345 6789'
    },
    description: 'Experience true comfort and performance with this exclusive luxury sedan. Perfect for business trips or making a statement.',
    features: ['Leather Seats', 'Premium Sound System', 'Sunroof', 'Advanced Safety Features'],
    rules: ['No food or drinks', 'Treat with care', 'Professional drivers only'],
  },
  {
    id: 4,
    name: 'Family Van',
    type: 'Large Car',
    price: 95.00,
    rating: 4.7,
    reviews: 110,
    location: 'Cebu City, Philippines',
    coding: 'Tuesday',
    image: 'https://placehold.co/400x300/e0f2fe/4a5568?text=Family+Van',
    owner: {
      name: 'Emily White',
      avatar: 'https://placehold.co/100x100/e0f2fe/4a5568?text=EW',
      joined: '2021',
      contactNumber: '+63 920 456 7890'
    },
    description: 'With seating for the whole family and plenty of cargo space, this large van is the ultimate road trip vehicle.',
    features: ['7-Seater', 'Rear Entertainment System', 'Spacious Cargo', 'Sliding Doors'],
    rules: ['Clean up after use', 'Long trips preferred'],
  },
  { id: 5, name: 'All New Rush', type: 'Popular', price: 72.00, rating: 4.8, reviews: 132, location: 'Manila, Philippines', coding: 'Wednesday', image: 'https://placehold.co/400x300/e0f2fe/4a5568?text=All+New+Rush', owner: { name: 'John Doe', avatar: 'https://placehold.co/100x100/cbd5e0/4a5568?text=JD', joined: '2021', contactNumber: '+63 917 123 4567' } },
  { id: 6, name: 'Eco-Friendly Hybrid', type: 'Small Car', price: 65.00, rating: 4.9, reviews: 88, location: 'Davao City, Philippines', coding: 'Thursday', image: 'https://placehold.co/400x300/e0f2fe/4a5568?text=Hybrid+Car', owner: { name: 'Jane Smith', avatar: 'https://placehold.co/100x100/cbd5e0/4a5568?text=JS', joined: '2022', contactNumber: '+63 918 234 5678' } },
  { id: 7, name: 'Off-Road 4x4', type: 'Large Car', price: 110.00, rating: 4.6, reviews: 95, location: 'Baguio, Philippines', coding: 'Monday', image: 'https://placehold.co/400x300/e0f2fe/4a5568?text=4x4+Truck', owner: { name: 'Robert Brown', avatar: 'https://placehold.co/100x100/cbd5e0/4a5568?text=RB', joined: '2020', contactNumber: '+63 919 345 6789' } },
  { id: 8, name: 'Convertible Roadster', type: 'Exclusive Car', price: 180.00, rating: 4.9, reviews: 60, location: 'Tagaytay, Philippines', coding: 'Friday', image: 'https://placehold.co/400x300/e0f2fe/4a5568?text=Convertible', owner: { name: 'Emily White', avatar: 'https://placehold.co/100x100/cbd5e0/4a5568?text=EW', joined: '2021', contactNumber: '+63 920 456 7890' } },
];

export const initialBookings = [
    { id: 1, carName: 'Luxury Sedan', startDate: '2025-10-15', endDate: '2025-10-18', totalPrice: 450.00, status: 'Upcoming', image: 'https://placehold.co/400x300/e0f2fe/4a5568?text=Luxury+Sedan', rating: null },
    { id: 4, carName: 'All New Rush', startDate: '2025-11-01', endDate: '2025-11-03', totalPrice: 144.00, status: 'Pending', image: 'https://placehold.co/400x300/e0f2fe/4a5568?text=All+New+Rush', rating: null },
    { id: 2, carName: 'Family Van', startDate: '2025-09-20', endDate: '2025-09-25', totalPrice: 475.00, status: 'Completed', image: 'https://placehold.co/400x300/e0f2fe/4a5568?text=Family+Van', rating: 4 },
    { id: 3, carName: 'Compact Hatchback', startDate: '2025-08-10', endDate: '2025-08-12', totalPrice: 110.00, status: 'Cancelled', image: 'https://placehold.co/400x300/e0f2fe/4a5568?text=Compact+Car', rating: null },
];

export const initialHostBookings = [
    { id: 101, carName: 'All New Rush', renterName: 'Maria Clara', startDate: '2025-10-05', endDate: '2025-10-07', totalPrice: 144.00, status: 'New Request', image: 'https://placehold.co/400x300/e0f2fe/4a5568?text=All+New+Rush' },
    { id: 102, carName: 'All New Rush', renterName: 'Jose Rizal', startDate: '2025-10-12', endDate: '2025-10-13', totalPrice: 72.00, status: 'Upcoming', image: 'https://placehold.co/400x300/e0f2fe/4a5568?text=All+New+Rush' },
    { id: 103, carName: 'All New Rush', renterName: 'Andres Bonifacio', startDate: '2025-09-15', endDate: '2025-09-18', totalPrice: 216.00, status: 'Completed', image: 'https://placehold.co/400x300/e0f2fe/4a5568?text=All+New+Rush' },
];