document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor link behavior

            const targetId = this.getAttribute('href'); // Get the target section's ID
            const targetElement = document.querySelector(targetId); // Find the section by ID

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for any fixed navigation height
                    behavior: "smooth" // Enable smooth scrolling
                });
            }
        });
    });
});
