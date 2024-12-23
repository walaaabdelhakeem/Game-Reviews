import { Display } from "./display.js";
export class Allgames {
  constructor(category = "mmorpg") {
    this.category = category;
  }
  async getALLData() {
    document.getElementById("loader").classList.remove("d-none");
    var options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "eb93032a8cmsh5cfb3e7cf0da58dp199230jsnf305af326b08",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    var response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`,
      options
    );
    var data = await response.json();
    document.getElementById("loader").classList.add("d-none");
    console.log(data);
    let first = new Display(data);
    first.displayAllData();
  }
}
let catgame = new Allgames();
catgame.getALLData();
