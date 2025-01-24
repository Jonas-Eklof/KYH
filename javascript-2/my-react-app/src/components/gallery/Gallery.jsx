import React from "react";
import "./Gallery.css";

function Gallery() {
  const images = import.meta.glob("../../assets/images/*.jpg", { eager: true });

  return (
    <div className="gallery-container">
      {Object.entries(images).map(([path, module], index) => (
        <img key={index} src={module.default} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
}

export default Gallery;
