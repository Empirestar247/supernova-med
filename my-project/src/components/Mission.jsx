import React from 'react'
import About from '../assets/about.jpg'

function mission() {
  return (
    <>
    <div className="container bg-light mt-5 p-5 " id='mission-container'>
      <h2 className='About-text text-center text-primary m-4 p-2 mx-auto'>About Us</h2>
        <div className="row border border-primary rounded" id='mission-row'>
            <div className="col-md-4 m-3 px-4 border-end border-primary" id='image-col'>
              <img src={About} alt="About" srcSet="" className='rounded-3' />
            </div>
            <div className="col-md-4 m-3 p-4 border-end border-primary" id='mission-col'>
              <h2 className='text-light mx-auto bg-primary'>Mission</h2>
              <p className='text-primary mt-3'>Our mission is to provide comprehensive, high-quality laboratory diagnostic services with a focus on accuracy, reliability, and efficiency. We strive to support the health and well-being of our community by delivering timely and actionable diagnostic information to healthcare providers and patients, ensuring better health outcomes for all.
              </p>
            </div>
            <div className="col-md-4 m-3 p-4" id='vission-col'>
              <h2 className='text-light mx-auto bg-primary'>Vission</h2>
              <p className='text-primary mt-3'>Our vision is to be a leading medical diagnostic laboratory center recognized for our commitment to excellence, innovation, and integrity. We aim to continuously improve our services and expand our capabilities, contributing to the advancement of medical diagnostics and improving patient care on a global scale.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default mission

