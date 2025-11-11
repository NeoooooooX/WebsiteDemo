document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".mql-nav-wrapper");
  const navTop = nav.offsetTop;

  function handleScroll() {
    if (window.scrollY >= navTop) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  }

  window.addEventListener("scroll", handleScroll);
});
