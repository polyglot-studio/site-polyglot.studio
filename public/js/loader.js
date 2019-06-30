jQuery(document).ready(function() {
    var navheight = jQuery("nav#mainnav").outerHeight();
    jQuery('#preloadOverlay').fadeOut(500, "linear");
    setTimeout(function() { 
        jQuery("nav#mainnav").removeClass('nav-is-top').addClass("nav-is-bot").attr('style','bottom:0;');
    }, 500);
});
