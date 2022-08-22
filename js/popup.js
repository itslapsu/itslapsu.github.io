$(document).ready(function() {
    $(".link").click(function () {
        $(".popup").fadeIn();
    });
    $(".popup-close, .popup").click(function () {
        $(".popup").fadeOut();
    });
});