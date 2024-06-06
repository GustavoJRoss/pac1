// scripts.js
let slideIndex = 0;
showSlide(slideIndex);

function nextSlide() {
    showSlide(slideIndex += 1);
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function showSlide(index) {
    const slides = document.querySelectorAll('.feature');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        slide.classList.remove('active');
    });

    slides[slideIndex].style.display = 'block';
    slides[slideIndex].classList.add('active');
}
