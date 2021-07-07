import React from 'react';
import { Line, Scatter } from 'react-chartjs-2';
import {Card, Button} from 'react-bootstrap'
import '../App.css'

export default function LineChart(props) {
  if (props.data.length === 0) {

    return (
      <>

      </>
    )
  }
        const labels = props.data.map(L => L.currentAge)
        const totalSavings = props.data.map(S => S.currentRetirementSavings)
        const totalContributed = props.data.map(TC => TC.totalAmountContributed)
        const constributionPercent = props.data.map(CP => CP.contributionPercentOfIncome)
        console.log(constributionPercent)
        const data = {
            labels: labels,
            datasets: [
              {
                label: "Savings",
                data: totalSavings,
                backgroundColor: "#00ADEE",
                borderWidth: 5,
                borderColor: "#00ADEE",
                hoverBorderWidth: 20,
                point: false,
                pointStyle:'line',
                pointHitRadius: 1000,
                stepped: false,
                fill: true,
                borderDash: [2000,2200],
                elements: {
                  point: {
                    radius: 0
                  }
                },

              }]
            
          };
  return (
    <div className="graph">
      <h1 className='report'>Your Report</h1>
      <Line data={data} />
      <div className='box'>
        
      <Card varient='dark' className="bg-dark">
  <Card.Img className='checkmark' alt="Card image" />
  <Card.ImgOverlay >
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>

<Card varient='dark' className="bg-dark">
  <Card.Img src="" alt="Card image" />
  <Card.ImgOverlay >
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>

<Card varient='dark' className="bg-dark">
  <Card.Img src="" alt="Card image" />
  <Card.ImgOverlay >
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>

      </div>
    </div>
  );
}
