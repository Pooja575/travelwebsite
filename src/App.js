import React from 'react';
import './styles.css';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import HotelList from './components/HotelList';
import RealTimeAvailability from './components/RealTimeAvailability';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <nav>
                <a href="#about-us">About Us</a>
                <a href="#contact-us">Contact Us</a>
                <a href="#booking-form">Book Now</a>
                <a href="#hotels">Available Hotels</a>
                <a href="#availability">Real-Time Availability</a>
            </nav>
            <main>
                <section id="hotels">
                    <HotelList />
                </section>
                <section id="booking-form">
                    <BookingForm />
                </section>
                <section id="availability">
                    <RealTimeAvailability />
                </section>
                <section id="about-us">
                    <AboutUs />
                </section>
                <section id="contact-us">
                    <ContactUs />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
