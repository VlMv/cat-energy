const burger = document.querySelector(".burger");
const burgerBar = document.querySelector(".burger-bar");
const nav = document.querySelector(".main-nav");

burger = burger.addEventListener('click', function () {
   if (!burger.style.getPropertyValue("--_scale") && !burgerBar.style.getPropertyValue("--_shrink")) {
      burger.style.setProperty("--_scale", "1");
      burgerBar.style.setProperty("--_shrink", "0");
      burger.setAttribute("aria-expanded", "true");
      nav.style.setProperty("--_top-offset", "71px");
      nav.setAttribute("aria-hidden", "false");

   } else {
      burger.removeAttribute('style');
      burgerBar.removeAttribute('style');
      burger.setAttribute("aria-expanded", "false");
      nav.removeAttribute('style');
      nav.setAttribute("aria-hidden", "true");
   }
});

