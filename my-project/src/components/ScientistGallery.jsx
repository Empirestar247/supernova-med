import React from 'react'
import scientist1 from "../assets/scientist1.jpg";
import scientist2 from "../assets/scientist2.jpg";
import scientist3 from "../assets/scientist3.jpg";

function ScientistGallery() {
  const scientistImages = [scientist1, scientist2, scientist3];

  return (
    <div className="scientist">
      {scientistImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Scientist ${index + 1}`}
          className="scientist-image"
        />
      ))}
    </div>
  );
}

export default ScientistGallery