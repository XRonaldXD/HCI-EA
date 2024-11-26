document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    // Here you could handle form submission, e.g., send data to a server
    alert("Thank you for your message! We will get back to you shortly.");
    this.reset(); // Reset the form after submission
});