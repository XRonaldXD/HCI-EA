$(document).ready(function () {

  var policyButtonsPressed = false;

  $("#quoteForm").on("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Collect values from the first form
    const name = $('#name').val();
    const email = $('#email').val();
    const vehicle = $('#vehicle').val();
    const year = $('#year').val();

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Vehicle Model:', vehicle);
    console.log('Year:', year);

    // After submit hide the form and display detail form for user to input more LOL
    $(this).hide();
    $("#qutoeHeader").html("Get a Quote > Details");
    $("#quoteDetailForm").show();
  });

  $("#qutoeHeader").click(function () {
    $("#qutoeHeader").html("Get a Quote");
    $("#quoteDetailForm").hide();
    $("#quoteResponse").hide();
    $("#quoteForm").show();
  })

  $("#Back").click(function(){
    $("#qutoeHeader").html("Get a Quote");
    $("#quoteDetailForm").hide();
    $("#quoteResponse").hide();
    $("#quoteForm").show();
  })

  $("#quoteDetailForm").on("submit", function (event) {
    event.preventDefault();
    if (!policyButtonsPressed) {
      event.preventDefault(); // Prevent the form from submitting
      alert("Please select a car insurance policy.");
    } else {
      // Allow the form to submit
      policyButtonsPressed = false;

      // Collect values from the second form
      const carPrice = $('#Price').val();
      const driverAge = $('#driverAge').val();
      const drivingExperience = $('.experience-select').val();
      const offencePoints = $('.offencePoint').val();
      const occupation = $('.dropdown-input').val();

      console.log('Car Price:', carPrice);
      console.log('Driver Age:', driverAge);
      console.log('Driving Experience:', drivingExperience);
      console.log('Offence Points:', offencePoints);
      console.log('Occupation:', occupation);

      $("#quoteDetailForm").hide();
      $("#quoteResponse").show();
    }

  });

  // Reset fields when user wants a new quote
  $("#newQuoteButton").click(function (event) {
    event.preventDefault(); // Prevent form submission or default action

    $("#quoteResponse").hide();          // Hide the response message
    $("#quoteForm").show();              // Show the initial quote form
    $("#quoteDetailForm").hide();        // Ensure the detail form is hidden
    $("#name, #email, #vehicle, #year").val(''); // Clear the fields
    $("#Price").val('');                 // Clear the car price input
    $("#driverAge").val('');             // Clear the driver age input
    $(".experience-select").prop("selectedIndex", 0); // Reset driving experience select
    $(".offencePoint").prop("selectedIndex", 0); // Reset offence points select
    $(".dropdown-input").val('');         // Clear the occupation input
    $(".policy-button").removeClass("active"); // Reset policy button state
    policyButtonsPressed = false;        // Reset policy button tracking
    $(".formButton").removeClass("active"); // Reset policy button state

    policyButtonsPressed = false;        // Reset policy button tracking
    $('#coverage-type').text(coverage);
});

  $(".formButton").click(function (event) {
    event.preventDefault(); // Prevent the default button click behavior
    console.log("policy-button clicked!");
    $(this).addClass("active").siblings().removeClass("active");
    policyButtonsPressed = true;
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
