document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    //if we are in the dropdown, let's get the dropdown we're inside of, and set it to active
    let currentDropdown
    if (isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown')
        currentDropdown.classList.toggle('active')
    }

})