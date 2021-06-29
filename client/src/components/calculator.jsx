import React, { useState, useEffect } from 'react';
import Calculation from '../utils/calculator'

const Calculator = () => {

  let defaultCalculationProperties = {
    retirementAge: 67,
    contributionPercentOfIncome: 0.05,
    investmentAnnualReturn: 1.105,
    lifeExpectancy: 90,
    expectedAnnualIncomeIncreasePercent: 1.02,
    newAnnualReturnPercentInRetirement: 1.025,
    inflationRate: 0.081,
    withdrawalPercentOfRetirement: 0.04
  }

  let defaultCurrentYear = {
    year: new Date().getFullYear(),
    currentAge: 30,
    currentRetirementSavings: 0,
    currentSalary: 55000,
    totalAmountContributed: 0,
    returnFromInterest: 0
  }

  let [calculationProperties, setCalculationProperties] = useState(defaultCalculationProperties)
  let [currentYear, setCurrentYear] = useState(defaultCurrentYear)

  let [savingsData, setSavingsData] = useState([])

  useEffect(() => {

    const fullData = Calculation(calculationProperties, currentYear)
    setSavingsData(fullData)
    console.log(fullData)
  }, [calculationProperties, currentYear])

  return (
    <div>
      <h4>Current Age</h4>
      <input value={currentYear.currentAge} onChange={(event) => { setCurrentYear({ ...currentYear, currentAge: event.target.value }) }}></input>
      <h4>Current Retirement Savings</h4>
      <input value={currentYear.currentRetirementSavings} onChange={(event) => { setCurrentYear({ ...currentYear, currentRetirementSavings: event.target.value }) }}></input>
      <h4>Expected Retirement Age</h4>
      <input value={calculationProperties.retirementAge} onChange={(event) => { setCalculationProperties({ ...calculationProperties, retirementAge: event.target.value }) }}></input>
      <h4>Contribution % of Income</h4>
      <input value={calculationProperties.contributionPercentOfIncome} onChange={(event) => { setCalculationProperties({ ...calculationProperties, contributionPercentOfIncome: event.target.value }) }}></input>
      <ul>
        {savingsData.map(year => (
          <li key={year.year}> {`Year: ${year.year} Age: ${year.currentAge} Savings: ${year.currentRetirementSavings} Contributions: ${year.totalAmountContributed} Total Return From Interest ${year.returnFromInterest}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default Calculator