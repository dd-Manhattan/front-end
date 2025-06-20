import React from 'react';

export const BannerComponent = ({ imgSrc, title, description, imgRight = true }) => {
  return (
    <section className="d-flex justify-content-center align-items-center min-vh-100 py-5 w-100">
      <div
        className={`container d-flex flex-column flex-md-row justify-content-around ${
          imgRight ? '' : 'flex-md-row-reverse'
        } align-items-center justify-content-center`}
      >
        <div
          className={`text-center text-md-start  ${
            imgRight ? 'me-md-5' : 'ms-md-5'
          }`}
        >
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="d-flex justify-content-center ">
          <img
            src={imgSrc}
            alt={title}
            className="img-fluid rounded"
            style={{ maxHeight: '60vh', objectFit: 'fit', maxWidth: '900px' }}
          />
        </div>
      </div>
    </section>
  );
};
