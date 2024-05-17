// TOGGGLE ICON
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// SCROLL SECTION ACTIVE LINKS
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /* STICKY NAVBAR  */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* SCROLL REVEAL  */
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// TYPED JS
const typed = new Typed('.multiple-text', {
    strings: ['Junior Frontend Developer', 'Freelancer', 'Graphic Design', 'Part-Timer'],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 100,
    loop: true
})

// TYPED JS 1
const typed1 = new Typed('.multiple-text1', {
    strings: ['Junior Frontend Developer', 'Freelancer', 'Graphic Design', 'Part-Timer'],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 100,
    loop: true
})