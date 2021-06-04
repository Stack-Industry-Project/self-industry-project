import React, { useState } from 'react';
let age = 30;

const FrontEnd = (age) => {
  return (
    <div>
      <h1> Front-end working</h1>
    </div>
  )
}

const TestFunction = (age) => {
  return (
    age
  )
}

export default { FrontEnd, TestFunction }