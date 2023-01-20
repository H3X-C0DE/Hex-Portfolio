window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // when scrolling down
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "-20px";
    document.getElementById("logo").style.width = "20px";
    document.getElementById("logo-link").style.top = "10px";
    document.getElementById("navbar-menu").style.top = "10px";
    document.getElementById("navbar-toggle").style.top = "10px";
  } else {
    //when at the top in default mode
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("logo").style.width = "35px";
    document.getElementById("logo-link").style.top = "0px";
    document.getElementById("navbar-menu").style.top = "0px";
    document.getElementById("navbar-toggle").style.top = "0px";
  }
}

// const navbarToggle = document.getElementById("#navbar-toggle");
// let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

// const toggleNavbarVisibility = () => {
//   isNavbarExpanded = !isNavbarExpanded;
//   navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
// };

// navbarToggle.addEventListener("click", toggleNavbarVisibility);

// const navbarMenu = document.querySelector("#navbar-menu");
// const navbarLinksContainer = navbarMenu.querySelector(".navbar-list");

// navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
// navbarMenu.addEventListener("click", toggleNavbarVisibility);
