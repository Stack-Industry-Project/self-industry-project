import React from 'react'
import { Card } from 'react-bootstrap'

const Card3 = () => {
  return (
    <Card varient='dark' className="bg-dark">
      <Card.Img className='checkmark' alt="Card image" />
      <Card.ImgOverlay >
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Card3
