const handleMenuClick = (bool) => {
  console.log(bool);

  let body = document.body,
    sidePanelElem = document.querySelector(".nav__side-panel"),
    overlayElem = document.querySelector(".nav__overlay"),
    openMenuButton = document.querySelector(".nav__open-menu-button"),
    closeMenuButton = document.querySelector(".nav__close-menu-button");

  /* if open menu button is clicked */
  if (bool) {
    body.classList.add("no-scroll");
    sidePanelElem.classList.add("nav__side-panel--is-open");
    overlayElem.classList.add("nav__overlay--is-visible");
    closeMenuButton.focus();
  }

  /* if close menu button is clicked */
  if (!bool) {
    body.classList.remove("no-scroll");
    sidePanelElem.classList.remove("nav__side-panel--is-open");
    overlayElem.classList.remove("nav__overlay--is-visible");
    openMenuButton.focus();
  }
};