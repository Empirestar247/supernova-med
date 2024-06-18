import React from 'react'
import BookAppointment from './BookAppointment'
import ScientistGallery from './ScientistGallery';
function Contact() {
  return (
    <>
    <div className="bg-cover">
        <div className="text-center text-light">
          <h1 className="pt-5">Contact</h1>
          <p>
            Home <i className="fa fa-arrow-right ms-3 me-3"></i> Contact
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5" data-aos="fade-up">
            <p className="fw-bold text-light">
              Kindly Call / Chat us or Send us an email.
            </p>
            <div>
              <div className="mb-3">
                <a
                  href="tel:09000012345"
                  className="text-decoration-none text-light"
                >
                  <span className="me-3">
                    <i className="fa fa-phone"></i>
                  </span>
                  +234 8118129513
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="https://wa.me/+2349072211222"
                  className="text-decoration-none text-light"
                >
                  <span className="me-3">
                    <i className="fab fa-whatsapp"></i>
                  </span>
                  +234 8167000077
                </a>
              </div>
              <div className="mt-3">
                <a
                  href="mailto:info@supernovamedlab.com"
                  className="text-decoration-none text-light"
                >
                  <span className="me-3">
                    <i className="fa fa-envelope"></i>
                  </span>
                  info@supernovamedlab.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-5" data-aos="fade-up"></div>
        </div>
      </div>
      <h1 className="text-center text-light mt-5">Our Scientists</h1>
      <ScientistGallery />
      <BookAppointment />
    </>
  )
}

export default Contact