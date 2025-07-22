
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


function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}