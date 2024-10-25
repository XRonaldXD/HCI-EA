$(document).ready(function () {
  $("#loginForm").on("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Simulated login credentials
    const email = $("#email").val();
    const password = $("#password").val();

    // Check for correct credentials (for demonstration, use "user" and "pass")
    if (email === "user@vtc.com" && password === "pass") {
      $("#loginContainer").hide(); // Hide login form
      $("#insurancePage").show(); // Show insurance content
    } else {
      $("#loginMessage").html("Invalid email or password. Please try again.");
    }
  });

  $("#quoteForm").on("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get form data
    var name = $("#name").val();
    var email = $("#email").val();
    var vehicle = $("#vehicle").val();
    var year = $("#year").val();

    // After submit hide the form and display detail form for user to input more LOL
    $(this).hide();
    $("#qutoeHeader").html("Get a Quote > Details");
    $("#quoteDetailForm").show();
  });

  $("#qutoeHeader").click(function(){
    $("#qutoeHeader").html("Get a Quote");
    $("#quoteDetailForm").hide();
    $("#quoteForm").show()
  })
  
  $(".policy-button").click(function () {
    console.log("policy-button clicked!");
    $(this).addClass("active").siblings().removeClass("active");
  });

  $('.experience-select option[value=""]').attr("selected", "selected");
  $('.experience-select option[value=""]').hide();

  $(".experience-select").change(function () {
    if ($(this).val() === "") {
      $('.experience-select option[value=""]').show();
    } else {
      $('.experience-select option[value=""]').hide();
    }
  });
   // Toggle the dropdown menu visibility
   $('.dropdown-input').click(function() {
    $(this).siblings('.dropdown-menu').toggle();
  });

  // Handle the option selection
  $('.option').click(function() {
    var selectedOption = $(this).text();
    $('.dropdown-input').val(selectedOption);
    $('.dropdown-menu').hide();
  });

  // Hide the dropdown menu when clicking outside the dropdown
  $(document).click(function(event) {
    if (!$(event.target).closest('.dropdown').length) {
      $('.dropdown-menu').hide();
    }
  });

  // Show/hide the dropdown options based on the search input
  $('.search-input').on('input', function() {
    var searchTerm = $(this).val().toLowerCase();
    $('.option').each(function() {
      var optionText = $(this).text().toLowerCase();
      if (optionText.includes(searchTerm)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
