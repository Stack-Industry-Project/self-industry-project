import React, { useState, useEffect } from 'react';
import Calculation from '../utils/calculator'

const Calculator = () => {

  let defaultCalculationProperties = {
    retirementAge: 67,
    contributionPercentOfIncome: 0.05,
    investmentAnnualReturn: 1.105,
    lifeExpectancy: 90,
    expectedAnnualIncomeIncreasePercent: 1.02,
    newAnnualReturnPercentInRetirement: 0.082,
    inflationRate: 0.081,
  }

  let currentYear = {
    year: new Date().getFullYear(),
    currentAge: 30,
    currentRetirementSavings: 0,
    currentSalary: 55000,
    totalAmountContributed: 0,
    returnFromInterest: 0
  }

  let [calculationProperties, setCalculationProperties] = useState(defaultCalculationProperties)
  let [savingsData, setSavingsData] = useState([])

  useEffect(() => {

    const fullData = Calculation(calculationProperties, currentYear)
    setSavingsData(fullData)
    console.log(fullData)
  }, [calculationProperties])

  return (
    <div>
      <input value={calculationProperties.retirementAge} onChange={(event) => { setCalculationProperties({ ...calculationProperties, retirementAge: event.target.value }) }}></input>
      <ul>
        {savingsData.map(year => (
          <li key={year.year}> {`Year: ${year.year} Age: ${year.currentAge} Savings: ${year.currentRetirementSavings} Contributions: ${year.totalAmountContributed} Total Return From Interest ${year.returnFromInterest}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default Calculator