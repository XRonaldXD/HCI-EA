$(document).ready(function() {
    $("#tracking-form").submit(function(event) {
        event.preventDefault();
        const quoteID = $("#quoteID").val();
        trackQuotationStatus(quoteID);
    });

    $("#send-message").click(function() {
        const message = $("#customer-message").val();
        sendCustomerMessage(message);
    });
});

function trackQuotationStatus(quoteID) {
    // Simulated quotation status data
    const quotationStatus = {
        "101": "This quotation is currently being processed.",
        "102": "This quotation has been approved.",
        "103": "This quotation has been rejected. Please contact support.",
        "104": "This quotation is under review."
    };

    const statusMessage = quotationStatus[quoteID] || "Quotation ID not found. Please check and try again.";
    $("#status-message").text(statusMessage);
    $("#status-result").show();
}

function sendCustomerMessage(message) {
    if (message.trim() === "") {
        alert("Please enter a message before sending.");
        return;
    }
    
    // Simulate sending a message
    alert("Your message has been sent: " + message);
    $("#customer-message").val(""); // Clear the message input
}