const menuMobileButton = document.querySelector('.menu-icon-mobile')

const menuMobile = document.querySelector('.menu-mobile')


menuMobileButton.addEventListener('click', () => {
    menuMobile.classList.toggle("hidden")
})