"use strict";

const scoresArray = [];

const reactionScore = parseInt(
  document.querySelector(
    '.summary-item[data-item-type="accent-1"] .summary-score span'
  ).textContent
);

const memoryScore = parseInt(
  document.querySelector(
    '.summary-item[data-item-type="accent-2"] .summary-score span'
  ).textContent
);

const verbalScore = parseInt(
  document.querySelector(
    '.summary-item[data-item-type="accent-3"] .summary-score span'
  ).textContent
);

const visualScore = parseInt(
  document.querySelector(
    '.summary-item[data-item-type="accent-4"] .summary-score span'
  ).textContent
);

const score = document.querySelector(".result-score span");

scoresArray.push(reactionScore, memoryScore, verbalScore, visualScore);

let total = 0;
for (let i = 0; i < scoresArray.length; i++) {
  total += scoresArray[i];
}
const avg = parseInt(total / scoresArray.length);

score.textContent = avg.toString();
