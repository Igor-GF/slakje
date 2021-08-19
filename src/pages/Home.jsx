import React from 'react';

const Home = ({ start }) => {
  return (
    <div className="home-container" onClick={start}>
      <h1>Slakje App</h1>
      <h3>(prototype version)</h3>

      <p>Story:</p>
      <h3>Volendorpje Sleeps</h3>

      <p>Company:</p>
      <h3>Studio Slak</h3>

      <p>Facilitator:</p>
      <h3>Indietopia Incubator/Accelerator</h3>
    </div>
  )
}

export default Home;
