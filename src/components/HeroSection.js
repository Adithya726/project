import React, { useState } from 'react';
import './HeroSection.css';
import heroImage from '../images/pexels-wendywei-1190297.jpg'; // Adjust the path based on your folder structure

// Import festival images
import image1 from '../images/image.png';  // First image
import image2 from '../images/image.png2.jpg'; // Second image
import image3 from '../images/image.png3.jpg'; // Third image
import image4 from '../images/image.png4.jpg'; // Fourth festival image

// Import concert images
import concertImage1 from '../images/concerts.png1.jpg'; // First concert image
import concertImage2 from '../images/concerts.png2.jpg'; // Second concert image
import concertImage3 from '../images/concerts.png3.jpg'; // Third concert image

// Import sports images
import sportsImage1 from '../images/sports.png1.jpg'; // First sports image
import sportsImage2 from '../images/sports.png2.jpg'; // Second sports image

// Import necessary icons from react-icons
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaMusic, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const eventsData = [
    // Festival events
    { id: 1, name: 'Festival Event 1', date: '25 JAN', location: 'Manhattan / New York', price: '$49.99', category: 'FESTIVAL', description: 'Festival Event 1 is a fun-filled day of music, food, and dance at the heart of New York City.', image: image1 },
    { id: 2, name: 'Festival Event 2', date: '10 FEB', location: 'Brooklyn / New York', price: '$59.99', category: 'FESTIVAL', description: 'Enjoy a day filled with art and music at Festival Event 2 in Brooklyn.', image: image2 },
    { id: 3, name: 'Festival Event 3', date: '15 MAR', location: 'Queens / New York', price: '$69.99', category: 'FESTIVAL', description: 'A multicultural festival in Queens, with international performers and food.', image: image3 },
    { id: 4, name: 'Festival Event 4', date: '20 APR', location: 'Bronx / New York', price: '$79.99', category: 'FESTIVAL', description: 'Join us at Festival Event 4 for an amazing day of live performances and local food trucks.', image: image4 }, // Updated with image4.jpeg
    
    // Sports events
    { id: 5, name: 'Sports Event 1', date: '30 MAY', location: 'Central Park / New York', price: '$39.99', category: 'SPORTS', description: 'An outdoor event with games and activities for kids and adults alike in Central Park.', image: sportsImage1 }, // Updated with sports.png1.jpg
    { id: 6, name: 'Sports Event 2', date: '12 JUN', location: 'Prospect Park / Brooklyn', price: '$44.99', category: 'SPORTS', description: 'Come and play a variety of sports and games at Sports Event 2 in Brooklyn.', image: sportsImage2 }, // Updated with sports.png2.jpg
    
    // Concert events
    { id: 7, name: 'Concert Event 1', date: '05 JUL', location: 'Madison Square Garden / New York', price: '$89.99', category: 'CONCERTS', description: 'Join us at Madison Square Garden for a live concert featuring top artists.', image: concertImage1 },
    { id: 8, name: 'Concert Event 2', date: '18 AUG', location: 'Radio City Music Hall / New York', price: '$99.99', category: 'CONCERTS', description: 'An unforgettable concert experience at Radio City Music Hall.', image: concertImage2 },
    { id: 9, name: 'Concert Event 3', date: '25 SEP', location: 'Apollo Theater / Harlem', price: '$109.99', category: 'CONCERTS', description: 'Concert Event 3 brings you a night of fantastic music at the Apollo Theater.', image: concertImage3 },
];

const HeroSection = () => {
    const [filteredEvents, setFilteredEvents] = useState(eventsData);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleCategoryClick = (category) => {
        if (category === 'ALL') {
            setFilteredEvents(eventsData);
        } else {
            const filtered = eventsData.filter(event => event.category === category);
            setFilteredEvents(filtered);
        }
    };

    const handleDetailsClick = (event) => {
        setSelectedEvent(event);
    };

    const closeDetails = () => {
        setSelectedEvent(null);
    };

    const showAllEvents = () => {
        setFilteredEvents(eventsData);
    };

    return (
        <div className="hero-section" style={{ backgroundColor: 'white' }}>
            {/* Hero Section */}
            <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <h1 className="hero-title">Evento</h1>
                <p className="hero-subtitle">HERE TO CREATE MOMENTS THAT LAST A LIFETIME</p>
                <button className="upcoming-events-button">Upcoming Events</button>
            </div>

            {/* Features Section */}
            <div className="features">
                <div className="feature">
                    <div className="feature-icon-container">
                        {/* Calendar Icon */}
                        <FaCalendarAlt className="feature-icon" />
                    </div>
                    <h3>7/24 EVENT AVAILABLE</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed velit.</p>
                </div>
                <div className="feature">
                    <div className="feature-icon-container">
                        {/* Location Icon */}
                        <FaMapMarkerAlt className="feature-icon" />
                    </div>
                    <h3>GREAT LOCATIONS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed velit.</p>
                </div>
                <div className="feature">
                    <div className="feature-icon-container">
                        {/* Users Icon */}
                        <FaUsers className="feature-icon" />
                    </div>
                    <h3>MORE THAN 200 SPEAKERS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed velit.</p>
                </div>
                <div className="feature">
                    <div className="feature-icon-container">
                        {/* Music Icon */}
                        <FaMusic className="feature-icon" />
                    </div>
                    <h3>LET'S PARTY AFTER EVENT</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed velit.</p>
                </div>
            </div>

            {/* Event Categories Section */}
            <div className="event-categories">
                <h2 className="category" onClick={() => handleCategoryClick("ALL")}>ALL</h2>
                <h2 className="category" onClick={() => handleCategoryClick("FESTIVAL")}>FESTIVAL</h2>
                <h2 className="category" onClick={() => handleCategoryClick("SPORTS")}>SPORTS</h2>
                <h2 className="category" onClick={() => handleCategoryClick("CONCERTS")}>CONCERTS</h2>
            </div>

            {/* Event Cards Section */}
            <div className="event-cards">
                {filteredEvents.map(event => (
                    <div className="event-card" key={event.id}>
                        <img src={event.image} alt={event.name} /> {/* Display the specific event image */}
                        <div className="event-info">
                            <h3>{event.name}</h3>
                            <p>{event.date}</p>
                            <p>{event.location}</p>
                            <p>Tickets from {event.price}</p>
                            <button className="details-btn" onClick={() => handleDetailsClick(event)}>DETAILS</button>
                        </div>
                    </div>
                ))}
            </div>

            <center>
                <button className="see-all-btn" onClick={showAllEvents}>SEE ALL EVENTS</button>
            </center>

            {/* Event Details Modal */}
            {selectedEvent && (
                <div className="event-details-overlay" onClick={closeDetails}>
                    <div className="event-details-box">
                        <div className="event-details-content">
                            <img src={selectedEvent.image} alt={selectedEvent.name} className="details-image" />
                            <div className="event-details-text">
                                <h2>{selectedEvent.name}</h2>
                                <p><strong>Date:</strong> {selectedEvent.date}</p>
                                <p><strong>Location:</strong> {selectedEvent.location}</p>
                                <p><strong>Description:</strong> {selectedEvent.description}</p>
                                <button className="close-btn" onClick={closeDetails}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2024 Evento. All Rights Reserved.</p>
                    <div className="footer-links">
                        <a href="/contact" className="footer-link">Contact Us</a>
                        <a href="/terms" className="footer-link">Terms & Services</a>
                    </div>
                    <div className="footer-icons">
                        <FaFacebook className="social-icon" />
                        <FaTwitter className="social-icon" />
                        <FaInstagram className="social-icon" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HeroSection;
