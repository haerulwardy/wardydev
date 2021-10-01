// HEADER
const header = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        start: '+=5'

    }
})

function addNavbarBg() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');

        if(window.pageYOffset > 0) {
            navbar.classList.add('navbar-fixed')
        } else {
            navbar.classList.remove('navbar-fixed')
        }
    })
}

header.to('.navbar', {
    onToggle: () => {
        addNavbarBg();
    }
})

// HERO SECTION
// PORTFOLIO
// BANNER
// FOOTER