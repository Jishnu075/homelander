"use strict";

import { getEachHouseData } from "../../controller/data_handler.js";

// const uploadSection = document.querySelector(".upload-section");
const homePageContents = document.querySelector(".home-page-contents");
const bedCountBtn = document.querySelector("#bed-count-btn");
const filterPriceBtn = document.querySelector("#filter-price-btn");
const searchBtn = document.querySelector("#search-btn");

// const houseData = localStorage.data;

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

// bedCountBtn.addEventListener("click", function () {});
filterPriceBtn.addEventListener("click", function () {
  const priceRangeSetter = document.querySelector(".filter-price");
  priceRangeSetter.classList.remove("hidden");
});

searchBtn.addEventListener("click", function () {
  const selectedBedCount = Number(
    document.querySelector("#bed-count-select").value
  );
  const minPrice =
    Number(document.querySelector("#input-number-min").value) / 10000;
  const maxPrice =
    Number(document.querySelector("#input-number-max").value) / 10000;

  //   createFilteredContentList(selectedBedCount, minPrice, maxPrice);
  addHomePageContent(
    createFilteredContentList(selectedBedCount, minPrice, maxPrice)
  );
});

function createFilteredContentList(bedCount, minPrice, maxPrice) {
  const houseData = getEachHouseData();
  const filteredData = [];
  Object.entries(houseData).forEach((entry) => {
    let isToPop = false;
    const [key, value] = entry;
    filteredData.push(value);
    // if (
    //   value["beds"] !== bedCount &&
    //   value["price"] < minPrice &&
    //   value["price"] > maxPrice
    // ) {
    //   isToPop = true;
    // }

    if (value["beds"] !== bedCount) {
      isToPop = true;
    }
    if (minPrice !== 0) {
      if (value["price"] < minPrice) {
        isToPop = true;
      }
    }
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
  console.log(filteredData);
  return filteredData;
}

// function onSearch(bedCount, minPrice, maxPrice) {}

export { addHomePageContent };
