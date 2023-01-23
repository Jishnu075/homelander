"use strict";

import { getEachHouseData } from "../../controller/data_handler.js";

// import { getEachHouseData } from "../controller/data_handler.js";

const uploadSection = document.querySelector(".upload-section");
const homePageContents = document.querySelector(".home-page-contents");
function removeUploadSection() {
  uploadSection.innerHTML = "";
}

// const houseData = localStorage.data;
function addHomePageContent() {
  const houseData = getEachHouseData();
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
addHomePageContent();
export { removeUploadSection, addHomePageContent };
