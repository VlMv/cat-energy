const burger = document.querySelector(".burger");
const burgerBars = document.querySelector(".burger-bar");
const nav = document.querySelector(".main-nav");

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
   }
});


const catShapeToogleBtn = document.querySelector(".cat-img-controls__btn");
const catSkinny = document.querySelector(".results__img_skinny");
const catFat = document.querySelector(".results__img_fat");

catShapeToogleBtn.addEventListener('click', function () {
   if (!catSkinny.style.getPropertyValue("--_opacity")) {
      catSkinny.style.setProperty("--_opacity", "1");
      catFat.style.setProperty("--_opacity", "0");
      catShapeToogleBtn.style.setProperty("--_active", "1");
   } else {
      catSkinny.removeAttribute('style');
      catFat.removeAttribute('style');
      catShapeToogleBtn.removeAttribute('style');
   }
});


const catShapeRangeSlider = document.querySelector(".cat-img-controls__range-slider");

catShapeRangeSlider.oninput = () => {
   let rangeSliderValue = catShapeRangeSlider.value;
   let maskWidthCatFat = 100 - rangeSliderValue;
   catFat.style.setProperty("--_mask-width", ' ' + maskWidthCatFat + '%');
   catSkinny.style.setProperty("--_mask-width", ' ' + rangeSliderValue + '%');
};
