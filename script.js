// 1. Ẩn màn hình loading sau khi font sẵn sàng
window.addEventListener("load", () => {
  document.fonts.ready.then(() => {
    const loading = document.getElementById("loading-screen");
    loading.classList.add("fade-out");

    setTimeout(() => {
      loading.style.display = "none";
      document.body.style.overflow = "auto";
    }, 1500);
  });
});

// 2. Mở/đóng menu mobile khi click vào biểu tượng menu
const toggle = document.querySelector(".js-menuToggle");
const menu = document.getElementById("mobileMenu");

toggle?.addEventListener("click", function () {
  menu.classList.toggle("open");
  this.classList.toggle("open");
});

// 3. Tự động chuyển ảnh nền trong slideshow mỗi 4 giây
const slides = document.querySelectorAll(".bg-slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 4000);
