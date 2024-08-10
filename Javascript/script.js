// script.js
window.addEventListener('load', function() {
    const intro = document.getElementById('intro');
    const mainContent = document.getElementById('main-content');

    setTimeout(function() {
        intro.classList.add('hidden');
        setTimeout(function() {
            intro.style.display = 'none';
            mainContent.style.display = 'block';
            document.body.style.overflow = 'auto'; // Mengembalikan kemampuan scrolling
        }, 1000); // Waktu transisi sesuai dengan CSS
    }, 3000); // Durasi tampilan layar pembuka (dalam milidetik)
});
