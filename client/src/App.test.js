import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { TestFunction } from './components/calculator';

describe('calculation', () => {
  it('returns the correct retirement savings given all the inputs', () => {
    // setup test data

    // call the function with the test data
    age = TestFunction(age)

    // asserts what should be true
    expect(age).to.equal(30)
  })
})