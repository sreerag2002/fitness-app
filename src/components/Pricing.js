
import React, { useState } from 'react';
import { Card, CardGroup, Button, Modal } from 'react-bootstrap';

import backgroundImage from '../assets/blue-light-gym-with-barbell-top_1340-40534.jpg';

import basicImage from '../assets/abstract-blur-gym-room_74190-3584.avif';
import standardImage from '../assets/equipment-machines-modern-gym-room-fitness-center-interior-with-equipment-bodybuilding-concept-background-crossfit-functional-training-practicing-powerlifting_771426-7074.avif';
import premiumImage from '../assets/gym-with-indoor-cycling-equipment_23-2149270210.avif';
import customImage from '../assets/interior-equipment-modern-gym-close-up-view-suspension-straps-sport-fitness-health_613910-20264.avif';

const Pricing = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleShowModal = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };
 
  const handleCloseModal = () => setShowModal(false);

  const cardStyle = {
    backgroundImage: `url(${basicImage}), url(${standardImage}), url(${premiumImage}), url(${customImage})`,
    height: '300px', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: '10px', 
    borderRadius: '15px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',     
    transition: 'box-shadow 0.4s ease, transform 0.4s ease',
    };

  const headingStyle = {
    textAlign: 'center',
    margin: '50px',
    color: 'white',
  };

  const cardBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%', 
  };

  const cardTextStyle = {
    fontWeight: 'bold',
  };


  const handleCardHover = (e) => {
    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    e.currentTarget.style.transform = 'translateY(-55px)';
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    e.currentTarget.style.transform = 'translateY(0)';
  };


  return (
    <div style={{ backgroundImage: `url(${backgroundImage} )`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' , overflowX: 'hidden'} }>
      <h1 style={headingStyle}>Our Pricing Packages</h1>
      <CardGroup>
        <Card style={cardStyle}
         onMouseOver={handleCardHover}
         onMouseLeave={handleCardLeave}
        >
          <Card.Body style={cardBodyStyle}>
            <Card.Title style={cardTextStyle}>Basic Plan</Card.Title>
            <Card.Text style={cardTextStyle}>Simple plan for beginners.</Card.Text>
            <Button variant="primary" onClick={() => handleShowModal('basic')}>Learn More</Button>
          </Card.Body>
        </Card>

        <Card style={cardStyle}
         onMouseOver={handleCardHover}
         onMouseLeave={handleCardLeave}
        >
          <Card.Body style={cardBodyStyle}>
            <Card.Title style={cardTextStyle}>Standard Plan</Card.Title>
            <Card.Text style={cardTextStyle}>Balanced plan for regular fitness enthusiasts.</Card.Text>
            <Button variant="primary"  onClick={() => handleShowModal('standard')}>Learn More</Button>
          </Card.Body>
        </Card>

        <Card style={cardStyle}
         onMouseOver={handleCardHover}
         onMouseLeave={handleCardLeave}
        >
          <Card.Body style={cardBodyStyle}>
            <Card.Title style={cardTextStyle}>Premium Plan</Card.Title>
            <Card.Text style={cardTextStyle}>Advanced plan for serious fitness goals.</Card.Text>
            <Button variant="primary"  onClick={() => handleShowModal('premium')}>Learn More</Button>
          </Card.Body>
        </Card>

        <Card style={cardStyle}
         onMouseOver={handleCardHover}
         onMouseLeave={handleCardLeave}
        >
          <Card.Body style={cardBodyStyle}>
            <Card.Title style={cardTextStyle}>Custom Plan</Card.Title>
            <Card.Text style={cardTextStyle}>Tailor-made plan to suit your unique needs.</Card.Text>
            <Button variant="primary"  onClick={() => handleShowModal('custom')}>Learn More</Button>
          </Card.Body>
        </Card>
      </CardGroup>

     
      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{`${selectedPlan} Plan Details`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPlan === 'basic' && (
            <>
              <h4>Rate: $4500</h4>
              <p> MONTHLY</p>
            </>
          )}
          {selectedPlan === 'standard' && (
            <>
              <h4>Rate: $9500</h4>
              <p>3 MONTHS</p>
            </>
          )}

          {selectedPlan === 'premium' && (
            <>
              <h4>Rate: $20000</h4>
              <p>YEARLY</p>
            </>
          )}

          {selectedPlan === 'custom' && (
            <>
              <h4>Rate: $13,500/11000</h4>
              <p>6 MONTHS/4 MONTHS</p>
            </>
          )}


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary">
            Book Trial
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Pricing;
