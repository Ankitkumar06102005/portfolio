document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.parallax-section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const header = document.querySelector('.header');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Parallax Effect (Basic CSS Transform approach) ---
    // This part is for adjusting the parallax based on scroll.
    // The main parallax effect comes from transform: translateZ in CSS.

    // A more advanced parallax using JavaScript would
    // calculate scroll position and adjust transform values.
    // Here's a conceptual example. For truly fluid effects like the video,
    // you'd typically use a library.

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const viewportHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            // Check if the section is in the viewport
            if (scrolled + viewportHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
                const distanceFromTop = scrolled - sectionTop;

                // Example for moving layers within a section
                // You'd apply these to background-layer elements
                const layers = section.querySelectorAll('.background-layer');
                layers.forEach(layer => {
                    // Adjust the multiplier for different speeds
                    const speed = parseFloat(layer.dataset.speed || 0.5); // Custom data attribute for speed
                    const yPos = -(distanceFromTop * speed);
                    layer.style.transform = translateY(${yPos}px);
                    // If you're using translateZ for CSS 3D parallax, this
                    // translateY would be an additional movement for scroll.
                    // The video's effect is likely a combination of fixed translateZ
                    // and dynamic translateY or background-position.
                });

                // Example for animating elements within the content-overlay
                const textContent = section.querySelector('.text-content');
                if (textContent) {
                    // Simple fade in on scroll
                    const opacity = Math.min(1, Math.max(0, (distanceFromTop + viewportHeight / 2) / (sectionHeight / 2)));
                    // textContent.style.opacity = opacity; // Uncomment for basic fade-in

                    // More complex animations would use a library like GSAP here.
                    // e.g., GSAP.to(textContent, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: section, start: "top center" } });
                }

                const illustrations = section.querySelectorAll('.illustration');
                illustrations.forEach(illustration => {
                    // Example: make illustrations move slightly
                    const illustrationSpeed = parseFloat(illustration.dataset.speed || 0.2);
                    const illustrationY = -(distanceFromTop * illustrationSpeed);
                    // illustration.style.transform = translateY(${illustrationY}px); // Uncomment for basic illustration movement
                });
            }
        });
    });


    // --- Advanced Parallax with a Library (e.g., GSAP ScrollTrigger) ---
    // For the truly "smooth scroll down animated" effect seen in the video,
    // where background elements move at different speeds and content
    // animates precisely, a library like GSAP with its ScrollTrigger plugin
    // is highly recommended.

    // Example of how you would integrate GSAP (requires adding GSAP library to HTML)
    /*
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
    */

    // GSAP.registerPlugin(ScrollTrigger);

    // sections.forEach((section, i) => {
    //     const backLayer = section.querySelector('.layer-back');
    //     const midLayer = section.querySelector('.layer-mid');
    //     const frontLayer = section.querySelector('.layer-front');
    //     const textContent = section.querySelector('.text-content');
    //     const illustration = section.querySelector('.illustration');

    //     // Parallax for background layers
    //     GSAP.to(backLayer, {
    //         yPercent: 30, // Moves 30% of its height relative to scroll
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: section,
    //             start: "top bottom", // Start when top of section hits bottom of viewport
    //             end: "bottom top",   // End when bottom of section hits top of viewport
    //             scrub: true,         // Link animation to scroll position
    //             // markers: true, // For debugging scroll trigger
    //         }
    //     });

    //     GSAP.to(midLayer, {
    //         yPercent: 15, // Slower movement
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: section,
    //             start: "top bottom",
    //             end: "bottom top",
    //             scrub: true,
    //         }
    //     });

    //     // Animate text content
    //     GSAP.from(textContent, {
    //         y: 50, // Starts 50px lower
    //         opacity: 0,
    //         ease: "power2.out",
    //         scrollTrigger: {
    //             trigger: section,
    //             start: "top center+=10%", // When top of section hits 10% below center of viewport
    //             toggleActions: "play none none reverse", // Play on enter, reverse on leave
    //             // markers: true,
    //         }
    //     });

    //     // Animate illustrations (e.g., fade in and slight move)
    //     if (illustration) {
    //         GSAP.from(illustration, {
    //             x: i % 2 === 0 ? 100 : -100, // Move from left/right depending on section index
    //             opacity: 0,
    //             ease: "power2.out",
    //             scrollTrigger: {
    //                 trigger: section,
    //                 start: "top center+=20%",
    //                 toggleActions: "play none none reverse",
    //                 // markers: true,
    //             }
    //         });
    //     }
    // });
    */
});