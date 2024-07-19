import React, { useState } from 'react';

function BookingForm() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking confirmed for ${name} on ${date}`);
    };

    return (
        <section>
            <h2>Book Your Stay</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </label>
                <button type="submit">Book Now</button>
            </form>
        </section>
    );
}

export default BookingForm;
