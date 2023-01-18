"use strict";
import { House } from "../model/house.js";

window.addEventListener("load", () => {
  const uploadBtn = document.getElementById("upload-file-btn");
  const csvFile = document.getElementById("file-selector");
  uploadBtn.addEventListener("click", () => {
    const input = csvFile.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const fileData = event.target.result;
      const parsedData = dataParse(fileData);
      const houses = createHousesList(parsedData);
      console.log(houses);
    };
    fileReader.readAsText(input);
  });
});

// converts text data to object
function dataParse(fileAsText) {
  const lines = fileAsText.replace(/(\r\n|\n|\r)/gm, "#").split("#");
  lines.splice(0, 1);
  // to filter out all the empty elements from arr
  const newArr = lines.filter((element) => element.length > 1);
  return newArr;
}

function createHousesList(arr) {
  const housesArr = [];
  arr.map((x, i) => {
    const eachItem = x.split(",");
    const [a, b, c, d, e, f, g] = eachItem;
    const house = new House(a, b, c, d, e, f, g);
    //house to array(list of houses)
    housesArr.push(house);
  });
  return housesArr;
}
