
$(document).ready(function ($) {
    var options = { 
    	$AutoPlay: true, 
    	$AutoPlayInterval: 5000,
    	$ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
            $Class: $JssorArrowNavigator$,              //[Required] Class to create arrow navigator instance
            $ChanceToShow: 1                            //[Required] 0 Never, 1 Mouse Over, 2 Always
        }};
    var jssor_slider1 = new $JssorSlider$('slider1_container', options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales
    //while window resizes
    function ScaleSlider() {
        var parentWidth = $('#slider1_container').parent().width();
        if (parentWidth) {
            jssor_slider1.$ScaleWidth(parentWidth);
        }
        else
            window.setTimeout(ScaleSlider, 30);
    }
    //Scale slider after document ready
    ScaleSlider();
                                    
    //Scale slider while window load/resize/orientationchange.
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
});
