const handleMenuClick = (elem) => {
  let body = document.body,
    sidePanelElem = document.querySelector(".nav__side-panel"),
    overlayElem = document.querySelector(".nav__overlay");

  if (elem.dataset.icon === "mdi:menu") {
    body.classList.add("no-scroll");
    sidePanelElem.classList.add("nav__side-panel--is-open");
    overlayElem.classList.add("nav__overlay--is-visible");
  }

  if (elem.dataset.icon === "mdi:close") {
    body.classList.remove("no-scroll");
    sidePanelElem.classList.remove("nav__side-panel--is-open");
    overlayElem.classList.remove("nav__overlay--is-visible");
  }
};