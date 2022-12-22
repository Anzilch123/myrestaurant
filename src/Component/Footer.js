import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div><Card className="text-center">
    <Card.Header>About</Card.Header>
    <Card.Body>
      <Card.Title>Feel The Taste</Card.Title>
      <Card.Text>
       We Love Sharing Good Food With Good People !
      </Card.Text>
      <Button variant="primary">*Visit Again*</Button>
    </Card.Body>
    <Card.Footer className="text-muted">Sunday - Monday 5.pm to 5.am</Card.Footer>
  </Card></div>
  )
}

export default Footer