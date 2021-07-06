import React from 'react';
import { Line, Scatter } from 'react-chartjs-2';
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
  console.log(totalSavings)
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
        pointStyle: 'line',
        pointHitRadius: 20,
        stepped: false,
        fill: true,
        borderDash: [2000, 2200],
        elements: {
          point: {
            radius: 0
          }
        },

      },
    ]
  };

  return (
    <div className="graph">
      <Line data={data} />
    </div>
  );
}
