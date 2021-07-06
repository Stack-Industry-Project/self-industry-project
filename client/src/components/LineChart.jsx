import React from 'react';
import { Line } from 'react-chartjs-2';
import '../App.css'
//import Calculator and Calculation

    //allows you to set a range between two numbers
    const Range = (start,end) => {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }

    
    export default function LineChart(props) {
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
  