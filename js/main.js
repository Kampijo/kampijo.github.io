function animatePage() {
	$(".animate").each(function(i) {
        $(this).delay(i * 1000).hide().fadeIn(1000); 
    });
};

$(function() {
	$(document).ready(animatePage());
});