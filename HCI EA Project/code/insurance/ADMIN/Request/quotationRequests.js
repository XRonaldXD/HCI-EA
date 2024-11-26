$(document).ready(function() {
    // Fetch and display the incoming quotation requests
    fetchQuotationRequests();

    // Handle the update status form submission
    $("#quotation-form").submit(function(event) {
        event.preventDefault();
        updateQuotationStatus();
    });

    // Handle the cancel button click
    $("#cancel").click(function() {
        resetQuotationForm();
        $(".quotation-list").show();
        $(".quotation-details").hide();
    });
});

function fetchQuotationRequests() {
    // Implement the logic to fetch the incoming quotation requests from a server or database
    var quotationRequests = [
        {
            quoteID: 1,
            vehicleModel: "Toyota Camry",
            insuranceCoverage: "Comprehensive",
            customerName: "John Doe",
            status: "pending"
        },
        {
            quoteID: 2,
            vehicleModel: "Honda Accord",
            insuranceCoverage: "Third Party Cover",
            customerName: "Jane Smith",
            status: "pending"
        },
        {
            quoteID: 3,
            vehicleModel: "Ford Focus",
            insuranceCoverage: "Liability Only",
            customerName: "Michael Johnson",
            status: "pending"
        }
    ];

    // Populate the quotation table
    var tableBody = $("#quotation-table tbody");
    tableBody.empty();

    quotationRequests.forEach(function(request) {
        var row = $("<tr>");
        row.append($("<td>").text(request.quoteID));
        row.append($("<td>").text(request.vehicleModel));
        row.append($("<td>").text(request.insuranceCoverage));
        row.append($("<td>").text(request.customerName));
        row.append($("<td>").text(request.status));
        row.append($("<td>")
            .append($("<button>")
                .addClass("btn")
                .text("View")
                .click(function() {
                    $(".quotation-list").hide();
                    $(".quotation-details").show();
                    displayQuotationDetails(request);
                    
                })
            )
        );
        tableBody.append(row);
    });
}

function displayQuotationDetails(quotation) {
    // Populate the quotation details form
    $("#quoteID").val(quotation.quoteID);
    $("#vehicleModel").val(quotation.vehicleModel);
    $("#insuranceCoverage").val(quotation.insuranceCoverage);
    $("#customerName").val(quotation.customerName);
    $("#customerEmail").val(quotation.customerEmail);
    $("#status").val(quotation.status);
}

function updateQuotationStatus() {
    // Implement the logic to update the quotation status
    var quoteID = $("#quoteID").val();
    var status = $("#status").val();

    // Update the quotation status on the server or in the database
    // ...

    // Refresh the quotation list
    fetchQuotationRequests();

    // Reset the quotation details form
    resetQuotationForm();
}

function resetQuotationForm() {
    // Reset the quotation details form
    $("#quoteID").val("");
    $("#vehicleModel").val("");
    $("#insuranceCoverage").val("");
    $("#customerName").val("");
    $("#customerEmail").val("");
    $("#status").val("pending");
}