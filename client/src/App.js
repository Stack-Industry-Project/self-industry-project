import './App.css';
import Calculator from './components/calculator'
import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

import LineChart from './components/LineChart';

function App() {
  let [graphData, setGraphData] = useState([])

  return (
    <>
      <div>
        <Calculator setterFunction={setGraphData} />
      </div>
      <div>
        <LineChart data={graphData} />
      </div>
    </>
  );
}

export default App;
