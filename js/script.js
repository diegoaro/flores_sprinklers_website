document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        });
    });

    // Initialize the carousel
    $('#myCarousel').carousel({
        interval: 5000 // Carousel will auto-slide every 5 seconds
    });

    // Contact form submission handler
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Gather form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const surname = formData.get('surname');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic form validation (could be expanded)
        if (name && surname && email && message) {
            alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
            contactForm.reset();  // Clear the form after submission
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
});
