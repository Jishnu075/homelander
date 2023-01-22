"use strict";

// let houseDataLength = stringToJson().length;

// func to convert parse string to Object for using localStorage.data
function stringToJson() {
  try {
    return JSON.parse(localStorage.data);
  } catch {
    console.log("err reading");
  }
}

export { stringToJson };
