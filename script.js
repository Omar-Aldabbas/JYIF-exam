const list = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const nav = document.querySelector(".navbar__menu");

const getSections = () => {
  sections.forEach((el) => {
    const id = el.id;
    const label = el.dataset.nav;

    const newNav = `<li class="nav__item"><a  href="#${id}">${label}</a></li>`;
    list.insertAdjacentHTML("beforeend", newNav);
  });
};

const smoothScrolling = () => {
  nav.addEventListener("click", (e) => {
    e.preventDefault();
    const link = e.target.closest("a[href^='#']");
    if (!link) return;

    const idSec = link.getAttribute("href");
    const section = document.querySelector(idSec);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
};

getSections();
smoothScrolling();