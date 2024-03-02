
const mainSection = document.querySelector('main');
const sidebar = document.querySelector('.sidebar');
const search = document.querySelector('#search');
const searchbox = document.querySelector('.search-box');


function setMargin() {
  if (window.innerWidth < 1220) {
    mainSection.style.marginLeft = '80px';
  } else {
    mainSection.style.marginLeft = '400px';
  }
}


setMargin();
window.addEventListener('resize', setMargin);
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sidebar.classList.toggle('act');
});

search.addEventListener('click', () => {
  searchbox.style.display = 'block';
  search.style.display = 'none';
});

