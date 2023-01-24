"use strict";

import { getEachHouseData } from "../../controller/data_handler.js";

const homePageContents = document.querySelector(".home-page-contents");
const bedCountBtn = document.querySelector("#bed-count-btn");
const filterPriceBtn = document.querySelector("#filter-price-btn");
const searchBtn = document.querySelector("#search-btn");
const resetFilterBtn = document.querySelector("#reset-btn");

// to add homePage content based on data provided or goes with default(all data )
function addHomePageContent(houseData = getEachHouseData()) {
  homePageContents.innerHTML = "";
  Object.entries(houseData).forEach((entry) => {
    const [key, value] = entry;
    const html = `
    <div class="home-page-item">
      <div class="house-img"></div>
      <div class="house-price">${value["price"] * 10000} $</div>
      <div class="beds-baths-sqft">${value["beds"]} Bds - ${
      value["baths"]
    } Ba - ${value["sqft"]} ft2</div>
  </div>`;
    homePageContents.insertAdjacentHTML("beforeend", html);
  });
}

// filter function button functionality
filterPriceBtn.addEventListener("click", function () {
  const priceRangeSetter = document.querySelector(".filter-price");
  priceRangeSetter.classList.remove("hidden");
});

// searchButton function button functionality
searchBtn.addEventListener("click", function () {
  const selectedBedCount = Number(
    document.querySelector("#bed-count-select").value
  );
  const minPrice =
    Number(document.querySelector("#input-number-min").value) / 10000;
  const maxPrice =
    Number(document.querySelector("#input-number-max").value) / 10000;

  addHomePageContent(
    createFilteredContentList(selectedBedCount, minPrice, maxPrice)
  );
});

// reset-filter function button functionality
resetFilterBtn.addEventListener("click", () => {
  addHomePageContent();
});

function createFilteredContentList(bedCount, minPrice, maxPrice) {
  const houseData = getEachHouseData();
  const filteredData = [];
  Object.entries(houseData).forEach((entry) => {
    let isToPop = false;
    const [key, value] = entry;
    filteredData.push(value);

    //bedcount filter
    if (value["beds"] !== bedCount) {
      isToPop = true;
    }
    //min-price filter
    if (minPrice !== 0) {
      if (value["price"] < minPrice) {
        isToPop = true;
      }
    }
    //max-filter filter
    if (maxPrice !== 0) {
      if (value["price"] > maxPrice) {
        isToPop = true;
      }
    }

    // pops the value which is not needed based on the flag
    if (isToPop) {
      filteredData.pop(value);
    }
  });
  return filteredData;
}
export { addHomePageContent };
