import React from 'react';

function HotelList() {
    const hotels = [
        { name: 'Hotel Paradise', location: 'New York', price: '$200/night' },
        { name: 'Ocean View', location: 'Miami', price: '$150/night' },
        { name: 'Mountain Retreat', location: 'Denver', price: '$180/night' }
    ];

    return (
        <section>
            <h2>Available Hotels</h2>
            <ul>
                {hotels.map((hotel, index) => (
                    <li key={index}>
                        <h3>{hotel.name}</h3>
                        <p>{hotel.location}</p>
                        <p>{hotel.price}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default HotelList;
