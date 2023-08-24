"use strict";

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => initialize(data));

function initialize(data) {
  const totalScore = data.reduce((sum, item) => sum + item.score, 0);
  const avg = Math.round(totalScore / data.length);

  document.querySelector(".result-score span").textContent = avg;

  const summaryItems = document.querySelectorAll(".summary-item");

  data.forEach((item, index) => {
    // Create new Image element and set the src attribute programmatically to prevent XSS
    const imgElement = new Image();
    imgElement.src = item.icon;
    imgElement.alt = `${item.category} icon`;
    summaryItems[index].querySelector("svg").replaceWith(imgElement);

    // Update title
    summaryItems[index].querySelector(".summary-item-title").textContent =
      item.category;

    // Update score
    summaryItems[index].querySelector(".summary-score span").textContent =
      item.score;
  });

  console.log(avg);
}
