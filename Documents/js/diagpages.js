$(document).ready(function() {
    $("#rfrshBtn").click(function() {
        window.location.reload(true);
    });
    $("#rfrshBtn").hover(function(e) {
        $("#rfrshBtnIcn").toggleClass('fa-spin');
    });
    $("#goHomeBtn").click(function() {
        window.history.back();
    });

    //Navigation Menu Slider
	$("#hamb-icon").on("click", function(e) {
		e.preventDefault();
		$(this).toggleClass("open");

		$("body").toggleClass("nav-expanded");
	});
	$("#nav-close").on("click", function(e) {
		e.preventDefault();
		$("body").removeClass("nav-expanded");
	});

	// Initialize navgoco with default options
	$(".main-menu").navgoco({
		caret: '<span class="caret"></span>',
		accordion: false,
		openClass: "open",
		save: true,
		cookie: {
			name: "navgoco",
			expires: false,
			path: "/"
		},
		slide: {
			duration: 300,
			easing: "swing"
		}
	});
});

$("body").flowtype({
    minFont: 8,
    maxFont: 14,
    fontRatio: 35
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
