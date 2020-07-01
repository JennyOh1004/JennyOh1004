//nav scroll effect

let header = document.getElementById("nav");

window.addEventListener("scroll", (e) => {
  // console.log("scroll");
  let scroll = window.pageYOffset;
  if (scroll >= 60) {
    // console.log("scrolled");
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//On Scroll Effect

function animateOnScroll(target, triggerPosition, reversible = false) {
  let targetEl = document.querySelectorAll(target);
  targetEl.forEach((el) => {
    let targetElTop = el.getBoundingClientRect().top;
    let windowHeight = window.innerHeight / 1.5;
    if (targetElTop <= windowHeight * triggerPosition) {
      el.classList.add("intro_appear");
    } else if (targetElTop >= windowHeight && reversible) {
      el.classList.remove("intro_appear");
    }
  });
}
window.addEventListener("scroll", () => {
  animateOnScroll(".intro_text", 0.8, true);
});
