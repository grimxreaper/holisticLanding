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
const author_one = document.querySelector("p.author.one");
const quote_two = document.querySelector("p.quote.two");
const author_two = document.querySelector(".author.two");
const quote_three = document.querySelector("p.quote.three");
const author_three = document.querySelector(".author.three");

sliderbtn_one.addEventListener("click", () => {
  console.log("we here");
  quote_one.style.display = "block";
  author_one.style.display = "block";
  quote_two.style.display = "none";
  author_two.style.display = "none";
  quote_three.style.display = "none";
  author_three.style.display = "none";

  //   quote_two.classList.toggle("displayNone");
  //   author_two.classList.toggle("displayNone");
  //   quote_three.classList.toggle("displayNone");
  //   author_three.classList.toggle("displayNone");
});

sliderbtn_two.addEventListener("click", () => {
  console.log("hereee");
  quote_two.style.display = "block";
  author_two.style.display = "block";
  quote_one.style.display = "none";
  author_one.style.display = "none";
  quote_three.style.display = "none";
  author_three.style.display = "none";

  // author_one.classList.toggle("displayNone");
  // quote_three.classList.toggle("displayNone");
  // author_three.classList.toggle("displayNone");
});

sliderbtn_three.addEventListener("click", () => {
  quote_three.style.display = "block";
  author_three.style.display = "block";
  quote_one.style.display = "none";
  author_one.style.display = "none";
  quote_two.style.display = "none";
  author_two.style.display = "none";

});

const rightArrow = document.getElementsByClassName(".fas.fa-chevron-right");
const leftArrow = document.querySelector("i.fas.fa-chevron-left");

rightArrow.addEventListener("click", () => {
  //if currently on quote 1, move to quote 2
  console.log("inside");
  if (quote_one.style.display === "block") {
    console.log("hereee");
    quote_two.style.display = "block";
    author_two.style.display = "block";
    quote_one.style.display = "none";
    author_one.style.display = "none";
    quote_three.style.display = "none";
    author_three.style.display = "none";
  }
});
