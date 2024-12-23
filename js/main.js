import { Allgames } from "./games.js";
var navbarnav = document.querySelector(".navbar-nav");
navbarnav.addEventListener("click", async function (e) {
  if (e.target.tagName == "A") {
    var element = e.target;
    document.querySelector(".active").classList.remove("active");
    element.classList.add("active");
    let catgame = new Allgames(element.innerHTML);
    await catgame.getALLData();
    // let displaydatacatogary= new Display(data);
    // displaydatacatogary.displayAllData();
  }
});
