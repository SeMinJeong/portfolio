// const toggleBtn = document.querySelector('.navbar__toggleBtn');
// const menu = document.querySelector('.navbar__menu');
// const icons = document.querySelector('.navbar__icons');

// toggleBtn.addEventListener('click',() =>{
//     menu.classList.toggle('active');
//     icons.classList.toggle('active');
// });



/* === navbar-menu === */
function openNav() {
    document.getElementById('sidemenu').style.height = "100%";
}

function closeNav() {
    document.getElementById('sidemenu').style.height = "0%";
}

/* === navbar === */
window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if(window.matchMedia("(min-width:1440px)").matches){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById('nav').style.padding = "1.5rem 160px";
            document.getElementById('logo').style.fontSize = "40px";
        } else {
            document.getElementById('nav').style.padding = "1rem 160px";
            document.getElementById('logo').style.fontSize = "36px";
        }
    }else{

    }
}
