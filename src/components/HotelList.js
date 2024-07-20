import React from 'react';
import '../styles.css'; // Adjusted import path
import hotel1 from '../images/ocean-view.jpg';
import hotel2 from '../images/mountain-retreat.jpg';
import hotel3 from '../images/hotel-paradise.jpg';

function HotelList() {
    const hotels = [
        { name: 'Ocean View', location: 'Miami', price: '$150/night', image: hotel1 },
        { name: 'Mountain Retreat', location: 'Denver', price: '$180/night', image: hotel2 },
        { name: 'Hotel Paradise', location: 'New York', price: '$200/night', image: hotel3 }
    ];

    return (
        <section>
            <h2>Available Hotels</h2>
            <div className="hotel-list">
                {hotels.map((hotel, index) => (
                    <div key={index} className="hotel-card">
                        <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                        <div className="hotel-info">
                            <h3>{hotel.name}</h3>
                            <p>{hotel.location}</p>
                            <p className="price">{hotel.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HotelList;
