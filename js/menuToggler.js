const toggleMenu = () => {
    const menuToggler = document.querySelector('.menuToggler');
    menuToggler.classList.toggle('menuToggler--clicked');

    const nav = document.querySelector('.nav');
    nav.classList.toggle('nav--hidden');

    const cover = document.querySelector('.cover');
    cover.classList.toggle('cover--hidden');
}
