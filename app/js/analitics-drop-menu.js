"use strict";
document.addEventListener("DOMContentLoaded", () => {
   const analiticContent = document.querySelector(".analitics__content");
   const analiticCard = analiticContent.querySelectorAll("li");
   const analiticDropMenu = document.querySelector(".dropdown-container");
   analiticCard.forEach((el) => {
      el.addEventListener("click", () => {
         analiticDropMenu.classList.add("activated");
      });
   });
});
