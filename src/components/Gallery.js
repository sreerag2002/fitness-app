import React from 'react';
import './Gallery.css';
import Card from 'react-bootstrap/Card';
import backgroundImage from '../assets/blue-light-gym-with-barbell-top_1340-40534.jpg';



const Gallery = ({ images }) => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage} )`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' , overflowX: 'hidden'} } className="gallery">
      <h1 className='text'>CHECK OUT OUR GALLERY</h1>
      <div className="card-container">
    
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{ height: '70%' }}  src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" />
      <Card.Body>
        <Card.Title>Training Ability</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{ height: '70%' }}  src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>Community and Socializing </Card.Title>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{ height: '70%' }}  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>Clean and Hygienic</Card.Title>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{ height: '70%' }}  src="https://images.unsplash.com/photo-1540496905036-5937c10647cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>Equipment and Space</Card.Title>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{ height: '70%' }}  src="https://images.unsplash.com/photo-1494178270175-e96de2971df9?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>Motivation and accountability</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{ height: '70%' }}  src="https://images.unsplash.com/photo-1596357395104-ba989e72b5ec?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>Hours of Operation and Location</Card.Title>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{ height: '70%' }}  src="https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>High-Quality Exercise Equipment</Card.Title>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{ height: '70%' }}  src="https://images.unsplash.com/photo-1542766788-a2f588f447ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title> Well-Designed Space and Facility</Card.Title>
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  style={{ height: '70%' }}  src="https://media.istockphoto.com/id/1345019454/photo/young-bodybuilder-doing-a-deadlift-at-the-outdoor-gym.jpg?s=612x612&w=0&k=20&c=mWX9gdyr4acQ6PLPA3k9ktC18ceM6LCDA38cfdNAe-w=" />
      <Card.Body>
        <Card.Title>Personal Training Services</Card.Title>
      </Card.Body>
    </Card>

      </div>
    </div>
  );
};

export default Gallery;
