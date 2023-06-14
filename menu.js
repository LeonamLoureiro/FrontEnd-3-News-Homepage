const navbar = document.querySelector(".navbar-collapse");
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");

menuOpen.addEventListener("click", () => {
     
    menuClose.style.display = "block";
    menuOpen.style.display = "none";
    navbar.style.display = "block";
    navbar.classList.add("navbar-collapse-fixed");
    navbar.classList.remove("navbar-list");
  });

  menuClose.addEventListener("click", () => {
        
    menuClose.style.display = "none";
    menuOpen.style.display = "block";
    navbar.style.display = "none";    
    
  });

  window.addEventListener('scroll', function() {
    var fixedNavbar = document.querySelector('.navbar-collapse-fixed');
    var positionViewport = window.innerHeight;
  
    if (window.scrollY >= positionViewport) {
      fixedNavbar.classList.remove('navbar-collapse-fixed');
      navbar.style.display = "none";
    }
  });