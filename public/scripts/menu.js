const navigationToggle = document.getElementById('navbar-toggle');
const navigationMenu = document.getElementById('navbar');

navigationToggle.addEventListener('click', () => {
  navigationMenu.classList.toggle('active');
  navigationToggle.classList.toggle('active-button');
});
