const burger = document.querySelector(".burger");
const burgerBars = document.querySelector(".burger-bar");
const nav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav__item a");

// burger nav access
function setTabIndex() {
   const burgerStyles = window.getComputedStyle(burger);

   if (burgerStyles.getPropertyValue("display") !== 'none' && !burger.style.getPropertyValue("--_scale")) {
      navLinks.forEach(navLink => {
         navLink.setAttribute("tabindex", "-1")
      });
   } else {
      navLinks.forEach(navLink => {
         navLink.removeAttribute("tabindex")
      });
   }
};
window.addEventListener('load', () => {
   setTabIndex();
});
window.addEventListener('resize', () => {
   setTabIndex();
});


// burger btn
burger.addEventListener('click', function () {
   if (!burger.style.getPropertyValue("--_scale") && !burgerBars.style.getPropertyValue("--_shrink")) {
      burger.style.setProperty("--_scale", "1");
      burgerBars.style.setProperty("--_shrink", "0");
      burger.setAttribute("aria-expanded", "true");

      nav.style.setProperty("--_expand", "1");
      nav.setAttribute("aria-hidden", "false");
   } else {
      burger.removeAttribute('style');
      burgerBars.removeAttribute('style');
      burger.setAttribute("aria-expanded", "false");

      nav.removeAttribute('style');
      nav.setAttribute("aria-hidden", "true");
   };

   setTabIndex();
});


// cat's shape slider/btn
const catShapeToogleBtn = document.querySelector(".cat-img-controls__btn");
const catSkinnyImg = document.querySelector(".results__img_skinny");
const catFatImg = document.querySelector(".results__img_fat");
const catShapeRangeSlider = document.querySelector(".cat-img-controls__range-slider");

if (catShapeToogleBtn) {
   catShapeToogleBtn.addEventListener('click', function () {
      if (!catSkinnyImg.style.getPropertyValue("--_opacity")) {
         catSkinnyImg.style.setProperty("--_opacity", "1");
         catFatImg.style.setProperty("--_opacity", "0");
         catShapeToogleBtn.style.setProperty("--_active", "1");
      } else {
         catSkinnyImg.removeAttribute('style');
         catFatImg.removeAttribute('style');
         catShapeToogleBtn.removeAttribute('style');
      }
   });
}

if (catShapeRangeSlider) {
   catShapeRangeSlider.oninput = () => {
      let rangeSliderValue = catShapeRangeSlider.value;
      let maskWidthCatFat = 100 - rangeSliderValue;

      catFatImg.style.setProperty("--_mask-width", ' ' + maskWidthCatFat + '%');
      catSkinnyImg.style.setProperty("--_mask-width", ' ' + rangeSliderValue + '%');
   };
}


// :has Firefox fallback
const supportsHasClass = CSS.supports(":has()");
const fieldsetElements = document.querySelectorAll(".form-fieldset__element");
const inputDisabled = document.querySelector("input:disabled");

if (!supportsHasClass && fieldsetElements) {
   fieldsetElements.forEach(fieldsetElement => {
      if (fieldsetElement.contains(inputDisabled)) {
         fieldsetElement.style.opacity = "var(--opacity-action)";
      }
   });
}


