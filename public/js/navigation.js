function navigationLinkClick(e) {
  console.log('func fired');
  var navheight = jQuery("nav#mainnav").outerHeight();
  if (jQuery("nav#mainnav").hasClass('nav-is-bot')) {
    console.log('is bot');
    jQuery("nav#mainnav").removeClass('nav-is-bot').addClass("nav-is-top").attr('style','bottom:calc(100vh - ' + navheight + 'px);');
  }
  else {
    console.log('is top');
    jQuery("nav#mainnav").removeClass('nav-is-top').addClass("nav-is-bot").attr('style','bottom:0;');
  }
}

jQuery(document).ready(function() {
  jQuery("nav#mainnav").on('click', 'a', function(e) {
    console.log('click fired');
    e.preventDefault();
    navigationLinkClick(e);
  })
});
