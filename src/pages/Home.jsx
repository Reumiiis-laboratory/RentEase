// src/pages/Home.jsx
import React, { useState } from 'react';
import HowItWorks from '../components/HowItWorks'; // adjust path if needed

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex items-center">
          <a href="#" className="text-primary font-bold text-xl">RentEase</a>
        </div>
        <div id="desktop-menu" className="space-x-8">
          <a href="#" className="nav-link active">Home</a>
          <a href="#vehicles" className="nav-link">Vehicles</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="/login" className="btn-primary">Login</a>
        </div>
        <button id="mobile-menu-btn" className="btn-secondary" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>
      <div id="mobile-menu" className={mobileMenuOpen ? 'show' : ''}>
        <a href="#" className="nav-link active">Home</a>
        <a href="#vehicles" className="nav-link">Vehicles</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
        <a href="/login" className="btn-primary">Login</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>Find Your Perfect Ride</h1>
        <p>Discover a wide range of vehicles for every occasion. From daily commutes to weekend getaways, we’ve got you covered.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="signup.html" className="btn-primary">Get Started</a>
          <a href="#vehicles" className="btn-secondary">Browse Vehicles</a>
        </div>
      </div>
    </section>
  );
}

function CarCard({ imgSrc, alt, title, description, price }) {
  return (
    <div className="car-card">
      <img src={imgSrc} alt={alt} className="car-img" />
      <div className="car-card-body">
        <h3 className="car-title">{title}</h3>
        <p className="text-muted">{description}</p>
        <p className="car-price">{price}</p>
        <a href="#" className="btn-primary">Rent Now</a>
      </div>
    </div>
  );
}

function FeaturedVehicles() {
  return (
    <section id="vehicles" className="section">
      <div className="container">
        <h2 className="text-center font-bold text-3xl mb-8">Featured Vehicles</h2>
        <div className="grid grid-cols-3 gap-6">
          <CarCard
            imgSrc="https://novago.africa/wp-content/uploads/2024/06/TOYOTA-FORTUNER-1.jpg.webp"
            alt="SUV"
            title="Toyota Fortuner"
            description="Spacious SUV for family trips."
            price="₱3,500/day"
          />
          <CarCard
            imgSrc="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80"
            alt="Sedan"
            title="Honda Civic"
            description="Perfect for city driving."
            price="₱2,000/day"
          />
          <CarCard
            imgSrc="https://hips.hearstapps.com/hmg-prod/images/p90495464-1677001974.jpg?crop=0.720xw:0.608xh;0.250xw,0.329xh&resize=1200:*"
            alt="Luxury"
            title="BMW X5"
            description="Luxury & comfort in one ride."
            price="₱6,500/day"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section bg-muted">
      <div className="container text-center">
        <h2 className="font-bold text-3xl mb-4">Why Choose RentEase?</h2>
        <p className="text-muted max-w-2xl mx-auto">
          At RentEase, we make car rentals simple, affordable, and convenient. Whether you’re a tourist exploring the Philippines or a commuter needing a reliable ride, we provide trusted vehicles at the best rates.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container text-center">
        <h2 className="font-bold text-3xl mb-4">Get in Touch</h2>
        <p className="text-muted mb-4">Have questions? We’d love to hear from you!</p>
        <a href="mailto:support@rentease.com" className="btn-primary">Email Us</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid-cols-3">
        <div>
          <h3>RentEase</h3>
          <p>Reliable car rentals made easy.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="#">Home</a><br />
          <a href="#vehicles">Vehicles</a><br />
          <a href="#about">About</a><br />
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h4>Contact</h4>
          <p>Email: support@rentease.com</p>
          <p>Phone: +63 912 345 6789</p>
        </div>
      </div>
      <div className="border-t mt-4">
        <p>&copy; 2025 RentEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />       {/* Added the 3-step + FAQ section */}
      <FeaturedVehicles />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
