import './App.css';
import Header from './components/Header';

function FigmaEmbed() {
  return (
    <div className='App-header'>
      <iframe 
      style={{border: "2px solid #0003" }}

      width="500" 
      height="800" 
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlkbPnwl2TOMaTFeqXHvPTg%2FBand-Website-Prototype%3Fpage-id%3D0%253A1%26node-id%3D1%253A2%26viewport%3D-4%252C296%252C0.5%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2" 
      title="Band Mobile App from Figma"
      allowfullscreen 
      />

    </div>
  );
}

export default FigmaEmbed;
