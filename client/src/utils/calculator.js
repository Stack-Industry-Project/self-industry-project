// let workingYears = (retirementAge - currentAge)
// let retirementYears = (lifeExpectancy - retirementAge)
// let returnFromInterest = currentRetirementSavings - totalAmountContributed


const Calculation = (calculationProperties, currentYear) => {
  let { retirementAge, contributionPercentOfIncome, investmentAnnualReturn, lifeExpectancy, expectedAnnualIncomeIncreasePercent, newAnnualReturnPercentInRetirement, inflationRate } = calculationProperties
  let currentYearData = { ...currentYear }
  let workingSavingsArr = []

  // loop through for every working year
  for (let i = currentYear.currentAge; i <= retirementAge; i++) {
    // For each working year iteration, push an object into the workingSavings array that contains a key
    // for every input. Each object represents a year.
    workingSavingsArr.push({ ...currentYearData });
    currentYearData.year++
    currentYearData.currentAge++
    currentYearData.currentRetirementSavings = parseFloat(((currentYearData.currentRetirementSavings + (currentYearData.currentSalary * contributionPercentOfIncome)) * investmentAnnualReturn).toFixed(2))
    currentYearData.currentSalary = parseFloat((currentYearData.currentSalary * expectedAnnualIncomeIncreasePercent).toFixed(2))
    currentYearData.totalAmountContributed = parseFloat(currentYearData.currentSalary * contributionPercentOfIncome).toFixed(2)
    currentYearData.returnFromInterest = parseFloat(currentYearData.currentRetirementSavings - currentYearData.totalAmountContributed).toFixed(2)
  }
  return workingSavingsArr
};



// sample data

// [{
//   year: 2021
//   age: 30,
//   currentRetirementSavings: 0,
//   salary: 55000,
//   totalAmountContributed: 0,
//   returnFromInterest: 0
// },
// {
//   year: 2022,
//   age: 31,
//   currentRetirementSavings: 3038.75,
//   salary: 56100,
//   totalAmountContributed: 0,
//   returnFromInterest: 0
// }
// ]

export default Calculation;