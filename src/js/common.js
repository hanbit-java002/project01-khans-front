define([
	"bootstrap",
], function() {
	function showMenuFilter() {
		$(".menu-list-box, .menu-layer").fadeIn();
	}
	function hideMenuFilter() {
		$(".menu-list-box, .menu-layer").fadeOut();
	}

	$("#menu-more-btn").on("click", function() {
		showMenuFilter();
	});

	$("#menu-more, .wz-contents").on("click", function() {
		hideMenuFilter();
	});

	$("#main-logo").on("click", function() {
		location.href = "/";
	});

	$(".process").on("click", function() {
		location.href = "/process.html";
	});

	$(".culture").on("click", function() {
		location.href = "/culture.html";
	});

	$(".service").on("click", function() {
		location.href = "/service.html";
	});

	$(".introduction").on("click", function() {
		location.href = "/introduction.html";
	});

	$(".recruit").on("click", function() {
		location.href = "/recruit.html";
	});

	$(".contact").on("click", function() {
		location.href = "/contact.html";
	});

	$(".inquire").on("click", function() {
		location.href = "/inquire.html";
	});

	$(".example").on("click", function() {
		location.href = "/example.html";
	});

	$("#main-menu>ul>li:last-child").on("click", function() {
		location.href = "faq.html";
	});
});
