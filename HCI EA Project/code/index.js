$(document).ready(function() {
    $('#shop-now').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#inventory').offset().top
        }, 1000);
    });

    $("#login").click(function(){
        window.location.href = "Car.html";
    });
});