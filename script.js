"use strict";

const reactionScore = document.querySelector(
  '.summary-item[data-item-type="accent-1"] .summary-score span'
).textContent;
const memoryScore = document.querySelector(
  '.summary-item[data-item-type="accent-2"] .summary-score span'
).textContent;
const verbalScore = document.querySelector(
  '.summary-item[data-item-type="accent-3"] .summary-score span'
).textContent;
const visualScore = document.querySelector(
  '.summary-item[data-item-type="accent-4"] .summary-score span'
).textContent;
const score = document.querySelector(".result-score span");

// console.log(reactionScore);
