const handleOpenMenu = () => {
  const sideNav = document.querySelector(".side-nav");
  sideNav.style.right = "0";
  sideNav.style.visibility = "visible";

  const overlay = document.querySelector(".side-nav__overlay");
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.pointerEvents = "auto";

  document.body.style.overflow = "hidden";
};

const handleCloseMenu = () => {
  const sideNav = document.querySelector(".side-nav");
  sideNav.style.right = "-70%";
  sideNav.style.visibility = "hidden";

  const overlay = document.querySelector(".side-nav__overlay");
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  overlay.style.pointerEvents = "none";

  document.body.style.overflow = "auto";
};

const handleShowCard = (id) => {
  const buttonsArray = document.getElementsByClassName(
    "about-directors__card-button"
  );

  for (let button of buttonsArray) {
    if (button.id === id) {
      const icon = button.children[0];

      if (icon.getAttribute("data-icon") === "mdi:plus-thick") {
        icon.setAttribute("data-icon", "mdi:cancel-bold");
        button.previousElementSibling.style.opacity = "1";
        button.previousElementSibling.style.visibility = "visible";
        button.classList.add("bg--rapture-blue");
      } else if (icon.getAttribute("data-icon") === "mdi:cancel-bold") {
        icon.setAttribute("data-icon", "mdi:plus-thick");
        button.previousElementSibling.style.opacity = "0";
        button.previousElementSibling.style.visibility = "hidden";
        button.classList.remove("bg--rapture-blue");
      }
    }
  }
};