import React, { useState } from 'react';
import './Contact.css'; // Make sure the path is correct

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Basic validation
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    // Simulate a successful form submission
    setIsSubmitted(true);
    setError('');
    // Here you can integrate an actual email-sending service, e.g., EmailJS, Formspree, etc.
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      {/* Social Media Links - You can place them here above the form */}
      <div className="social-media-links">
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        {/* Add more social media links as needed */}
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {isSubmitted && <p className="success-message">Thank you for your message! I’ll get back to you soon.</p>}

      {/* Social Media Links - You can place them here below the form */}
      <div className="social-media-links-bottom">
        <a href="https://instagram.com/Terry Waswa" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/terry-waswa-796595281/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/TerryWaswa20" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        {/* Add more social media links as needed */}
      </div>
    </div>
  );
};

export default Contact;
