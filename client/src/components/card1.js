import React from 'react'
import { Card } from 'react-bootstrap'

const Card1 = () => {
  return (
    <Card varient='dark' className="bg-dark">
      <Card.Img className='checkmark' alt="Card image" />
      <Card.ImgOverlay >
        <Card.Text>
          We recommend investing at least 10% for maximum savings potential
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Card1
