import React, { forwardRef } from 'react';

export const BannerComponent = forwardRef(({ 
  imgSrc, 
  title, 
  description, 
  imgRight = true, 
  hasButton = false, 
  buttonText = '', 
  buttonLink = '#',
  centerText = false
}, ref) => {
  return (
    <section 
      ref={ref} 
      className="d-flex justify-content-center align-items-center min-vh-100 py-5 w-100"
    >
      <div
        className={`container d-flex flex-column flex-md-row justify-content-around ${
          imgRight ? '' : 'flex-md-row-reverse'
        } align-items-center justify-content-center`}
      >
        <div
          className={`${centerText ? 'text-center' : 'text-md-start'} ${
            imgRight ? 'me-md-5' : 'ms-md-5'
          }`}
          style={{ maxWidth: '600px' }}
        >
          <h2 className={centerText ? 'text-center' : ''}>{title}</h2>
          <p className={centerText ? 'text-center' : ''} style={{ whiteSpace: 'pre-line' }}>
            {description}
          </p>
          
          {hasButton && (
            <div className={`${centerText ? 'text-center' : 'text-md-start'}`}>
              <a 
                href={buttonLink} 
                className="btn btn-light mt-3"
              >
                {buttonText}
              </a>
            </div>
          )}
        </div>
        <div className="d-flex justify-content-center">
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
});