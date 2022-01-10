const icon = document.getElementById('header-icon');
const nav = document.getElementById('nav');
const times_icon = document.getElementById('times');


icon.addEventListener('click', event => {
    icon.style.display = 'none';
    nav.style.width = '160px'
    nav.style.padding = '0 1.6rem 1.6rem 1.6rem'
});

times_icon.addEventListener('click', event => {
    icon.style.display = 'block';
    nav.style.width = '0'
    nav.style.padding = '0'
});
