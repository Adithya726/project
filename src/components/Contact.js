import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // To navigate back to home page
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission status
  const navigate = useNavigate(); // Hook for navigation

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    // Subject validation (5-20 characters)
    if (!formData.subject) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length < 5 || formData.subject.length > 20) {
      newErrors.subject = "Subject must be between 5 and 20 characters";
    }

    // Message validation (up to 100 characters)
    if (!formData.message) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 100) {
      newErrors.message = "Message must be up to 100 characters";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(); // Validate form on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();

    if (isFormValid) {
      console.log("Form submitted", formData);
      setIsSubmitted(true); // Update submission status
    } else {
      console.log("Form has errors");
    }
  };

  const goToHomePage = () => {
    navigate("/"); // Navigate back to the home page
  };

  return (
    <div className="contact-container">
      {isSubmitted ? (
        <div className="contact-notification">
          <div className="success-message">
            <i className="fa fa-check-circle success-icon" aria-hidden="true"></i>
            <h2>Message Sent Successfully!</h2>
            <button className="back-home-btn" onClick={goToHomePage}>
              Back to Home Page
            </button>
          </div>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Write us</h2>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? "input-error" : ""}
              onBlur={validate} // Call validation when leaving input field
            />
            {errors.name && <small className="error-text">{errors.name}</small>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? "input-error" : ""}
              onBlur={validate}
            />
            {errors.email && <small className="error-text">{errors.email}</small>}
          </div>

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={errors.subject ? "input-error" : ""}
              onBlur={validate}
            />
            {errors.subject && (
              <small className="error-text">{errors.subject}</small>
            )}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={errors.message ? "input-error" : ""}
              onBlur={validate}
            />
            {errors.message && (
              <small className="error-text">{errors.message}</small>
            )}
          </div>

          <button
            type="submit"
            className="send-message-btn"
            disabled={!isFormValid} // Disable button if form is invalid
          >
            Send Message
          </button>
        </form>
      )}

      <div className="contact-info">
        <h3>Contact information</h3>
        <ul>
          <li>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span>198 West 21th Street, Suite 721 New York NY 10016</span>
          </li>
          <li>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>+ 1235 2355 98</span>
          </li>
          <li>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <span>info@yoursite.com</span>
          </li>
          <li>
            <i className="fa fa-globe" aria-hidden="true"></i>
            <span>yoursite.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
