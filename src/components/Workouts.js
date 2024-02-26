import React, { useState } from 'react';
import backgroundImage from '../assets/blue-light-gym-with-barbell-top_1340-40534.jpg';

import './Workouts.css';

const Workouts = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    setName('');       
    setRating('');
    setReview('');
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage} )`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' , overflowX: 'hidden'} } >
      <h1 className='reviewtext'>Reviews</h1>
     


      <form onSubmit={handleSubmit}>
        <label className='container'>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label className='container'>
          Rating:
          <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
        </label>
        <br />
        <label className='container'>
          Review:
          <textarea value={review} onChange={(e) => setReview(e.target.value)} />
        </label>
        <br />
      <div className='container'>  <button type="submit">Submit Review</button></div>
      </form>
    </div>
  );
};

export default Workouts;
