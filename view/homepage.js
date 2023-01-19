"use strict";

import { getEachHouseData } from "../controller/data_handler.js";

const uploadSection = document.querySelector(".upload-section");
function removeUploadSection() {
  uploadSection.innerHTML = "";
}

// const houseData = localStorage.data;

function addHomePageContent() {
  const houseData = getEachHouseData();
  const html = `
  <div class="home-page-item">
    <div class="house-img"></div>
    <div class="house-price">100,000$</div>
    <div class="beds-baths-sqft">2 Bds - 2 Ba - 1650 ft2</div>
</div>`;
}
addHomePageContent();

export { removeUploadSection };
