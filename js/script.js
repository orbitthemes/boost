$(window).on("load", function() {
    $(".loader").delay(1000).fadeOut("slow");
});

$(document).ready(function() {
    $("#currentYear").text((new Date()).getFullYear());
});
