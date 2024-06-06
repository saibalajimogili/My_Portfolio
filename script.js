let currentIndex = 0;
const images = document.querySelectorAll("#image-slider img");

function nextImage() {
  if (currentIndex < images.length - 1) {
    images[currentIndex].style.display = "none";
    currentIndex++;
    images[currentIndex].style.display = "block";
  }
}

function prevImage() {
  if (currentIndex > 0) {
    images[currentIndex].style.display = "none";
    currentIndex--;
    images[currentIndex].style.display = "block";
  }
}

// Initial setup to show the first image
images[currentIndex].style.display = "block";

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelector("section");
let navlinks = document.querySelector("header nava");

windows.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
