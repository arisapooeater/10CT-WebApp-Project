// This is a premade Javascript file from the navigation bar tutorial that allows for the navigation bar to be loaded in each html file through a placeholder. From the following tutorial: https://www.youtube.com/watch?v=G4LYPf8isVg&list=PLhpxwROmcMKqOl3D9Frbd4cNEuvcaJVVz&index=9

fetch("navbar.html")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Could not load navbar.html: ${response.status}`);
        }

        return response.text();
    })
    .then(data => {

        // Put navbar.html into the placeholder
        document.querySelector("#nav-placeholder").innerHTML = data;


    const hamburger = document.querySelector(".nav__hamburger");
    const linksContainer = document.querySelector(".nav__menu");
    const links = document.querySelectorAll(".nav__menu__link");

    hamburger.addEventListener("click", () => {
      linksContainer.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    window.addEventListener("resize", () => {
      if (window.matchMedia("(max-width: 550px)").matches) {
        closeMenu();
      }
    });

    if (window.matchMedia("(max-width: 550px)").matches) {
      closeMenu();
    }

    function closeMenu() {
      linksContainer.classList.remove("active");
      hamburger.classList.remove("active");
    }

    links.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  });