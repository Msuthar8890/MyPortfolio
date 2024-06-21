var typed = new Typed(".text", {
    strings: ["FullStack Developer", "Web Developer", "Youtuber", "Laravel Developer"],
    typeSpeed: 50,
    backSpeed: 40,
    backDelay: 100,
    loop: true
});






// const slider = document.querySelector('.portfolio-content');
// let isSliding = true;

// function autoSlide() {
//     if (!isSliding) return;

//     const firstCard = slider.firstElementChild;
//     const cardWidth = firstCard.offsetWidth;

//     slider.style.transition = 'transform 0.5s ease-in-out';
//     slider.style.transform = `translateX(-${cardWidth}px)`;

//     slider.addEventListener('transitionend', () => {
//         slider.style.transition = 'none';
//         slider.appendChild(firstCard);
//         slider.style.transform = 'translateX(0)';

//         // Re-enable the sliding
//         if (isSliding) {
//             setTimeout(autoSlide, 2000); // Adjust the interval as needed
//         }
//     }, { once: true });
// }

// slider.addEventListener('mouseover', () => isSliding = false);
// slider.addEventListener('mouseout', () => {
//     isSliding = true;
//     setTimeout(autoSlide, 2000); // Restart the sliding
// });

// // Initial start of auto sliding
// setTimeout(autoSlide, 2000); // Start the sliding after a delay