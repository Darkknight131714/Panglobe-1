window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function myFunction() {
    var x = document.getElementById("links");
    var icon= document.querySelector('i');
    if (x.style.display === "block") {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
      x.style.display = "none";
    } else {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
      x.style.display = "block";
    }
    console.log(x.style.display);
  }