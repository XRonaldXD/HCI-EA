$(document).ready(function() {
    // Open modal for editing
    $('.edit-btn').click(function() {
        var applicationId = $(this).data('id');
        // Fetch existing data (for demo purposes, using static values)
        var vehicleModel = applicationId === 1 ? 'Toyota Camry' : 'Honda Accord';
        var status = applicationId === 1 ? 'Pending' : 'Approved';

        // Populate form fields
        $('#vehicleModel').val(vehicleModel);
        $('#status').val(status);
        $('#applicationModal').show();
    });

    // Close modal
    $('.close').click(function() {
        $('#applicationModal').hide();
    });

    // Handle form submission
    $('#editForm').submit(function(event) {
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
    $(window).click(function(event) {
        if ($(event.target).is('#applicationModal')) {
            $('#applicationModal').hide();
        }
    });
});