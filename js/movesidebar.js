
$( document ).ready(function() {
    $(window).scroll(function(){
    	//This is a slighty dodgy way of not applying animation to sidebar when we're in mobile view
    	if($('#nav').css('display')!='none') {
    		$("#sidebar1").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "fast" );
		}
	});
});
