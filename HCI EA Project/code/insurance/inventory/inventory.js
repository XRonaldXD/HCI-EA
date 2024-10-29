$(document).ready(function () {
    // Open modal for editing
    $('.Edit-btn').click(function () {
        var applicationId = $(this).data('id');
        // Fetch existing data (for demo purposes, using static values)
        var vehicleModel = applicationId === 1 ? 'Toyota Camry' : 'Honda Accord';
        var insuranceCoverage = applicationId === 1 ? 'Comprehensive' : 'Liability Coverage';
        var carPrice = applicationId === 1 ? '25000' : '20000';
        var driverAge = applicationId === 1 ? '35' : '28';
        var drivingExperience = applicationId === 1 ? '4-7 years' : '1-3 years';
        var offencePoints = applicationId === 1 ? '1-3' : '0';
        var occupation = applicationId === 1 ? 'Professional' : 'Business Owner';

        // Populate form fields
        $('#quoteID').val(applicationId);
        $('#vehicleModel').val(vehicleModel);
        $('#insuranceCoverage').val(insuranceCoverage);
        $('#Price').val(carPrice);
        $('#driverAge').val(driverAge);
        $('.experience-select').val(drivingExperience);
        $('.offencePoint').val(offencePoints);
        $('.dropdown-input').val(occupation);
        $('#applicationModal').show();
        $('#vehicleModel').focus();
    });

    // Close modal
    $('.cancel-btn').click(function () {
        $('#applicationModal').hide();
    });

    // Close modal
    $('.close').click(function () {
        $('#applicationModal').hide();
    });

    // Handle form submission
    $('#editForm').submit(function (event) {
        event.preventDefault();
        // Update application details (for demo, just logging to console)
        var updatedModel = $('#vehicleModel').val();
        var updatedStatus = $('#status').val();
        console.log('Updated Model:', updatedModel);
        console.log('Updated Status:', updatedStatus);

        // Close modal
        $('#applicationModal').hide();
    });

    // Close modal when clicking outside of it
    $(window).click(function (event) {
        if ($(event.target).is('#applicationModal')) {
            $('#applicationModal').hide();
        }
    });

    // Cancel the entire row
    $('.Cancel-btn').click(function () {
        var $row = $(this).closest('tr');
        $row.remove();
    });

    // Toggle the dropdown menu visibility
    $('.dropdown-input').click(function () {
        $(this).siblings('.dropdown-menu').toggle();
    });

    // Handle the option selection
    $('.option').click(function () {
        var selectedOption = $(this).text();
        $('.dropdown-input').val(selectedOption);
        $('.dropdown-menu').hide();
    });

    // Hide the dropdown menu when clicking outside the dropdown
    $(document).click(function (event) {
        if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown-menu').hide();
        }
    });

    // Show/hide the dropdown options based on the search input
    $('.search-input').on('input', function () {
        var searchTerm = $(this).val().toLowerCase();
        $('.option').each(function () {
            var optionText = $(this).text().toLowerCase();
            if (optionText.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});