$(document).ready(function () {
    $('.add-to-application').click(function () {
        $(this)
            .text('Added to Application')
            .addClass('added-to-application');
    });
});