$(document).ready(function() {
	 var navoffeset=$("nav").offset().top;
	 $(window).scroll(function(){
	 	var scrollpos=$(window).scrollTop(); 
	 });	 
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 600) {
        $(".mainmenu").addClass("scrolled");
    }
    if (scroll <= 600) {
        $(".mainmenu").removeClass("scrolled");
    }
});
