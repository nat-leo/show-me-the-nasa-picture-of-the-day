import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState([])
  const key = process.env.REACT_APP_NASA_API_KEY
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${ key }`, {method: 'GET'})
    .then(response => response.json())
    .then(images => {setImage(images)})
  }, [])
  console.log('image ' + image["url"])
  return (
    <div>
      <img className='background-image' src={image["url"]}/>
    </div>
  );
}

export default App;
