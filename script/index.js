
gsap.registerPlugin(ScrollTrigger);
const wrappers = document.querySelectorAll('.card-wrapper');

wrappers.forEach((wrapper, index) => {
    const card = wrapper.querySelector('.card');

    // For the last card, allow normal scroll without pinning.
    if (index === wrappers.length - 1) {
        gsap.set(card, { opacity: 1, scale: 1 });
    } else {
        gsap.timeline({
            scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
                pinSpacing: false,
            }
        })
            .set(card, { opacity: 1, scale: 1 })
            .to(card, { opacity: 0, scale: 0.6, ease: "none" }, 0.01);
    }
});
