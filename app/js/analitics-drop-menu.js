"use strict";
document.addEventListener("DOMContentLoaded", () => {
   const analitics = document.querySelector(".analitics");
   analitics.querySelector("ul").classList.add("analitics__list");
   const analiticsList = analitics.querySelector(".analitics__list");
   analiticsList.querySelectorAll(".analitics__list > li").forEach(cardItem => {
      cardItem.classList.add("analitics__card");
      cardItem.firstElementChild.classList.add("analitics__main-menu");

      if (cardItem.children.length > 1) {
         cardItem.lastElementChild.classList.add("analitics__submenu");
      }
      const card = cardItem.querySelector(".analitics__main-menu");
      let analiticsLogo;
      if (card.querySelector("img")) {
         analiticsLogo = card.querySelector("img");
      } else if (card.querySelector("svg")) {
         analiticsLogo = card.querySelector("svg");
      }
      const logoWrapper = card.querySelector("div");
      logoWrapper.classList.add("analitics__logo");
      /* analiticsLogo.before(logoWrapper);
       logoWrapper.appendChild(analiticsLogo); */

      let analiticsText;
      let stringOfTheNextElementAfterLogo = logoWrapper.nextElementSibling.tagName.toLowerCase();

      if (stringOfTheNextElementAfterLogo === "p" || stringOfTheNextElementAfterLogo === "div") {
         analiticsText = logoWrapper.nextElementSibling;
         analiticsText.classList.add("analitics__text");
      }
   });
   /* Submenu */
   if (analiticsList) {
      const analiticsCards = analiticsList.querySelectorAll(".analitics__card");

      analiticsCards.forEach(card => {
         if (card.children.length > 1) {
            const submenu = card.querySelector(".analitics__submenu");
            card.addEventListener("mouseenter", () => {
               card.classList.add("active");
            });
            card.addEventListener("mouseleave", () => {
               card.classList.remove("active");
            });
         }
      });
   }
});
