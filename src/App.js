import React from 'react';
import FadeInImage from './pages/FadeInImage';
// import SlideInImages from './pages/SlideInImages';

const images = [
  {
    src: 'https://picsum.photos/id/237/200/300',
    alt: 'Random image 1',
  },
  {
    src: 'https://picsum.photos/id/238/200/300',
    alt: 'Random image 2',
  },
  {
    src: 'https://picsum.photos/id/239/200/300',
    alt: 'Random image 3',
  },
];

const App = () => {
  return (
    <div className='flex flex-col space-y-[400px]'>

      {images.map((image) => (
        <div className='my-[200px]'>
        <FadeInImage key={image.src} src={image.src} alt={image.alt} />
        {/* <SlideInImages /> */}
        </div>
      ))}
    </div>
  );
};

export default App;
