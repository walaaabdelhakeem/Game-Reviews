import { Display } from "./display.js";
export class Details {
  constructor(id) {
    this.id = id;
  }
  async getDetailsofgame() {
    document.getElementById("loader").classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "eb93032a8cmsh5cfb3e7cf0da58dp199230jsnf305af326b08",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    var response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`,
      options
    );
    var data = await response.json();
    document.getElementById("loader").classList.add("d-none");

    let display = new Display();
    display.gameDetails(data);
  }
}
