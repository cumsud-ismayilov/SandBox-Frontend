// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     freeMode: true,
//     pagination: {
//       el: ".swipper-bottom",
//       clickable: true,

//     },
//     autoplay: {
//        delay: 1500,
//       disableOnInteraction: false,
//     },
//   });

const Preloader = document.getElementById("preloader");
window.addEventListener("load", () => {
  setTimeout(() => {
    if (Preloader) {
      Preloader.style.display = "none";
    }
  }, 3800);
});

const ToTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    // document.querySelector("body").style.background = "black";
    if (ToTop) {
      ToTop.style.display = "flex";
    }
  } else {
    document.querySelector("body").style.background = "white";
    if (ToTop) {
      ToTop.style.display = "none";
    }
  }
});
ToTop &&
  ToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

const Navbar = document.querySelector(".desktop-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    if (Navbar) {
      Navbar.classList.add("actice-nav");
    }
  } else {
    if (Navbar) {
      Navbar.classList.remove("actice-nav");
    }
  }
});

const Navbar1 = document.querySelector(".product-mobile");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    Navbar1.classList.add("actice-nav");
    if (Navbar1) {
    }
  } else {
    Navbar1.classList.remove("actice-nav");
    if (Navbar1) {
    }
  }
});

const Navbar2 = document.querySelector(".product-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    if (Navbar2) {
      Navbar2.classList.add("actice-nav");
    }
  } else {
    Navbar2.classList.remove("actice-nav");
    if (Navbar2) {
    }
  }
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
