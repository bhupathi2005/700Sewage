import React, { useState, useEffect } from "react";

const ImageComparisonSlider = ({ before, after }) => {
  const [position, setPosition] = useState(50);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isPaused || isDragging) return; // Pause animation when interacting

    const intervalId = setInterval(() => {
      setPosition((prev) => {
        const newPosition = prev + direction * 0.5;
        if (newPosition >= 100) {
          setDirection(-1);
          return 100;
        }
        if (newPosition <= 0) {
          setDirection(1);
          return 0;
        }
        return newPosition;
      });
    }, 20);

    return () => clearInterval(intervalId);
  }, [direction, isPaused, isDragging]);

  const handleStart = (e) => {
    setIsDragging(true);
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleEnd);
    document.addEventListener("touchmove", handleMove, { passive: false });
    document.addEventListener("touchend", handleEnd);
  };

  const handleMove = (e) => {
    e.preventDefault(); // Prevent scrolling on mobile
    const slider = document.getElementById("slider-container");
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const newPosition = ((clientX - rect.left) / rect.width) * 100;

    if (newPosition >= 0 && newPosition <= 100) {
      setPosition(newPosition);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMove);
    document.removeEventListener("mouseup", handleEnd);
    document.removeEventListener("touchmove", handleMove);
    document.removeEventListener("touchend", handleEnd);
  };

  return (
    <div style={{ width: "100%", maxWidth: "450px", margin: "0 auto" }}>
      <div
        id="slider-container"
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          overflow: "hidden",
          borderRadius: "0.5rem",
          backgroundColor: "#111827",
          touchAction: "none", // Prevents unwanted gestures on mobile
        }}
      >
        {/* After Image (Full Background) */}
        <img
          src={after}
          alt="After"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Before Image (Clipped) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`,
          }}
        >
          <img
            src={before}
            alt="Before"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Before & After Labels */}
        <div
          style={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "red",
            borderRadius: "9999px",
            color: "white",
            fontWeight: "600",
            fontSize: "1.25rem",
            opacity: direction === 1 ? 1 : 0,
          }}
        >
          Before
        </div>
        <div
          style={{
            position: "absolute",
            top: "2rem",
            right: "2rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#CAEE5A",
            borderRadius: "9999px",
            color: "white",
            fontWeight: "600",
            fontSize: "1.25rem",
            opacity: direction === -1 ? 1 : 0,
          }}
        >
          After
        </div>

        {/* Slider Line & Handle */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${position}%`,
            width: "2px",
            backgroundColor: "white",
            cursor: "pointer",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "2rem",
              height: "2rem",
              backgroundColor: "white",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              cursor: "grab",
            }}
            onMouseDown={handleStart}
            onTouchStart={handleStart}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12H3M3 12l7-7M3 12l7 7M21 12l-7-7M21 12l-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
