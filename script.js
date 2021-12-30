const menuButton = document.querySelector('.menu_button');
const dropDownMenu = document.querySelector('.dropdown_menu');

menuButton.addEventListener('click', ()=>{
    dropDownMenu.classList.toggle('displayBlock');
    // dropDownMenu.classList.toggle('show');
    setTimeout(()=>{
        dropDownMenu.classList.toggle('opacityOne');
    },100)
})

