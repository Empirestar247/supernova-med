import React from 'react';
import SubHeader from './SubHeader';
import LabTestCard from './LabTestCard';
import ScientistGallery from './ScientistGallery';
import Mission from './Mission';
import Reviews from './Reviews';
import Services from './Services';



function Homepage() {
  return (
    <>
      <SubHeader />
      <Mission />
      <Services />
      <LabTestCard />
      <h1 className="text-center mt-5 text-light ">Medical Laboratory Practictional</h1>
      <ScientistGallery />
      <h1 className="text-center mt-5 text-light ">Review</h1>
      <Reviews />
      
    </>
  );
}

export default Homepage;
