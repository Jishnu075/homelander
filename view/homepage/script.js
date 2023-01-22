"use strict";

import { showHomePage, showUploadPage } from "../../page_handler.js";

import { DataLoader } from "../../controller/data_load.js";
// import { removeUploadSection } from "../homepage_content.js";
const uploadBtn = document.getElementById("upload-file-btn");
const csvFile = document.getElementById("file-selector");

window.onload = function () {
  localStorage.data ? loadHomeContentPage() : loadUploadPage();
};

function loadHomeContentPage() {
  showHomePage();
}
function loadUploadPage() {
  showUploadPage();
  uploadBtn.addEventListener("click", () => {
    const dataloader = new DataLoader();
    dataloader.onClick(csvFile);
    window.location.reload();
  });
}
