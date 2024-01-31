document.addEventListener("DOMContentLoaded", function () {
    // Get the scroll-to-top button
    const scrollToTopButton = document.getElementById("scrollToTop");

    // Add a click event listener to the button
    scrollToTopButton.addEventListener("click", function () {
        scrollToTop();
    });

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Function to scroll smoothly to the top
    function scrollToTop() {
        const duration = 500; // Duration of the scroll animation in milliseconds
        const start = window.pageYOffset;
        const startTime = performance.now();

        function animateScroll(currentTime) {
            const elapsedTime = currentTime - startTime;
            const scroll = easeInOut(elapsedTime, start, -start, duration);
            window.scroll(0, scroll);

            if (elapsedTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        }

        function easeInOut(t, b, c, d) {
            // Easing function for smooth scrolling (ease in-out)
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animateScroll);
    }
});



// Navbarjs========================
window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar-area");
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});
