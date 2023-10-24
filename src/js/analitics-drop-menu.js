"use strict";
document.addEventListener("DOMContentLoaded", () => {
   const analiticContent = document.querySelector(".analitics__content");
   const analiticCard = analiticContent.querySelectorAll("li");
   const analiticDropMenu = document.querySelector(".dropdown-container");
   analiticCard.forEach((el) => {
      el.addEventListener("mouseenter", () => {
         analiticDropMenu.classList.toggle("activated");
      });
   });
   analiticContent.forEach((el) => {
      el.addEventListener("mouseenter", () => {
         analiticDropMenu.classList.remove("activated");
      });
   });
});
