import React, { useState } from 'react';
let age = 30;

const FrontEnd = (age) => {
  return (
    <div>
      <h1> Front-end working</h1>
    </div>
  )
}

const TestFunction = () => {
  let age = 30
  let expectedRetirementAge = 67
  let currentRetirementSavings = 0
  let contributionPercentOfIncome = 0.05
  let investmentAnnualReturn = 1.15
  let lifeExpectancy = 90
  let salary = 550000
  let currentSalary
  let expectedAnnualIncomeIncreasePercent = 1.02
  let totalWorkingYears = (expectedRetirementAge - age)
  let retirementYears = (lifeExpectancy - expectedRetirementAge)

  // start with an empty array

  // loop through for every working year

  // For each iteration, push an object into the array that contains a key for every input. 
  // Each object represents a year

  [{
    age: 30,
    currentRetirementSavings: 0,
    salary: 55000,
    totalAmountContributed: 0,
    returnFromInterest: 0
  },
    {
      age: 31,
      currentRetirementSavings: 3038.75,
      salary: 56100,
      totalAmountContributed: 0,
      returnFromInterest: 0
    }
  ]






  for (let i = 1; i < totalWorkingYears; i++) {
    currentSalary = salary * expectedAnnualIncomeIncreasePercent

  }
  return (
    currentSalary
  )
}

export default { FrontEnd, TestFunction }