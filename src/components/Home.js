import React from 'react';
import BackgroundImage from '../assets/pexels-victor-freitas-841130.jpg'; 
import './Home.css'

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <h1 className='text'>Welcome to Our Fitness Gym!</h1>
    </div>
  );
};

export default Home;
