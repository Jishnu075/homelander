"use strict";

import { stringToJson } from "./data_parse.js";

// func that returns houseData as whole if index is not provided
function getEachHouseData(index = "default") {
  const jsonData = stringToJson(localStorage.data);
  return index === "default" ? jsonData : jsonData[index];
}
// const houseData = getEachHouseData();
// function bedNumberFilter(bedNum) {
//   Object.entries(houseData).forEach((entry) => {
//     const [key, value] = entry;
//     if (bedNum === value["beds"]) {
//       return value;
//     } else {
//       return false;
//     }
//   });
// }
// function priceFilter(min, max) {
//   Object.entries(houseData).forEach((entry) => {
//     const [key, value] = entry;
//     if (value["price"] >= min && value["price"] <= max) {
//       console.log(value);
//       return value;
//     } else {
//       return false;
//     }
//   });
// }
// function sqftFilter(min, max) {
//   Object.entries(houseData).forEach((entry) => {
//     const [key, value] = entry;
//     if (value["sqft"] >= min && value["sqft"] <= max) {
//       console.log(value);
//       return value;
//     } else {
//       return false;
//     }
//   });
// }

// export { getEachHouseData, bedNumberFilter, priceFilter, sqftFilter };
export { getEachHouseData };
