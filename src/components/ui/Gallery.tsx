import React from "react";
import { images } from "../../lib/mock/Gallery";
export const Gallery: React.FC = () => {
  return (
    <div className="image-container">
      <p className="image-text">What are your interests?</p>
      <div className="image-wrapper">
        {images.map((image) => (
          <div key={image.id} className={`image-content img-${image.id}`}>
            <img src={image.src} alt={image.alt} />
            <div className="image-title">
              {image.isChecked && <i className="fas fa-check"></i>}
              <p className="img-title">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="button">Set</button>
    </div>
  );
};
