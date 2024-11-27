$(document).ready(function() {
    // Fetch and display vehicle orders
    fetchVehicleOrders();

    // Handle the update status form submission
    $("#quotation-form").submit(function(event) {
        event.preventDefault();
        updateQuotationStatus();
    });

    // Handle the cancel button click
    $("#cancel").click(function() {
        resetQuotationForm();
        $(".quotation-details").hide();
        $(".quotation-list").show();
    });

    // Handle the "View" button click
    $(document).on("click", ".view-btn", function() {
        var quoteID = $(this).data("quote-id");
        displayQuotationDetails(quoteID);
        $(".quotation-list").hide();
        $(".quotation-details").show();
    });
});

function fetchVehicleOrders() {
    // Simulate fetching vehicle orders from a server
    var vehicleOrders = [
        {
            quoteID: 1,
            vehicleModel: "Toyota Camry",
            customerName: "John Doe",
            status: "pending"
        },
        {
            quoteID: 2,
            vehicleModel: "Honda Accord",
            customerName: "Jane Smith",
            status: "approved"
        },
        {
            quoteID: 3,
            vehicleModel: "Ford Focus",
            customerName: "Michael Johnson",
            status: "rejected"
        }
    ];

    // Populate the quotation table
    var tableBody = $("#quotation-table tbody");
    tableBody.empty();

    vehicleOrders.forEach(function(order) {
        var row = $("<tr>");
        row.append($("<td>").text(order.quoteID));
        row.append($("<td>").text(order.vehicleModel));
        row.append($("<td>").text(order.customerName));
        row.append($("<td>").text(order.status));
        row.append($("<td>")
            .append($("<button>")
                .addClass("btn view-btn")
                .text("View")
                .data("quote-id", order.quoteID)
            )
        );
        tableBody.append(row);
    });
}

function displayQuotationDetails(quoteID) {
    // Simulate fetching quotation details based on quoteID
    var quotation = {
        quoteID: quoteID,
        vehicleModel: "Toyota Camry",
        customerName: "John Doe",
        status: "pending"
    };

    // Populate the quotation details form
    $("#quoteID").val(quotation.quoteID);
    $("#vehicleModel").val(quotation.vehicleModel);
    $("#customerName").val(quotation.customerName);
    $("#status").val(quotation.status);
}

function updateQuotationStatus() {
    // Simulate updating the quotation status
    var quoteID = $("#quoteID").val();
    var status = $("#status").val();

    // Refresh the vehicle orders list
    fetchVehicleOrders();

    // Reset the quotation details form
    resetQuotationForm();
    $(".quotation-details").hide();
    $(".quotation-list").show();
}

function resetQuotationForm() {
    // Reset the quotation details form
    $("#quoteID").val("");
    $("#vehicleModel").val("");
    $("#customerName").val("");
    $("#status").val("pending");
}