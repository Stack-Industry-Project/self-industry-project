import React from 'react';
import { Line } from 'react-chartjs-2';
//import Calculator and Calculation


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
        borderColor: "#FF8C00"
      },
      {
        label: "Total Contribution",
        data: totalContributed,
        fill: false,
        borderColor: "#00ADEE"
      }
    ]
  };
  return (
    <div className="graph">
      <Line data={data} />
    </div>
  );
}
