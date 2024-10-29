$(document).ready(function () {
    $('.add-to-application').click(function () {
        const coverageType = $(this).closest('.coverage-option').find('h3').text();

        $(this)
            .text('Added to Application')
            .addClass('added-to-application');

        // Redirect to the "Get a Quote" page with the coverage type as a URL parameter
        window.location.href = `quote.html?coverage=${encodeURIComponent(coverageType)}`;
    });

});