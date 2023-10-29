"use strict";
document.addEventListener("DOMContentLoaded", () => {
   const analiticContent = document.querySelector(".analitics__list");
   const analiticCard = analiticContent.querySelectorAll(".analitics__card");
   const analiticDropMenu = document.querySelector(".analitics__submenu");
   analiticCard.forEach((el) => {
      el.addEventListener("mouseenter", () => {
         el.classList.add("active");
      });
   });
   analiticCard.forEach((el) => {
      el.addEventListener("mouseleave", () => {
         analiticDropMenu.classList.remove("active");
      });
   });
   analiticContent.forEach((el) => {
      el.addEventListener("mouseenter", () => {
         analiticDropMenu.classList.remove("active");
      });
   });
});
