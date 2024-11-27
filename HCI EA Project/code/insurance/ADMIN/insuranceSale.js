$(document).ready(function() {
    // Handle "View Requests" button click
    $("#view-requests").click(function() {
        displayQuotationRequests();
    });

    // Handle "Manage Quotations" button click
    $("#manage-quotations").click(function() {
        displayQuotationManagement();
    });

    // Handle "Track Status" button click
    $("#track-status").click(function() {
        displayQuotationStatus();
    });
});

function displayQuotationRequests() {
    console.log("Displaying quotation requests...");
    window.location.href = "/insurance/ADMIN/Request/quotationRequest.html";
}

function displayQuotationManagement() {
    console.log("Displaying quotation management interface...");
    window.location.href = "/insurance/ADMIN/Manage/manageQuotation.html";
}

function displayQuotationStatus() {
    console.log("Displaying quotation status tracking...");
    window.location.href = "/insurance/ADMIN/Track/quotationTracking.html";
}