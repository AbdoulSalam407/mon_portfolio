/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Active link highlight based on scroll position (vanilla ScrollSpy)
    const navLinks = Array.from(document.querySelectorAll('#mainNav a[href^="#"]'));
    const sections = navLinks
        .map((a) => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);

    if (sections.length) {
        const setActive = (id) => {
            navLinks.forEach((a) => {
                const isActive = a.getAttribute('href') === `#${id}`;
                a.classList.toggle('active', isActive);
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                const activeEntry = entries.find((e) => e.isIntersecting);
                if (activeEntry && activeEntry.target && activeEntry.target.id) {
                    setActive(activeEntry.target.id);
                }
            },
            {
                root: null,
                threshold: 0.2,
                rootMargin: '0px 0px -45% 0px',
            }
        );

        sections.forEach((s) => observer.observe(s));
    }

    // Close mobile menu when a link is clicked (works with checkbox-based menu)
    const menuToggle = document.getElementById('nav-toggle');
    if (menuToggle) {
        navLinks.forEach((a) => {
            a.addEventListener('click', () => {
                if (menuToggle.checked) {
                    menuToggle.checked = false;
                }
            });
        });
    }

});
