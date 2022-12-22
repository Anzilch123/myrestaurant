import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

function Restaurantcards({restaurant}) {
    console.log(restaurant);
  return (
    
    <Link style={{textDecoration:"none",color:"white",}} to={`/Viewrestaurant/${restaurant.id}`}><Card className='m-2'>
      
    <Card.Img variant="top" className='p-2 ' src={restaurant.photograph} />
    <Card.Body >
      <Card.Title>{restaurant.name}</Card.Title>
      <Card.Text>
        {restaurant.neighborhood}
      </Card.Text>
      <Spinner animation="grow" variant="warning" /><Button variant="primary">ORDER NOW</Button> <Spinner animation="grow" variant="info" />
    
    </Card.Body>
  </Card></Link>
  )
}

export default Restaurantcards