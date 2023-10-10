(function ($) {
    "use strict";

    $(document).ready(function($){
        
        

  

        // projects filters isotop ******************
        $(".product-filters li").on('click', function () {
            
            $(".product-filters li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');

            $(".product-lists").isotope({
                filter: selector,
            });
            
        });
        
      
    
    });


    jQuery(window).on("load",function(){
        jQuery(".loader").fadeOut(1000);
    });


}(jQuery));