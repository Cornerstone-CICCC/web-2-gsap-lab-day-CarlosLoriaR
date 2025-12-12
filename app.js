const contactMe = document.querySelector('.section5 div h2');
const letters = contactMe.textContent.split('');

contactMe.innerHTML = letters.map(letter => {
    if (letter === " ") {
        return `<span class="letter">&nbsp;</span>`;
    }
    return `<span class="letter">${letter}</span>`;
}).join('');

gsap.registerPlugin(ScrollTrigger);

const section1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section1',
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        // scrub: true
    }
})
const section2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section2',
        start: 'top center',
        end: 'bottom center',
        // markers: true,
        // scrub: true
    }
})

const horizontal = gsap.timeline({
    scrollTrigger: {
        trigger: '.horizontal-sections',
        start: 'top top',
        end: 'bottom',
        pin: true,
        scrub: true,
        // markers: true
    }
})

const section5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section5',
        start: 'top top',
        end: 'bottom',
        pin: true,
        scrub: true
    }
})


section1
    .from('.section1 .content div h1 span:first-child', { duration: .5, x: '-100vw', stagger: .5 })
    .from('.section1 .content div h1 span:last-child', { duration: .5, x: '100vw', stagger: .5 }, '<')
    .from('.section1 .content div p', { duration: .5, rotate: 90, transformOrigin: "left center", stagger: .5, opacity: 0 },)
    .from('.section1 .content img', { duration: .5, y: '100vh', stagger: .5 },)


section2
    .from('.section2 div h2 span:first-child', { duration: .5, y: '-100vh', stagger: .5 })
    .from('.section2 div h2 span:last-child', { duration: .5, y: '-100vh', stagger: .5 },)
    .from('.section2 div p', { rotateY: '90', transformOrigin: "center", duration: .5, stagger: .5, opacity: 0 },)


gsap.set('.section3 div p span', { backgroundColor: 'white', color: 'black' })

horizontal
    .from('.section3 div h2', { duration: .5, x: '-100vw', scale: '3', stagger: .5 })
    .from('.section3 div p span', { duration: .5, y: '100vh', stagger: .5, color: 'white' })
    .to('.section3', { x: '-100vw', duration: '1' },)
    .to('.section4', { x: '-100vw', duration: '1' }, '<')
    .from('.section4 div div', { x: '100vw', duration: 1, stagger: .5, opacity: 0 })

section5
    .from('.letter', { duration: .5, y: '-100vh', stagger: .5 })
    .from('.section5 div p', { duration: .5, y: '20vh', stagger: .5, opacity: '0' })
    .from('.section5 div button', { duration: .5, scale: 0, stagger: .5, opacity: '0' })
    .to('.section5', { duration: 1, backgroundColor: 'black' })
    .from('.section5', { duration: 1, backgroundPosition: '200% 90%' }, '<')