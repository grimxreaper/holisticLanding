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
const sliderbtn_two = document.querySelector("a.btn_two");
const sliderbtn_three = document.querySelector(".btn_three");
const quote_one = document.querySelector("p.quote");
const author_one = document.querySelector("p.author");
const quote_two = document.querySelector("p.quote.two");
const author_two = document.querySelector(".author.two");
const quote_three = document.querySelector("p.quote.three");
const author_three = document.querySelector(".author.three");

sliderbtn_one.addEventListener("click", () => {
  console.log("we here");
  quote_one.style.color = "red";
  author_one.style.opacity = "0";
  quote_two.classList.toggle("displayNone");
  author_two.classList.toggle("displayNone");
  quote_three.classList.toggle("displayNone");
  author_three.classList.toggle("displayNone");
});

sliderbtn_two.addEventListener("click", () => {
  console.log("hereee");
  quote_two.style.display = "block";
  author_two.style.display = "block";
  quote_one.classList.toggle("displayNone");
  author_one.classList.toggle("displayNone");
  quote_three.classList.toggle("displayNone");
  author_three.classList.toggle("displayNone");
});

sliderbtn_three.addEventListener("click", () => {
  quote_three.style.display = "block";
  author_three.style.display = "block";
  quote_one.classList.toggle("displayNone");
  author_one.classList.toggle("displayNone");
  quote_two.classList.toggle("displayNone");
  author_two.classList.toggle("displayNone");
});

// document.querySelector("a.btn_two").onclick = function () {
//   console.log("here");
//   quote_one.style.color = "blue";
// };
