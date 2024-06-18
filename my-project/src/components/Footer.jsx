import React from 'react'
import Logo from '../assets/t-logo.png';
import Footer1 from '../assets/footer1.jpg'
import Footer2 from '../assets/footer2.jpg'
import Footer3 from '../assets/footer3.jpg'

function Footer() {
  return (
    <>
      <div className="bg-light text-primary mt-5 py-5" id='footer-sec'>
        <div className="container">
          <h2 className='bg-primary text-light mb-5' id='fh3'>
            <img src={Logo}   alt="Logo" srcSet="" /> Supernova Medical Diagnostic Laboratory Center
          </h2>
          <div className="row gap-5">
            <div className="col-md-4 border border-primary rounded-3 p-3  mx-auto" id='footer-col'>
              <h3 className='text-center' id='fh3'>Gallery</h3>
              <div className="d-flex justify-content-between">
                <img
                  src={Footer1}   alt="Footer image 1"
                  className="img-fluid rounded"
                />
                <img
                  src={Footer2}   alt="Footer image 2"
                  className="img-fluid rounded"
                />
                <img
                  src={Footer3}   alt="Footer image 3"
                  className="img-fluid rounded"
                />
              </div>
            </div>
            <div className="col-md-3 border border-primary rounded-3 p-3  mx-auto" id='footer-col'>
              <h3 className='text-center' id='fh3-s'>Subscribe to Our Newsletter</h3>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="col-md-3 border border-primary rounded-3 p-3 mx-auto" id='footer-col'>
              <h3 className='text-center' id='fh3'>Quick Links</h3>
              <ul className="list-unstyled text-center mt-5" id='ql-ul'>
                <li className="btn btn-outline-primary btn-floatingm-2 mx-2"id='ql-li'>
                  <a href="#" className='text-primary text-decoration-none'id='fb-href'>
                    <i className='fab fa-facebook' id='fb-i'></i>
                  </a>
                </li>
                <li className="btn btn-outline-primary btn-floatingm-2 mx-2"id='ql-li'>
                  <a href="#" className='text-primary text-decoration-none'id='twt-href'>
                    <i className='fab fa-twitter' id='twt-i'></i>
                  </a>
                </li>
                <li className="btn btn-outline-primary btn-floatingm-2 mx-2"id='ql-li'>
                  <a href="#" className='text-redtext-decoration-none' id='insta-href'>
                    <i className='fab fa-instagram' id='insta-i'></i>
                  </a>
                </li>
                <li className="btn btn-outline-primary btn-floatingm-2 mx-2"id='ql-li'>
                  <a href="#" className='text-primary text-decoration-none'id='ldin-href'>
                    <i className='fab fa-linkedin' id='ldin-i'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='fbp text-center text-primary'>  NOVA_LAB:All_rights_Reservered</p>
      </div>
    </>
  )
}

export default Footer