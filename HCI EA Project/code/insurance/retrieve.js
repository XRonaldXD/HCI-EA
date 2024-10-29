$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const coverage = urlParams.get('coverage');

    if (coverage) {
        $('#coverage-type').text(coverage);
    }
});