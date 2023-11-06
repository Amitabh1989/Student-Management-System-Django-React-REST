import React, { useState } from "react";

export function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  ];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="rounded-xl relative">
      <img
        src={images[currentImage]}
        alt={`image ${currentImage + 1}`}
        className="h-[calc(100vh-2rem)] w-full object-cover"
      />
      <div className="absolute flex space-x-2 left-1/2 bottom-4 transform -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImage ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <button
        className="absolute top-2/4 left-4 transform -translate-y-2/4"
        onClick={prevImage}
      >
        {/* Insert your previous arrow icon here */}
      </button>
      <button
        className="absolute top-2/4 right-4 transform -translate-y-2/4"
        onClick={nextImage}
      >
        {/* Insert your next arrow icon here */}
      </button>
    </div>
  );
}
