import React from 'react'
import { Card } from 'react-bootstrap'

const Card1 = () => {
  return (
    <Card varient='dark' className="bg-dark">
      <Card.ImgOverlay >
        <Card.Text >
         We recommend investing atleast 10% of your income
         for maximum savings potential.
        </Card.Text>
       
      </Card.ImgOverlay>
    </Card>
  )
}

export default Card1
