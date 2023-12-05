// menu 

hamburger = document.querySelector('Hamburger');
hamburger.onclick = function(){
    navBar = document.querySelector('.nav-bar')
    navBar.classList.toggle('active');
}