const navbar = $("nav");
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
console.log(navbar);
menuOpen.addEventListener("click", () => {
    console.log("I'm being clicked");
    
    menuClose.style.display = "block";
    menuOpen.style.display = "none";
  });

  menuClose.addEventListener("click", () => {
    console.log("Close clicked");
    
    menuClose.style.display = "none";
    menuOpen.style.display = "block";
    
  });