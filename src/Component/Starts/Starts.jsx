import React from "react";

const Starts = ({ stars, review }) => {
  const startRating = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <i className="fa fa-star"></i>
        ) : stars >= number ? (
          <i className="fa fa-star-half-alt"></i>
        ) : (
          <i class="far fa-star"></i>
        )}
      </span>
    );
  });
//   console.log(stars);
  return (
    <div style={{display:'flex',marginTop:12}}>
      {startRating}
      <p>({review} customer rating)</p>
    </div>
  );
};

export default Starts;
