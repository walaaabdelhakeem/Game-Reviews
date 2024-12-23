import { Details } from "./details.js";

export class Display {
  constructor(data) {
    this.data = data;
  }

  displayAllData() {
    let home = "";
    for (let i = 0; i < this.data.length; i++) {
      home += `<div class="col" id="${this.data[i].id}">
                <div class="card h-100 bg-transparent">
                  <img src="${
                    this.data[i].thumbnail
                  }" class="card-img-top p-3" alt="" />
                  <div class="card-body text-white-50">
                    <div
                      class="card-title d-flex justify-content-between text-white"
                    >
                      <h6>${this.data[i].title}</h6>
                      <button
                        type="button"
                        class="btn-free px-1 border-0 rounded-2 text-bg-primary"
                      >
                        Free
                      </button>
                    </div>
                    <p class="card-text text-center">
                      ${this.data[i].short_description.split(" ", 8).join(" ")}
                    </p>
                  </div>
                  <div
                    class="card-footer text-white d-flex justify-content-between"
                  >
                    <small class="">${this.data[i].genre}</small>
                    <small class="">${this.data[i].platform}</small>
                  </div>
                </div>
              </div>`;
    }
    document.getElementById("row").innerHTML = home;
    document.querySelectorAll(".col").forEach((e) => {
      e.addEventListener("click", async function () {
        console.log(e.id);
        var detaileofgame = new Details(e.id);
        await detaileofgame.getDetailsofgame();
      });
    });
  }
  gameDetails(detail) {
    document.querySelector(".game").classList.remove("d-none");
    document.querySelector(".home").classList.add("d-none");
    document.querySelector(".game").innerHTML = `<div class="container">
      <div class="d-flex justify-content-between text-white">
        <h2>Details Game</h2>
        <button class="btn-close btn-close-white" id="btnClose"></button>
      </div>
      <div class="row">
        <div class="col-md-4">
          <img src="${detail.thumbnail}" alt="" />
        </div>
        <div class="col-md-8 detials text-white g-3 d-flex flex-column gap-3">
          <h3>Title: ${detail.title}</h3>
          <p>Carogery: <span>${detail.genre}</span></p>
          <p>Platform: <span>${detail.platform}</span></p>
          <p>Status: <span>${detail.status}</span></p>
          <p>
          ${detail.description}
          </p>
          <a class="text-white  btn btn-outline-warning  mb-5 " target="_blank" href=" ${detail.game_url}">Show Game</a>
        </div>
      </div>
    </div>`;
    document.getElementById("btnClose").addEventListener("click", function () {
      document.querySelector(".home").classList.remove("d-none");
      document.querySelector(".game").classList.add("d-none");
    });
  }
}
