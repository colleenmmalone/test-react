import React, { useEffect, useRef, useState } from 'react';

const FadeInImage = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const image = imgRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(image);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    observer.observe(image);

    return () => {
      observer.unobserve(image);
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={` ${isVisible? "animate-slide" :"" } `}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity .2s ease-in-out',
      }}
    />
  );
};

export default FadeInImage;
