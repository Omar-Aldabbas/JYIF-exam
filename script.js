const list = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const nav = document.querySelector(".navbar__menu");

console.log(list);
// sections.forEach(el =>console.log(el))
sections.forEach((el) => {
  const id = el.id;
  const label = el.dataset.nav;

  const newNav = `<li class="nav__item"><a  href="#${id}">${label}</a></li>`;
  list.insertAdjacentHTML("beforeend", newNav);
});

