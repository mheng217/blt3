// Slide show banner
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.style.display = i === slideIndex ? "block" : "none";
  });
}

function plusSlides(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlides();
}

document.addEventListener("DOMContentLoaded", () => {
  showSlides();

  // Tự động chuyển slide sau mỗi 1 giây (1000ms)
  setInterval(() => {
    plusSlides(1);
  }, 5000);
});

// Kéo ngang carousel món ăn
document.querySelectorAll(".dish-carousel").forEach((carousel) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.classList.add("active");
  });

  carousel.addEventListener("mouseleave", () => {
    isDown = false;
    carousel.classList.remove("active");
  });

  carousel.addEventListener("mouseup", () => {
    isDown = false;
    carousel.classList.remove("active");
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1;
    carousel.scrollLeft = scrollLeft - walk;
  });
});

// Tìm kiếm món ăn
const searchInput = document.getElementById("searchInput");
const menuCategories = document.querySelectorAll(".menu-category");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase().trim();

    menuCategories.forEach((category) => {
      let hasVisibleDishes = false;
      const dishCards = category.querySelectorAll(".dish-card");

      dishCards.forEach((card) => {
        const dishNameElement = card.querySelector("h3");
        const dishName = dishNameElement
          ? dishNameElement.textContent.toLowerCase()
          : "";

        if (dishName.includes(searchTerm)) {
          card.style.display = "block";
          hasVisibleDishes = true;
        } else {
          card.style.display = "none";
        }
      });

      category.style.display =
        hasVisibleDishes || searchTerm === "" ? "block" : "none";
    });
  });
}
