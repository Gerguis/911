$(document).ready(function() {
    $("#rfrshBtn").click(function() {
        window.location.reload(true);
    });
    $("#rfrshBtn").hover(function(e) {
	    $("#frshBtnIcn").toggleClass('fa-spin');
    });
    $("#goHomeBtn").click(function() {
        window.history.back();
    });
});

$("body").flowtype({
    minFont: 8,
    maxFont: 14,
    fontRatio: 35
});
