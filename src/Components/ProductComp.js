import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { images } from '../Shared/Constant/staticData';
import './ProductComp.css';  // Import your custom CSS file

const ProductComp = () => {
  return (
    <div>
      
      <div className="card-container">
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images.one} style={{ height: '300px', objectFit: 'cover' }}/>
          <Card.Body>
            <Card.Title>Gold Chain</Card.Title>
            
            
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images.two} style={{ height: '300px', objectFit: 'cover' }}/>
          <Card.Body>
            <Card.Title>Gold Bracelet</Card.Title>
            
            
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images.three} style={{ height: '300px', objectFit: 'cover' }}/>
          <Card.Body>
            <Card.Title>Pearl Necklace</Card.Title>
            
            
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images.four} style={{ height: '300px', objectFit: 'cover' }}/>
          <Card.Body>
            <Card.Title>Gold Chain</Card.Title>
            
            
          </Card.Body>
        </Card>
      </div>
      <hr/>
      <div className="card-container">
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images.five} style={{ height: '300px', objectFit: 'cover' }}/>
          <Card.Body>
            <Card.Title>Gold Cross</Card.Title>
            
            
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images.six} style={{ height: '300px', objectFit: 'cover' }}/>
          <Card.Body>
            <Card.Title>Green Sapphire</Card.Title>
            
            
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images.seven} style={{ height: '300px', objectFit: 'cover' }}/>
          <Card.Body>
            <Card.Title>Gold Ring</Card.Title>
            
            
          </Card.Body>
        </Card>
        <Card className='card' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={images.eight} style={{ height: '300px', objectFit: 'cover' }}/>
          <Card.Body>
            <Card.Title>Pure Gold Ring</Card.Title>
            
            
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ProductComp;
