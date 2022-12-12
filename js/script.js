// Copyright (c) 2022 Darcy Murphy All rights reserved
//
// Created by: Darcy Murphy
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates pay and income tax
 */
function enterClicked() {
  //input
  const hours = parseInt(document.getElementById("hours-worked").value)
  const rate = parseInt(document.getElementById("hour-rate").value)

  //process
  const takeHomeSalary = hours * rate * (1.0 - 0.18)
  const INCOMETAX = hours * rate * 0.18

  //output
  document.getElementById("pay").innerHTML =
    "Your pay will be: $" + takeHomeSalary.toFixed(2)
  document.getElementById("income-tax").innerHTML =
    "The government will take: $" + INCOMETAX.toFixed(2)
}
