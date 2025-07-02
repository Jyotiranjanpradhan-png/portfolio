let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')


menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')

}



let section = document.querySelector('section');
let navlinks = document.querySelector('header nav a');

window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop  - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[herf*=' + id +']').classList.add('active');
            })
        }

    });

}

menuIcon.classList.remove('fa-xmark')
navbar.classList.remove('active')

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay:200,
})
ScrollReveal().reveal('.home-content , heading',{origin : 'top'})
ScrollReveal().reveal('.home-img , .service-container , .protfolio-box , contact form',{origin : 'bottom'})
ScrollReveal().reveal('.home-contact h1 , .about-img',{origin : 'left'})
ScrollReveal().reveal('.home-contact p , .about-content',{origin : 'right'})


let typed = new Typed('.multiple-text',{
    strings: ['frontend Developer','web Designer','java developer'],
    typeSpeed : 70,
    backSpeed: 70,
    backDelay: 1000,
    loop : true,

});