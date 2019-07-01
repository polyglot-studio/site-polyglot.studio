jQuery(document).ready(function() {
    var navheight = jQuery("nav#mainnav").outerHeight();
    jQuery('#preloadOverlay').fadeOut(500, "linear");
    setTimeout(function() {
        jQuery("nav#mainnav").removeClass('nav-is-top').addClass("nav-is-bot").attr('style','bottom:calc(' + navheight + 'px - 100vh);');
        jQuery("#topContent").removeClass('offscreen-top').attr('style', 'height:calc(100vh - ' + navheight + 'px)');
        //jQuery("#contentHolder").attr('style', 'height:calc(100vh - ' + navheight + 'px)');
    }, 500);
});
