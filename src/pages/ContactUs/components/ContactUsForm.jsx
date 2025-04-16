import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactusForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://cms.allnepalclinic.com/wp-json/custom-cf7/v1/submit/162",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "your-name": `${formData.firstName} ${formData.lastName}`,
            "your-email": formData.email,
            "your-subject": "Contact Form Submission",
            "your-message": formData.message,
            "your-phone": formData.phone
          }),
        }
      );

      const data = await response.json();

      if (data) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred while submitting the form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className="px-4 w-100" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-12 col-md-6 col-sm-6 mb-3">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 col-md-6 col-sm-6">
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-6 col-sm-6 mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12 col-md-6 col-sm-6">
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Contact Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="btn btn-primary w-25 mb-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </>
  );
};