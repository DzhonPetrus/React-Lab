import { useState, useEffect } from "react";

function Dog() {
  const [dogImg, setDogImg] = useState("");

  // Will only run once on the First Render
  useEffect(() => fetchDog, []);

  const fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogImg(data.message))
  }

  return (
    <>
      <div className='container'>
        <h2>Dog</h2>
        <button className='btn btn-success' onClick={() => fetchDog()}>Fetch New Dog</button>
        <br/>
        <img className='img-fluid' alt='dog' height={300} width={300} src={dogImg} />
      </div>
    </>
  );
}



export default Dog;