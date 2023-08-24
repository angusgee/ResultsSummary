"use strict";

const scoreSelectors = ["accent-1", "accent-2", "accent-3", "accent-4"];

const scoresArray = scoreSelectors.map((type) =>
  parseInt(
    document.querySelector(`.summary-item[data-item-type="${type}"] span`)
      .textContent
  )
);

const total = scoresArray.reduce((sum, score) => sum + score, 0);

const avg = Math.round(total / scoresArray.length);

console.log(avg);

document.querySelector(".result-score span").textContent = avg.toString();
