import './App.css';
import Calculator from './components/calculator'
import CheckContribution from './components/check-contribution';

import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Header, Footer } from './components/common'

import LineChart from './components/LineChart';

function App() {
  let [graphData, setGraphData] = useState([])
  let [checkCont, setCheckCont] = useState(0)

  return (
    <>
      <Header />
      <section className='content'>
        <div>
          <Calculator setterFunction={setGraphData} setCheckCont={setCheckCont} />
        </div>
        <LineChart className="line" data={graphData} />
        {checkCont !== 0 &&
          <CheckContribution contributionPercentOfIncome={checkCont} />
        }
      </section>
      <Footer />
    </>
  );
}

export default App;
