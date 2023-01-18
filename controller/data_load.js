class DataLoader {
  constructor() {
    this.onClick = function onClick() {
      const input = csvFile.files[0];
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        const fileData = event.target.result;
        const parsedData = dataParse(fileData);
        const houses = createHousesList(parsedData);
        console.log(houses);
      };
      fileReader.readAsText(input);
    };
  }
}
