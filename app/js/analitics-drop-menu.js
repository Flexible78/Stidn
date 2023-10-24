"use strict";
document.addEventListener("DOMContentLoaded", () => {
   const analiticContent = document.querySelector(".analitics__content");
   const analiticCard = analiticContent.querySelectorAll("li");
   const analiticDropMenu = document.querySelector(".dropdown-container");
   let timeoutId;
   analiticCard.forEach((el) => {
      el.addEventListener("mouseover", () => {
         analiticDropMenu.classList.toggle("activated");
      });
      timeoutId = setTimeout(() => {
         analiticDropMenu.classList.remove("activated");
      }, 1000);
   });
   analiticContent.forEach((el) => {
      el.addEventListener("mouseover", () => {
         analiticDropMenu.classList.remove("activated");
      });
      timeoutId = setTimeout(() => {
         analiticDropMenu.classList.remove("activated");
      }, 1000);
   });
   analiticDropMenu.addEventListener("mouseover", () => {
      analiticDropMenu.classList.remove("activated");
   });
   timeoutId = setTimeout(() => {
      analiticDropMenu.classList.remove("activated");
   }, 1000);
});
