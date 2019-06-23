function navigationLinkClick(e) {
  alert('clicked');
}

jQuery(document).ready(function() {
  jQuery("nav#mainnav").on('a', 'click', function(e) {
    e.preventDefault();
    navigationLinkClick(e);
  })
});
