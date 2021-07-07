import React from 'react'
import { Card } from 'react-bootstrap'

const Card2 = () => {
  return (
    <Card varient='dark' className="bg-dark">
    <Card.ImgOverlay >
      <Card.Text>
       You can reduce your expenses in retirement by paying off
       debts and sticking to a budget.
        e.g (paying off a mortgage)
      </Card.Text>
     
    </Card.ImgOverlay>
  </Card>
  )
}

export default Card2
