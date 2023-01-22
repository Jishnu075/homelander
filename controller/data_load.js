// import { House } from "../model/house.js";

// class DataLoader {
//   constructor() {
//     this.onClick = function onClick(csvFile) {
//       const input = csvFile.files[0];
//       const fileReader = new FileReader();
//       fileReader.onload = (event) => {
//         onLoad(event);
//       };
//       fileReader.readAsText(input);
//       // const addHousesToObject = (houses) => (this.houses = houses);
//     };

//     // func for onload of file
//     function onLoad(event) {
//       const fileData = event.target.result;
//       const parsedData = dataParse(fileData);
//       const houses = createHousesList(parsedData);
//       return houses;
//     }

//     // converts text data to object
//     function dataParse(fileAsText) {
//       const lines = fileAsText.replace(/(\r\n|\n|\r)/gm, "#").split("#");
//       lines.splice(0, 1);
//       // to filter out all the empty elements from arr
//       const newArr = lines.filter((element) => element.length > 1);
//       return newArr;
//     }
//     // to create a list of house of obj as arr
//     const createHousesList = (arr) => {
//       const housesArr = [];
//       arr.map((x, i) => {
//         const eachItem = x.split(",");
//         const [a, b, c, d, e, f, g] = eachItem;
//         const house = new House(a, b, c, d, e, f, g);
//         //house to array(list of houses)
//         housesArr.push(house);
//       });
//       this.houses = housesArr;
//       localStorage.setItem("data", JSON.stringify(this.houses));
//       return housesArr;
//     };
//   }
// }
// export { DataLoader };
