"use strict";

// func to convert parse string to Object for using localStorage.data
function stringToJson(localData) {
  try {
    return JSON.parse(localData);
  } catch {
    console.log("err reading");
  }
}

export { stringToJson };
