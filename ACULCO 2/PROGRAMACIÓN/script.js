document.addEventListener("DOMContentLoaded", function() {
  const title = document.querySelector(".content h1");
  const typewriter = new Typewriter(title, {
    loop: true,
    delay: 20,
  });

  typewriter
    .typeString("You should always Feel pretty")
    .pauseFor(2000)
    .deleteAll()
    .start();

  const background = document.querySelector(".container");

  function animateBackground() {
    background.style.backgroundPositionX = "0px";

    const animation = background.animate(
      [
        { backgroundPositionX: "0px" },
        { backgroundPositionX: "2000px" },
      ],
      {
        duration: 5000,
        iterations: Infinity,
      }
    );

    background.addEventListener("mouseenter", () => {
      animation.pause();
    });

    background.addEventListener("mouseleave", () => {
      animation.play();
    });
  }

  window.addEventListener("load", animateBackground);
});
