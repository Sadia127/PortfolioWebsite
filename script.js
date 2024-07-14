// const menuButton= document.querySelector(".menu-btn");
// const navBar = document.querySelector(".navbar");

// menuButton.addEventListener("click", () =>{
//     menuButton.classList.toggle("active");
//     navBar.classList.toggle("active");

// })

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('open');
    navbar.classList.toggle('open');
};

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
    menu.classList.remove("open");
    navbar.classList.remove("open");

}));





let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header navbar a [href*=' + id + ']').classList.add('active');
            });
        };
    });
};







 const sr = ScrollReveal ({

    distance: '40px',
    duration: 2500,
    reset: false
 });

 sr.reveal('.logo',{delay:430, origin:'left'});
 sr.reveal('.menu-btn',{delay:440, origin:'right'});
 sr.reveal('.navbar',{delay:460, origin:'bottom'});
 sr.reveal('.main-btn',{delay:480, origin:'bottom'});
 sr.reveal('.home-img',{delay:470, origin:'bottom'});
 sr.reveal('.home',{delay:490, origin:'bottom'});
 sr.reveal('.home-text',{delay:500, origin:'bottom'});
 sr.reveal('.share p',{delay:560, origin:'bottom'});
 sr.reveal('.social',{delay:560, origin:'bottom'});



