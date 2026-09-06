import { useEffect, useState } from "react";
import "./ProjectGallery.css";

function ProjectGallery({ screenshots }) {

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeLightbox = () => {
    setSelectedImage(null);
    setSelectedIndex(null);
  };

  const showPrevious = () => {

    const newIndex =
      selectedIndex === 0
        ? screenshots.length - 1
        : selectedIndex - 1;

    setSelectedIndex(newIndex);
    setSelectedImage(screenshots[newIndex]);
  };

  const showNext = () => {

    const newIndex =
      selectedIndex === screenshots.length - 1
        ? 0
        : selectedIndex + 1;

    setSelectedIndex(newIndex);
    setSelectedImage(screenshots[newIndex]);
  };

  useEffect(() => {

  const handleKeyDown = (event) => {

    if (!selectedImage) {
      return;
    }

    if (event.key === "ArrowLeft") {
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      showNext();
    }

    if (event.key === "Escape") {
      closeLightbox();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };

}, [selectedImage, selectedIndex]);

  return (
    <>
      <div className="project-gallery">

        {screenshots.map((screenshot, index) => (
        <div
            className="gallery-item"
            key={index}
            role="button"
            tabIndex={0}
            onClick={() => {
                setSelectedImage(screenshot);
                setSelectedIndex(index);
            }}
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();

                setSelectedImage(screenshot);
                setSelectedIndex(index);
                }
            }}
            >
            <img
                src={screenshot}
                alt={`Emotion Detection project screenshot ${index + 1}`}
            />

            <div className="gallery-overlay">
                <span>🔍 View Screenshot</span>
            </div>
            </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="lightbox"
          onClick={closeLightbox}
        >

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}

            <button
              className="lightbox-close"
              onClick={closeLightbox}
              aria-label="Close image"
            >
              ×
            </button>


            {/* Previous Button */}

            <button
              className="lightbox-prev"
              onClick={showPrevious}
              aria-label="Previous screenshot"
            >
              ‹
            </button>


            {/* Selected Image */}

            <img
              src={selectedImage}
              alt={`Emotion Detection project screenshot ${
                selectedIndex + 1
              }`}
            />


            {/* Next Button */}

            <button
              className="lightbox-next"
              onClick={showNext}
              aria-label="Next screenshot"
            >
              ›
            </button>


            {/* Image Counter */}

            <p className="lightbox-counter">
              {selectedIndex + 1} / {screenshots.length}
            </p>

          </div>

        </div>
      )}
    </>
  );
}

export default ProjectGallery;