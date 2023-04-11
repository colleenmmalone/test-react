import React, { useEffect, useRef } from 'react';
// import './styles.css';

const SlideInImages = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const images = imagesRef.current
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide');
        } else {
          entry.target.classList.remove('animate-slide');
        }
      });
    }, { threshold: 0.1 });

    images.forEach((image) => observer.observe(image));

    return () => {
      images.forEach((image) => observer.unobserve(image));
    };
  }, []);

  return (
    <div>
      <img ref={(el) => imagesRef.current[0] = el} className='' src="https://picsum.photos/id/237/200/300" alt=" 1" />
      <img ref={(el) => imagesRef.current[1] = el} src="image2.jpg" alt=" 2" />
      <img ref={(el) => imagesRef.current[2] = el} src="image3.jpg" alt=" 3" />
    </div>
  );
};


export default SlideInImages;