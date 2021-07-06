import './App.css';
import Calculator from './components/calculator'

import React, { useState} from 'react'
import {Line} from 'react-chartjs-2'
import { Header, Footer } from './components/common'

import LineChart from './components/LineChart';

function App() {
  let [graphData, setGraphData] = useState([])

  return (
    <>
      <Header />
      <section className='content'>
      <div>
        <Calculator setterFunction={setGraphData} /> 
      </div>
      <LineChart classname="line" data={graphData} />   
      </section>
      <Footer />
    </>
  );
}

export default App;
