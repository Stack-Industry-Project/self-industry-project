import './App.css';
import Header from './components/Header'
import Calculator from './components/calculator'
import React, { useState} from 'react'
import {Line} from 'react-chartjs-2'

import LineChart from './components/LineChart';

function App() {
  let [graphData, setGraphData] = useState([])

  return (
    <>
     <Header />
     <LineChart classname="line" data={graphData} />
     
    <div>
      <Calculator setterFunction={setGraphData} />
     
    </div>
    </>
  );
}

export default App;
