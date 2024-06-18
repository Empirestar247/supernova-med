import React from "react";
import testImg1 from "../assets/testImg1.jpg";
import testImg2 from "../assets/testImg2.jpg";
import testImg3 from "../assets/testImg3.jpg";
import testImg4 from "../assets/testImg4.jpg";
import testImg5 from "../assets/testImg6.jpg";
import testImg6 from "../assets/testImg7.jpg";

function LabTestCard() {
  // Array of laboratory test data
  const cardData = [
    {
      Image: testImg1,
      title: "Complete Blood Count",
      content:
        "The CBC is one of the most common blood tests and helps detect a range of disorders...",
    },
    {
      Image: testImg2,
      title: "Lipid Panel",
      content:
        "A lipid panel measures the levels of different types of fat in the blood, used to assess heart disease risk...",
    },
    {
      Image: testImg3,
      title: "Blood Glucose Test",
      content:
        "This test measures the amount of glucose in your blood and is commonly used to diagnose diabetes...",
    },
    {
      Image: testImg4,
      title: "Hormone Panel",
      content:
        "Hormone tests check the levels of various hormones in your body, important for detecting endocrine disorders...",
    },
    {
      Image: testImg5,
      title: "Thyroid Function Tests",
      content:
        "These tests measure how well your thyroid is working and help diagnose thyroid diseases...",
    },
    {
      Image: testImg6,
      title: "Liver Function Tests",
      content:
        "Liver tests help assess liver health and detect liver diseases...",
    },
  ];

  return (
    <>
        <div className="row m-5 mt-4 p-2">
            <h1 className="lab-text text-center text-light m-5 p-2 mx-auto">Our Laboratory Test Machine</h1>
            {cardData.map((card, index) => (
            <div className="col-md-4 mb-5" key={index}>
                <div className="card">
                  <img
                    src={card.Image}
                    className="card-img-top"
                    alt="Medical Laboratory Test"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{card.title}</h4>
                    <p className="card-text text-secondary">
                      {card.content}
                      <a href="" className="text-Primary text-decoration-none">
                        Read More
                      </a>
                    </p>
                  </div>
                </div>
            </div>
          ))}
        </div>
    </>
  );
}

export default LabTestCard;
