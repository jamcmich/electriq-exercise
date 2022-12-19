const handleOpenMenu = () => {
  const sideNav = document.querySelector(".side-nav");
  sideNav.style.right = "0";

  const overlay = document.querySelector(".side-nav__overlay");
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

  document.body.style.overflow = "hidden";
};

const handleCloseMenu = () => {
  const sideNav = document.querySelector(".side-nav");
  sideNav.style.right = "-70%";

  const overlay = document.querySelector(".side-nav__overlay");
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";

  document.body.style.overflow = "auto";
};