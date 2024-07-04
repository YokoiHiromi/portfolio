'use strict';

document.addEventListener("DOMContentLoaded", function() {
    console.log("Initializing script.js");

    const galleries = document.querySelectorAll('.gallery');

    galleries.forEach((gallery) => {
        const largeImageContainer = gallery.querySelector('.large-image-container');
        const largeImage = gallery.querySelector('.large-image');
        const thumbnails = gallery.querySelectorAll('.thumbnail');
        const imageTitle = gallery.querySelector('.image-title');
        const imageDescription = gallery.querySelector('.image-description p');

        console.log("Elements selected:", largeImageContainer, largeImage, thumbnails);

        let currentIndex = 0;

        const updateImage = (index) => {
            const newSrc = thumbnails[index].src.replace('thumb', 'large');
            console.log("New image source:", newSrc);
            largeImage.style.opacity = 0;
            setTimeout(() => {
                largeImage.src = newSrc;
                largeImage.onload = () => {
                    console.log("Image loaded:", newSrc);
                    largeImage.style.opacity = 1;
                    imageDescription.textContent = thumbnails[index].alt ;
                };
            }, 500);
        };

        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('mouseover', () => {
                currentIndex = index;
                updateImage(currentIndex);
            });
        });

        const prevButton = document.createElement('button');
        prevButton.textContent = '＜';
        prevButton.className = 'slider-button prev';
        largeImageContainer.appendChild(prevButton);

        const nextButton = document.createElement('button');
        nextButton.textContent = '＞';
        nextButton.className = 'slider-button next';
        largeImageContainer.appendChild(nextButton);

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
            updateImage(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
            updateImage(currentIndex);
        });
    });
});

// トップへ戻るボタンの設定
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.getElementById('scroll-to-top');

    function checkScroll() {

        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
