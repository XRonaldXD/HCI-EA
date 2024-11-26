$(document).ready(function() {
    // Fetch application data from the server or local storage
    fetchApplicationData();
});

function fetchApplicationData() {
    // Fetch application data from the server or local storage
    // and populate the application table
    var applicationData = [
        {
            quoteID: 1,
            vehicleModel: "Toyota Camry",
            insuranceCoverage: "Comprehensive",
            status: "Waiting for Submit"
        },
        {
            quoteID: 2,
            vehicleModel: "Honda Accord",
            insuranceCoverage: "Third Party Cover",
            status: "Submitted"
        },
        {
            quoteID: 3,
            vehicleModel: "Ford Focus",
            insuranceCoverage: "Liability Only",
            status: "Rejected"
        },
        {
            quoteID: 4,
            vehicleModel: "Chevrolet Malibu",
            insuranceCoverage: "Comprehensive",
            status: "Waiting for Submit"
        },
        {
            quoteID: 5,
            vehicleModel: "Nissan Altima",
            insuranceCoverage: "Third Party Cover",
            status: "Waiting for Submit"
        }
    ];

    var tableBody = $("#application-table-body");
    tableBody.empty();

    applicationData.forEach(function(application) {
        var row = $("<tr>");
        row.append($("<td>").text(application.quoteID));
        row.append($("<td>").text(application.vehicleModel));
        row.append($("<td>").text(application.insuranceCoverage));
        row.append($("<td>").text(application.status));
        tableBody.append(row);
    });
}