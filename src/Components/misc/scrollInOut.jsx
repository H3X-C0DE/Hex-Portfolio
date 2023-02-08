import React, { useState, useEffect, useRef } from "react";

const FadeInOut = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1s",
      }}
    >
      {children}
    </div>
  );
};

export default FadeInOut;
