$(document).ready(function() {
    $("#rfrshBtn").click(function() {
        window.location.reload(true);
    });

    $("#rfrshBtn").hover(function(e) {
        $(this).toggleClass('fa-spin');
        $(this).css("color", e.type === "mouseenter" ? "lime" : "white");
    });

    $("#goHomeBtn").click(function() {
        window.history.back();
    });
});

$("body").flowtype({
    minFont: 8,
    maxFont: 14
});
