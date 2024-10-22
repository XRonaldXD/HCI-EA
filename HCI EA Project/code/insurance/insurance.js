$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way
        
        // Simulated login credentials
        const username = $('#username').val();
        const password = $('#password').val();

        // Check for correct credentials (for demonstration, use "user" and "pass")
        if (username === "user" && password === "pass") {
            $('#loginContainer').hide(); // Hide login form
            $('#insurancePage').show(); // Show insurance content
        } else {
            $('#loginMessage').html('Invalid username or password. Please try again.');
        }
    });

    $('#quoteForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the default way
        
        // Get form data
        var name = $('#name').val();
        var email = $('#email').val();
        var vehicle = $('#vehicle').val();
        var year = $('#year').val();

        // Simulate a quote request
        $('#quoteResponse').html(`Thank you, ${name}! Your quote request for a ${year} ${vehicle} has been submitted. We will contact you at ${email}.`);
        
        // Clear the form
        $('#quoteForm')[0].reset();
    });
});