window.addEventListener("load", function () {
  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("main-content");

  // Tampilkan main-content terlebih dahulu dengan opacity 0
  mainContent.style.display = "block";
  setTimeout(function () {
    mainContent.classList.add("show");
  }, 10); // Sedikit delay untuk memastikan display block diterapkan

  setTimeout(function () {
    intro.classList.add("hidden");
    setTimeout(function () {
      intro.style.display = "none";
      document.body.style.overflow = "auto"; // Mengembalikan kemampuan scrolling
    }, 1000); // Waktu transisi sesuai dengan CSS
  }, 3000); // Durasi tampilan layar pembuka (dalam milidetik)
});
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("header");
  if (window.scrollY > 50) {
    // Ubah angka ini sesuai dengan seberapa jauh scroll yang diinginkan
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});
const toggleButton = document.getElementById("navbar-toggle");
const navbar = document.querySelector(".navbar");

toggleButton.addEventListener("click", () => {
  navbar.classList.toggle("active"); // Tambah atau hapus class 'active'
});
