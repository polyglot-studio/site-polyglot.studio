function navigationLinkClick(e) {
  console.log('func fired');
  if (jQuery("nav#mainav").hasClass('nav-is-bot')) {
    console.log('is bot');
    jQuery("nav#mainav").removeClass('nav-is-bot').addClass("nav-is-top").attr('style','bottom:inherit;');
  }
  else {
    console.log('is top');
    jQuery("nav#mainav").removeClass('nav-is-top').addClass("nav-is-bot").attr('style','bottom:0;');
  }
}

jQuery(document).ready(function() {
  jQuery("nav#mainnav").on('click', 'a', function(e) {
    console.log('click fired');
    e.preventDefault();
    navigationLinkClick(e);
  })
});
