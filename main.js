const menuMobileButton = document.querySelector('.menu-icon-mobile')
const menuMobile = document.querySelector('.menu-mobile')
const headerTag = document.querySelector('header')
const headerNav = document.querySelector('.menu-nav')
const headerBtn = document.querySelector('.menu-nav button')
const logoTag = document.querySelector('header svg path')
const menuMobileIconPath = document.querySelector('.menu-icon-mobile path')

menuMobileButton.addEventListener('click', () => {
    menuMobile.classList.toggle("hidden")
})

const toggleHeader = () => {
    const pixels = window.pageYOffset
    if (pixels >60) {
        headerTag.classList.add('scrolled')
        headerTag.style.height = '75px'
        headerNav.style.color = '#000000'
        headerBtn.style.backgroundColor = 'hsl(51, 100%, 49%)'
        logoTag.style.fill = '#000000'
        menuMobileIconPath.style.fill = '#000000'
    } else {
        headerTag.classList.remove('scrolled')
        headerTag.style.height = '150px'
        headerNav.style.color = '#ffffff'
        headerBtn.style.backgroundColor = '#fff'
        logoTag.style.fill = '#fff'
        menuMobileIconPath.style.fill = '#fff'
    }
}

document.addEventListener('scroll', () => {
    console.log('you scrolled the page')
    toggleHeader()
})
