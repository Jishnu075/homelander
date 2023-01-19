"use strict";
import { DataLoader } from "../../controller/data_load.js";

const uploadBtn = document.getElementById("upload-file-btn");
const csvFile = document.getElementById("file-selector");
uploadBtn.addEventListener("click", () => {
  const dataloader = new DataLoader();
  dataloader.onClick(csvFile);
});
