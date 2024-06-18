import React from 'react'

function SubHeader() {
  return (
    <>
        <div className="subheader pt-5 text-center mb-5">
        <div className="search-bar pt-5">
          <div className="container-fluid">
            <form className="d-flex gap-1 p-5 pt-5 mt-5" role='search' id='search-form'>
              <input type="search" className="form-control m-auto" placeholder='Search'aria-label='Search' id='search'/>
              <button className="btn btn-outline-info text-light border-info m-auto" type='submit'>Search</button>
            </form>
          </div>
        </div>
        <div className="subheader-text mb-5">
          <h1 className="sub-text text-light">Welcome to Supernova Medical Diagnostic Laboratory Center</h1>
          <p className="sub-text-para text-light">We are delighted to have you as one of our clients and will love to help provide <span className="text-info">Solution(s)</span> to your health challengies.</p>
        </div>
        <button className="btn btn-outline-info text-light border-info m-auto" type='submit'>GET STARTED</button>
      </div>
    </>
  )
}

export default SubHeader