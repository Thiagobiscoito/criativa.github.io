
let menuShow = document.getElementById('menuShow');

menuShow.addEventListener("click", () => {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
  } else {
    menuMobile.classList.add('open');
  }
})