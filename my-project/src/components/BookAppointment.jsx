import React, { useState } from "react";
import Contact from "./Contact";
import axios from "axios";

function BookAppointment() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    firstVisit: false,
    appointmentPurpose: "",
    preferredTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Appointment booked successfully!");
    // Here you would usually send this data to a server
  };

  return (
    <>
      <div className="form-container mx-5 mt-5 p-3 px-5 pb-5 bg-light rounded-3" id="form-container">
      <h2 className="bookApp-text text-center text-primary m-4 p-2 mx-auto">Book Your Appointment</h2>
        <form onSubmit={handleSubmit} className="form-cont border border-primary rounded p-5" id="form-cont">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              className="form-control"
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone (Optional)</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Address (Optional)</label>
            <input
              type="text"
              name="address"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Is this your first visit?</label>
            <div id="radios">
              <input
                type="radio"
                name="firstVisit"
                value="yes"
                onChange={handleChange}
              />{" "}
              <span>Yes</span>
              <input
                type="radio"
                name="firstVisit"
                value="no"
                onChange={handleChange}
              />{" "}
              <span>No</span>
            </div>
          </div>
          <div className="form-group">
            <label>Purpose of Appointment</label>
            <textarea
              name="appointmentPurpose"
              className="form-control"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Preferred Appointment Time</label>
            <input
              type="time"
              name="preferredTime"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Schedule Appointment
          </button>
        </form>
        
      </div>
      
    </>
  );
}

export default BookAppointment;
