$(document).ready(function() {
    $(function() {
        $("#stateUseCirc").percircle();
    });
    $("#rfrshBtn").click(function() {
        window.location.reload(true);
    });

    $("#rfrshBtn").hover(function(e) {
        $(this).toggleClass('fa-spin');
        $(this).css("color", e.type === "mouseenter" ? "lime" : "white");
    });
});

$("body").flowtype({
    minFont: 8,
    maxFont: 14
});

var btn = document.getElementById('copyUrlBtn');
var clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
    //console.info('Action:', e.action);
    console.info('Text:', e.text);
    //console.info('Trigger:', e.trigger);
    e.clearSelection();
});

clipboard.on('error', function(e) {
    //console.error('Action:', e.action);
    //console.error('Trigger:', e.trigger);
});
