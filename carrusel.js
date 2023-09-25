document.addEventListener("DOMContentLoaded", function () {
    const carouselList = document.querySelector(".carousel-list");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    let currentIndex = 0;

    function goToSlide(index) {
        if (index < 0) {
            index = carouselItems.length - 1;
        } else if (index >= carouselItems.length) {
            index = 0;
        }
        carouselList.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    prevButton.addEventListener("click", () => {
        goToSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        goToSlide(currentIndex + 1);
    });
});