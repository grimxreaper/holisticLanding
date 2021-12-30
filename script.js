const menuButton = document.querySelector(".menu_button");
const dropDownMenu = document.querySelector(".dropdown_menu");

menuButton.addEventListener("click", () => {
  dropDownMenu.classList.toggle("displayBlock");
  // dropDownMenu.classList.toggle('show');
  setTimeout(() => {
    dropDownMenu.classList.toggle("opacityOne");
  }, 100);
});

const sliderbtn_one = document.querySelector(".btn_one");
const sliderbtn_two = document.querySelector(".btn_two");
const sliderbtn_three = document.querySelector(".btn_three");
const quote_one = document.querySelector(".quote");
const author_one = document.querySelector(".author");
const quote_two = document.querySelector(".quote.two");
const author_two = document.querySelector(".author.two");
const quote_three = document.querySelector(".quote.three");
const author_three = document.querySelector(".author.three");

sliderbtn_one.addEventListener("click", () => {});
