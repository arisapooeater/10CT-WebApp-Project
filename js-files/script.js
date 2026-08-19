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