// src/components/ContactPage.js

// --- React Imports ---
import React, { useState, useEffect } from 'react'; // Import React and hooks for state and side effects

// --- Style Imports ---
import '../styles/ContactPage.css'; // Main styles for the contact page content and layout
import './Section1.css';   // Styles primarily for the Navbar (ensure path is correct)

// --- Icon Imports ---
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaMobileAlt, FaSpinner } from "react-icons/fa"; // Contact info icons and loading spinner
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Component for using FontAwesome icons
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // Specific FontAwesome icon for 'back to top'

// --- Component Imports ---
import Section6 from "./Section6"; // Assuming Section6 is your Footer or another relevant section
import logo from '../assets/logo.png'; // Import the logo image (ensure path is correct)

// --- ContactPage Component Definition ---
const ContactPage = () => {
    // === STATE MANAGEMENT ===

    // --- Navbar State ---
    // 'scrolled': Boolean state to track if the page has been scrolled down enough to make the navbar sticky.
    const [scrolled, setScrolled] = useState(false);
    // 'showTopButton': Boolean state to track if the 'back to top' button should be visible.
    const [showTopButton, setShowTopButton] = useState(false);

    // --- Form Input State ---
    // State variables to hold the current values entered into the form fields.
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // --- Form Submission State ---
    // 'isSubmitting': Boolean state to track if the form is currently being submitted (disables button, shows spinner).
    const [isSubmitting, setIsSubmitting] = useState(false);
    // 'submissionStatus': String state to hold the result of the submission ('success', 'error', or null initially). Used to display feedback messages.
    const [submissionStatus, setSubmissionStatus] = useState(null);

    // === SIDE EFFECTS ===

    // --- Navbar Scroll Effect ---
    // This useEffect hook runs after the component mounts and adds a scroll event listener.
    // It updates the 'scrolled' and 'showTopButton' state based on the window's scroll position.
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Check if scrolled more than 100 pixels
            if (scrollPosition > 100) {
                setScrolled(true);        // Make navbar sticky
                setShowTopButton(true);  // Show 'back to top' button
            } else {
                setScrolled(false);       // Revert navbar style
                setShowTopButton(false); // Hide 'back to top' button
            }
        };

        // Add the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Cleanup function: Remove the event listener when the component unmounts to prevent memory leaks.
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs only once on mount and cleanup on unmount.

    // === HELPER FUNCTIONS ===

    // --- Scroll To Top Function ---
    // Smoothly scrolls the window back to the top when called.
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,          // Scroll to the very top
            behavior: 'smooth' // Animate the scroll
        });
    };

    // --- Form Submission Handler ---
    // This asynchronous function handles the form submission process.
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default browser form submission (which causes a page reload).
        setIsSubmitting(true);      // Indicate that submission has started
        setSubmissionStatus(null);  // Reset any previous submission status messages

        // --- !!! IMPORTANT: Replace with your actual Google Apps Script Web App URL !!! ---
        // This URL is generated when you deploy your Google Apps Script as a Web App.
        const googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbzQn4J6rmaTfV1ORxm4-rPhX5kPD_2BwruV1wwa_JYjxpwmn5gLrx3fVFoyga-tvsDa/exec';
        // ---

        // Prepare the data payload to be sent to the Google Apps Script.
        const formData = {
            name: fullName,
            email: email,
            message: message,
            timestamp: new Date().toISOString() // Optional: Adds a timestamp for when the form was submitted (client-side).
        };

        // Use the Fetch API to send the data to the Google Apps Script endpoint.
        try {
            const response = await fetch(googleAppsScriptUrl, {
                method: 'POST',     // Use the POST method to send data.
                mode: 'cors',       // Necessary for cross-origin requests if your script allows it.
                headers: {
                    // Indicate that the request body contains JSON data.
                    'Content-Type': 'application/json',
                },
                // Convert the JavaScript formData object into a JSON string for the request body.
                body: JSON.stringify(formData),
            });

            // Assuming the Google Apps Script returns a JSON response like { "result": "success" } or { "result": "error", "message": "..." }
            const result = await response.json();

            // Check if the request was successful (HTTP status 2xx) and if the script reported success.
            if (response.ok && result.result === 'success') {
                setSubmissionStatus('success'); // Set status to show success message.
                // Reset form fields after successful submission.
                setFullName('');
                setEmail('');
                setMessage('');
            } else {
                // If the response status is not OK or the script reported an error, throw an error.
                throw new Error(result.message || 'Submission failed. Please try again.');
            }
        } catch (error) {
            // Catch any errors during the fetch operation or from the server response.
            console.error('Error submitting form:', error); // Log the error for debugging.
            setSubmissionStatus('error'); // Set status to show error message.
        } finally {
            // This block always runs, regardless of success or error.
            setIsSubmitting(false); // Indicate that submission process is complete.
        }
    };

    // === JSX RENDERING ===
    return (
        // React Fragment (<>) allows returning multiple elements without adding an extra node to the DOM.
        <>
            {/* --- Navbar Section --- */}
            {/* The navbar component copied from Section1.js. Its appearance changes based on the 'scrolled' state. */}
            <nav className={`navbar ${scrolled ? 'navbar-sticky' : ''}`}>
                {/* Logo and Brand Name */}
                <div className="logo-container">
                    <img src={logo} alt="Bangalore Realtors Logo" className="navbar-logo" />
                    <span className="logo-text">
                        <span className="logo-text-white">Bangalore </span>
                        <span className="logo-text-orange">Realtors</span>
                    </span>
                </div>
                {/* Navigation Links */}
                <div className="nav-links">
                     {/* Using absolute paths assumes these routes are set up in your routing configuration */}
                    <a href="/#about" className="nav-link">About</a>
                    <a href="/contact" className="nav-link">Contact</a> {/* Link to the current page or section */}
                    <a href="/#testimonials" className="nav-link">Testimonials</a>
                     {/* Add more links as needed */}
                </div>
            </nav>

            {/* --- Main Contact Page Content --- */}
            <div className="contact-page">
                {/* Container for centering content and managing padding */}
                <div className="contact-container">
                    {/* Main heading for the contact section */}
                    <h2>Contact us, and we’ll get back to you soon</h2>

                    {/* Container for the form and info cards, likely uses flexbox or grid for layout */}
                    <div className="contact-content">

                        {/* --- Contact Form --- */}
                        {/* The 'onSubmit' handler calls the 'handleSubmit' function when the form is submitted. */}
                        <form className="contact-form" onSubmit={handleSubmit}>
                            {/* Full Name Input */}
                            <input
                                type="text"
                                placeholder="Full Name*" // Placeholder text shown when input is empty
                                value={fullName}       // Controlled component: value linked to state
                                onChange={(e) => setFullName(e.target.value)} // Update state on change
                                required               // HTML5 validation: field must be filled
                                disabled={isSubmitting} // Disable input during submission
                            />
                            {/* Email Input */}
                            <input
                                type="email"
                                placeholder="Email*"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={isSubmitting}
                            />
                            {/* Message Text Area */}
                            <textarea
                                placeholder="Message*"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows={4}               // Sets the visible height of the textarea
                                disabled={isSubmitting}
                            ></textarea>

                            {/* --- Submission Status Feedback Area --- */}
                            {/* Conditionally render feedback messages based on 'submissionStatus' */}
                            <div className="submission-feedback">
                                {submissionStatus === 'success' && (
                                    <p className="success">
                                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                                    </p>
                                )}
                                {submissionStatus === 'error' && (
                                    <p className="error">
                                        Sorry, there was an error sending your message. Please try again later or contact us directly via phone or email.
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="contact-btn" disabled={isSubmitting}>
                                {/* Conditionally render button text and spinner */}
                                {isSubmitting ? (
                                    <>
                                        <FaSpinner className="spinner" /> {/* Loading spinner icon */}
                                        Sending...
                                    </>
                                ) : (
                                    'Book Appointment' // Default button text
                                )}
                            </button>
                        </form>

                        {/* --- Contact Information Cards Section --- */}
                        <div className="contact-info-cards">
                            {/* Individual info card for Email/Support */}
                            <div className="info-card">
                                <FaEnvelope className="info-icon" /> {/* Email Icon */}
                                <div>
                                    <div className="info-title">Technical support</div>
                                    <div className="info-detail">example@mail.com<br />+91-888-888-8887</div>
                                </div>
                            </div>
                            {/* Individual info card for Address */}
                            <div className="info-card">
                                <FaMapMarkerAlt className="info-icon" /> {/* Map Marker Icon */}
                                <div>
                                    <div className="info-title">Address</div>
                                    {/* Current location used as placeholder */}
                                    <div className="info-detail">Bengaluru, Karnataka, India</div>
                                </div>
                            </div>
                            {/* Individual info card for Landline Phone */}
                            <div className="info-card">
                                <FaPhoneAlt className="info-icon" /> {/* Phone Icon */}
                                <div>
                                    <div className="info-title">Land Line</div>
                                    <div className="info-detail">(080) XXXX XXXX</div> {/* Placeholder for Bangalore landline */}
                                </div>
                            </div>
                            {/* Individual info card for Mobile Phone */}
                            <div className="info-card">
                                <FaMobileAlt className="info-icon" /> {/* Mobile Phone Icon */}
                                <div>
                                    <div className="info-title">Mobile</div>
                                    <div className="info-detail">+91 9XXXXXXXXX</div> {/* Placeholder */}
                                </div>
                            </div>
                        </div> {/* End contact-info-cards */}
                    </div> {/* End contact-content */}
                </div> {/* End contact-container */}
            </div> {/* End contact-page */}

            {/* --- Footer Section --- */}
            {/* Renders the Section6 component, assumed to be the footer */}
            <Section6 />

            {/* --- Back to Top Button --- */}
            {/* Conditionally rendered based on 'showTopButton' state */}
            {showTopButton && (
                <button
                    className="back-to-top-button" // Class for styling
                    onClick={scrollToTop}         // Calls the scroll function on click
                    aria-label="Back to top"      // Accessibility label
                >
                    <FontAwesomeIcon icon={faArrowUp} /> {/* Arrow icon */}
                </button>
            )}
        </> // End React Fragment
    );
}; // End ContactPage Component

// --- Export Component ---
// Makes the ContactPage component available for import in other parts of the application.
export default ContactPage;