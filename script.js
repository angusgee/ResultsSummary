"use strict";

const scoreSelectors = ["accent-1", "accent-2", "accent-3", "accent-4"];

const scoresArray = scoreSelectors.map((type) =>
  parseInt(
    document.querySelector(`.summary-item[data-item-type="${type}"] span`)
      .textContent
  )
);

console.log(scoresArray);

const score = document.querySelector(".result-score span");

let total = 0;
for (let i = 0; i < scoresArray.length; i++) {
  total += scoresArray[i];
}
const avg = parseInt(total / scoresArray.length);

score.textContent = avg.toString();
