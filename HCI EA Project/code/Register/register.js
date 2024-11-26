$(document).ready(function() {
    $(".registration-btn").click(function(e) {
        e.preventDefault();
        const targetId = $(this).data("target");
        $(".registration-form").hide();
        $("#backimg").hide();
        $(targetId).show();
        $("#registrationOptions").hide();
        $("#registrationTitle").text($(this).text() + " Registration");
    });

    $(".back-btn").click(function() {
        $(".registration-form").hide();
        $("#registrationOptions").show();
        $("#backimg").show();
        $("#registrationTitle").text("Registration Options");
    });

    $("#customerForm, #salesForm, #insuranceForm").submit(function(e) {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted!");
        alert("Account Resisted successfully");
        window.location.href = "/login/LoginPage.html"; // Redirect to the login page
    });

    $("#backimg").click(function(){
        window.location.href = "/login/LoginPage.html";
    })
});