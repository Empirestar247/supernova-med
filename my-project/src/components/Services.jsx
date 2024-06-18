import React from "react";
// import coverImage from "../assets/hero.jpg";

function Services() {
  const servicesList = [
    {
      id: 1,
      name: "Complete Blood Count",
      description:
        "This test measures the levels of different blood cell types within the blood.",
    },
    {
      id: 2,
      name: "Lipid Profile",
      description:
        "A panel of blood tests that serves as an initial broad medical screening tool for abnormalities in lipids, such as cholesterol and triglycerides.",
    },
    {
      id: 3,
      name: "Blood Glucose Test",
      description:
        "Measures the amount of glucose in your blood and is commonly used to test for diabetes.",
    },
    {
      id: 4,
      name: "Thyroid Function Tests",
      description:
        "Tests used to measure how well your thyroid gland is working.",
    },
    {
      id: 5,
      name: "Liver Function Tests",
      description:
        "A range of tests used to assess the general state of the liver or biliary system.",
    },
  ];

  return (
    <div className="services">
      {/* <img src={coverImage} alt="Cover" className="services-cover" /> */}
      <h1 className="text-center mt-5 text-light ">Our Services</h1>
      <ul>
        {servicesList.map((service) => (
          <li key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default Services;
