const navBar = document.querySelector(".navbar");
const cont2 = document.querySelector(".container-2");

window.addEventListener("scroll", () => {
  if (window.scrollY > cont2.offsetTop - navBar.offsetHeight-50 ) {
    navBar.style.backgrounColor = "black";
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
});
