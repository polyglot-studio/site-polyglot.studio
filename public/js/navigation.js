function navigationLinkClick(e) {
  if (jQuery("nav#mainav").hasClass('nav-is-bot')) {
    jQuery("nav#mainav").removeClass('nav-is-bot').addClass("nav-is-top").attr('style','bottom:inherit;');
  }
  else {
    jQuery("nav#mainav").removeClass('nav-is-top').addClass("nav-is-bot").attr('style','bottom:0;');
  }
}

jQuery(document).ready(function() {
  jQuery("nav#mainnav").on('click', 'a', function(e) {
    e.preventDefault();
    navigationLinkClick(e);
  })
});
