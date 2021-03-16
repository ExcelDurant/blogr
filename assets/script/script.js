var laptopDropdown = document.getElementsByClassName('dropdown-container')[0];
var mobileDropdown = document.getElementsByClassName('dropdown-links')[0];
var mobileMenu = document.getElementsByClassName('mobile-navlinks-sec')[0];
var hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];

// TOGGLE LAPTOP DROPDOWN LINKS
function laptopDrop() {
    laptopDropdown.classList.toggle('show');
    document.querySelector('#laptop-drop-btn').classList.toggle('rotate-arrow');
    // window.getComputedStyle(document.querySelector('#laptop-drop-btn'), "::after").getPropertyValue('transform').toEqual('rotate(180deg)');
}

// TOGGLE MOBILE MENU
function showMenu() {
    mobileMenu.classList.toggle('show-flex');
    hamburgerMenu.classList.toggle('cross');
}

// TOGGLE MOBILE DROPDOWN
function dropdown() {
    mobileDropdown.classList.toggle('show');
    document.querySelector('#mobile-drop-btn').classList.toggle('rotate-arrow');
}

// TOGGLE LAPTOP DROPDOWN LINKS WHEN CLICKED ANYWHERE ON THE PAGE
window.onclick = function(event) {
    if (!event.target.matches('#laptop-drop-btn')) {
        if (laptopDropdown.classList.contains('show')) {
          laptopDropdown.classList.remove('show');
          document.querySelector('#laptop-drop-btn').classList.toggle('rotate-arrow');
        }
      }
}


// toEqual('rgb(196, 26, 35)');