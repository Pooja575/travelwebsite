import React from 'react';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import HotelList from './components/HotelList';
import RealTimeAvailability from './components/RealTimeAvailability';
import './styles.css';

function App() {
    return (
        <div>
            <Header />
            <main>
                <div className="button-container">
                    <a href="#about" className="button">About Us</a>
                    <a href="#contact" className="button">Contact Us</a>
                </div>
                <section id="about" className="button-component">
                    <h2>About Us</h2>
                    <p>Information about us...</p>
                </section>
                <section id="contact" className="button-component">
                    <h2>Contact Us</h2>
                    <p>Contact details...</p>
                </section>
                <BookingForm />
                <HotelList />
                <RealTimeAvailability />
            </main>
        </div>
    );
}

export default App;
