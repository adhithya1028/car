// JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;
    let autoSlideInterval;

    // Function to display the testimonial at the given index
    const showTestimonial = (index) => {
        testimonials.forEach((item, i) => {
            item.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    };

    // Function to start automatic sliding
    const startAutoSlide = () => {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }, 5000); // Change testimonial every 5 seconds
    };

    // Function to stop automatic sliding
    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    // Initialize testimonials
    showTestimonial(currentIndex);
    startAutoSlide();

    // Pause auto-slide on hover and resume on mouse leave
    const sliderContainer = document.querySelector('.testimonial-slider');
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);
});
// checkout.js

document.addEventListener('DOMContentLoaded', () => {
    // Example dynamic data for the order summary (can be fetched from a server in real use)
    const serviceName = "Premium Wash";
    const servicePrice = "$25";

    // Populate order summary with dynamic content
    document.getElementById('service-name').textContent = serviceName;
    document.getElementById('service-price').textContent = servicePrice;

    // Form submission handler
    const paymentForm = document.querySelector('.payment-form');
    paymentForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Collect user input
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const card = document.getElementById('card').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;

        // Perform basic validation (optional, can add more robust checks)
        if (!name || !email || !card || !expiry || !cvv) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate payment processing
        alert(`Thank you, ${name}! Your payment of ${servicePrice} for the ${serviceName} service was successful.`);

        // Clear the form
        paymentForm.reset();
    });
});
