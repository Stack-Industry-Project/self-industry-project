import React from 'react';
import { Line, Scatter } from 'react-chartjs-2';

//import Calculator and Calculation

    //allows you to set a range between two numbers
    const Range = (start,end) => {
        return Array(end - start + 1).fill().map((_, idx) => start + idx)
    }
    const image = new Image();
    image.src = '/Users/chadwickmini/Desktop/Self-retire/self-industry-project/client/src/401kphoto.jpeg';
    

const plugin = {
  id: 'custom_canvas_background_image',
  beforeDraw: (chart) => {
    if (image.complete) {
      const ctx = chart.ctx;
      const {top, left, width, height} = chart.chartArea;
      const x = left + width / 2 - image.width / 2;
      const y = top + height / 2 - image.height / 2;
      ctx.drawImage(image, x, y);
    } else {
      image.onload = () => chart.draw();
    }
  }
};
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
                borderWidth: 5,
                borderColor: "#00ADEE",
                hoverBorderWidth: 20,
                point: false,
                pointStyle:'line',
                pointHitRadius: 20,
                stepped: false,
                fill: true,
                borderDash: [2000,2200],
                elements: {
                  point: {
                    radius: 0
                  }
                },

              },
              // {
              //   label: "Total Contribution",
              //   type: 'line',
              //   data: totalContributed,
              //   showLine: false,
              //   borderDash: [2000,2200],
              //   options: {
              //     indexAxis: 'y',
              //     scales: {
              //       x: {
              //         beginAtZero: false
              //       }
              //     }
              //   },
              //   fill: false,
              //   borderColor: "#00ADEE",
              //   backgroundColor: "#00ADEE",
              //   hoverBorderWidth: 35,
              
              // }
            ]
          };
    return (
      <div className="graph">
        <Line data={data} />
      </div>
    );
  }
  