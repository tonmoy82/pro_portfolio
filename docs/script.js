document.addEventListener("DOMContentLoaded", function () {
    const aboutText = document.querySelector(".about-text");
    const aboutImage = document.querySelector(".about-image");

    // Add the 'hidden' class initially
    if (aboutText) aboutText.classList.add("hidden");
    if (aboutImage) aboutImage.classList.add("hidden");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Remove the 'hidden' class to trigger the slide-in animation
                    if (aboutText) aboutText.classList.remove("hidden");
                    if (aboutImage) aboutImage.classList.remove("hidden");
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    // Observe the About Me section
    const aboutSection = document.querySelector("#about");
    if (aboutSection) observer.observe(aboutSection);
});


