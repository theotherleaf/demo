// ActionScript Document
$(function(){
	set_toggle_menu();	
	set_scroll();	
	set_carousel();	
	set_mobile_navi();
	set_home_news_info_toggle();
});
function toggle_had_read(){
	if($('.section_main .contact_list .item.read').length>0){
		$('.section_main .contact_list .item.read a').click(function(event){
			event.preventDefault();
			$(this).parent().parent().parent().find('.had_read').toggleClass('active');
		});
	}
}
function set_gotop(){
	$('.gotop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });
}
function set_toggle_menu(){
	$('.toggle_btn').click(function(){		
		$('body').toggleClass('active');
	});
	
}
function set_carousel(){
	if($('.header_slider .owl-carousel').length>0){	
		$('.header_slider .owl-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			dots:true,
			items:1,
			autoplay: false,
			mouseDrag:false
		});		
	}
	if($('.service_slider .owl-carousel').length>0){	
		$('.service_slider .owl-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			dots:true,
			items:1,
			autoplay: false,
			mouseDrag:false
		});		
	}
	if($('.other_slider .owl-carousel').length>0){	
		$('.other_slider .owl-carousel').owlCarousel({
			loop:true,
			margin:50,
			nav:false,
			dots:true,			
			autoplay: false,
			responsiveClass:true,
			mouseDrag:false,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:2
				},
				1300:{
					items:3
				}
			}
		});		
	}	
		
}
function set_scroll(){	
	$(window).scroll(function () {
		var scrollVal = $(this).scrollTop();
		if(scrollVal>80){
			$('body').addClass('scroll');
		}else{
			$('body').removeClass('scroll');
		}
	 });
}
function set_mobile_navi(){	
	$('.mobile_navi ul').prepend($('.header_div .outer .col02 .navi_div ul').html());
	
}
function set_popup_active(id){
	
	$('body').addClass('popup_active');
	$(id).addClass('active');
}
function set_popup_hide(id){
	$('body').removeClass('popup_active');
	$(id).removeClass('active');
}
function set_home_news_info_toggle(){
	if($('.main_div .news_info').length>0){
		$('.main_div .news_info .outer .navi_links a').click(function(event){
			event.preventDefault();
			var id = $(this).attr('href');
			$(this).parent().find('a').removeClass('active');
			$(this).addClass('active');
			$('.main_div .news_info').find('.info_content_div').fadeOut();
			$('.main_div .news_info').find(id).fadeIn();
		});
	}
}