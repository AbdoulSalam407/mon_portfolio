// script.js
console.log("Portfolio d'Abdoul Salam DIALLO chargé !");

// Smooth scrolling for potential future anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// Slight animation on project card hover (can be enhanced with CSS)
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Placeholder for potential JS-driven hover effects
    });
    card.addEventListener('mouseleave', () => {
        // Placeholder for potential JS-driven hover effects
    });
});

// Potential future enhancements:
// - Interactive skill elements (e.g., showing proficiency levels)
// - Filtering projects by category
// - Contact form integration (if desired)