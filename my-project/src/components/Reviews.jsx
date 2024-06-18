import React from "react";
import Header from "./Header";

function Reviews() {
  const reviews = [
    {
      id: 1,
      content: "Great service and accurate results!",
      author: "John Doe",
      image: "/src/assets/client1.jpg",
    },
    {
      id: 2,
      content: "Very professional and quick.",
      author: "Jane Smith",
      image: "/src/assets/client2.jpg",
    },
    {
      id: 3,
      content: "Helpful staff and clear explanations.",
      author: "Alice Johnson",
      image: "/src/assets/client3.jpg",
    },
  ];

  return (
    <>
      <div className="container mt-5 p-4 m-5 mx-auto bg-light rounded-3">
        <h2 className="Rev-text text-center bg-primary p-2 mx-auto text-light">What Our Clients Say</h2>
        <hr />
        <div className="review-sec p-4">
          {reviews.map((review) => (
            <div key={review.id} className="review-row">
              <div className="review m-2 p-3 rounded">
                <img
                  src={review.image}
                  alt={`Image of ${review.author}`}
                  className="client-image"
                />
                <p className="my-2 p-1">{review.content}</p>
                <small className="bg-primary p-2 text-light rounded">- {review.author}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default Reviews;
